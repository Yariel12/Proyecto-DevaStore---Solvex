using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductApp.Api.Data;
using ProductApp.Api.DTOs;

namespace ProductApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;

    public UsersController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetAll()
    {
        var users = await _context.Users
            .Include(u => u.Role)
            .Select(u => new
            {
                u.Id,
                u.Name,
                u.Email,
                RoleName = u.Role.Name,
                RoleId = u.RoleId
            })
            .ToListAsync();

        return Ok(users);
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
            return NotFound("Usuario no encontrado");

        _context.Users.Remove(user);
        await _context.SaveChangesAsync();

        return Ok("Usuario eliminado correctamente");
    }

    [HttpPut("{id}/role")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> UpdateRole(int id, [FromBody] RoleUpdateDto dto)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null)
            return NotFound("Usuario no encontrado");

        var role = await _context.Roles.FindAsync(dto.RoleId);
        if (role == null)
            return BadRequest("Rol no válido");

        user.RoleId = dto.RoleId;
        await _context.SaveChangesAsync();

        return Ok($"Rol del usuario actualizado a: {role.Name}");
    }
}
