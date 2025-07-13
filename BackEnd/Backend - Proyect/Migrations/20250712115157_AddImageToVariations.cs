using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend___Proyect.Migrations
{
    /// <inheritdoc />
    public partial class AddImageToVariations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "ProductVariations",
                newName: "ImageUrlVR");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageUrlVR",
                table: "ProductVariations",
                newName: "ImageUrl");
        }
    }
}
