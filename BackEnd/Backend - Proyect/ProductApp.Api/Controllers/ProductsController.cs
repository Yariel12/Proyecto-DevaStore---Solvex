using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductApp.Api.Data;
using ProductApp.Api.Models;

namespace ProductApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetAll([FromQuery] int page = 1, [FromQuery] int pageSize = 5)
    {
        if (page <= 0) page = 1;
        if (pageSize <= 0) pageSize = 5;

        var total = await _context.Products.CountAsync();

        var products = await _context.Products
            .Include(p => p.Variations)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        var response = new
        {
            data = products,
            total
        };

        return Ok(response);
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetById(int id)
    {
        var product = await _context.Products
            .Include(p => p.Variations)
            .FirstOrDefaultAsync(p => p.Id == id);

        if (product == null)
            return NotFound();

        return Ok(product);
    }

    [HttpPost]
    [Authorize(Roles = "Admin,Seller")]
    public async Task<IActionResult> Create(Product product)
    {
        if (product.Variations != null)
        {
            foreach (var variation in product.Variations)
            {
                variation.ProductId = product.Id;
            }
        }

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "Admin,Seller")]
    public async Task<IActionResult> Update(int id, Product updatedProduct)
    {
        if (id != updatedProduct.Id)
            return BadRequest("Id no coincide");

        var product = await _context.Products
            .Include(p => p.Variations)
            .FirstOrDefaultAsync(p => p.Id == id);

        if (product == null)
            return NotFound();

        product.Name = updatedProduct.Name;
        product.Description = updatedProduct.Description;
        product.Price = updatedProduct.Price;
        product.Stock = updatedProduct.Stock;
        product.Category = updatedProduct.Category;
        product.ImageUrl = updatedProduct.ImageUrl;

        if (updatedProduct.Variations != null && updatedProduct.Variations.Any())
        {
            _context.ProductVariations.RemoveRange(product.Variations);

            foreach (var variation in updatedProduct.Variations)
            {
                variation.ProductId = id;
                _context.ProductVariations.Add(variation);
            }
        }

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Delete(int id)
    {
        var product = await _context.Products
            .Include(p => p.Variations)
            .FirstOrDefaultAsync(p => p.Id == id);

        if (product == null)
            return NotFound();

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
