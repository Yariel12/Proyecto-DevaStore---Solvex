using System.Text.Json.Serialization;

namespace ProductApp.Api.Models;

public class ProductVariation
{
    public int Id { get; set; }

    public string Color { get; set; } = null!;

    public decimal Price { get; set; }

    public string? ImageUrlVR { get; set; }

    public int ProductId { get; set; }

    [JsonIgnore]
    public Product? Product { get; set; }
}
