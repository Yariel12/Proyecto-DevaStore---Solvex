namespace ProductApp.Api.DTOs;
    public class RoleDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
    }

    public class RoleUpdateDto
    {
        public int RoleId { get; set; }
    }

