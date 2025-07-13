namespace ProductApp.Api.Models;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
    public string Role { get; set; } = "User";
}


public class LoginModel
{
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}
