﻿namespace ProductApp.Api.Models;

public class Product
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public decimal Price { get; set; }

    public int Stock { get; set; }

    public string Category { get; set; } = null!;

    public string ImageUrl { get; set; } = null!;

    public List<ProductVariation> Variations { get; set; } = new();
}
