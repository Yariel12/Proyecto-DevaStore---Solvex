import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductEditor } from "../Hook/useProductEditor";

function EditProductPageFloat() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, handleChange, handleSubmit } = useProductEditor(id);

  const handleClose = () => navigate(-1);

  if (loading) return null;

  if (!product) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="p-6 bg-white rounded shadow-lg">
          <p className="text-center text-red-500">No se encontró el producto</p>
          <button
            onClick={handleClose}
            className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl p-6 mx-4 bg-white rounded-lg shadow-lg animate-fade-in">
        <button
          onClick={handleClose}
          className="absolute text-xl text-gray-500 top-3 right-4 hover:text-red-500"
          aria-label="Cerrar"
        >
          &times;
        </button>

        <h2 className="mb-4 text-xl font-semibold text-center">
          Editar producto: {product.name}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={product.name || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Nombre del producto"
            required
          />
          <textarea
            name="description"
            value={product.description || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Descripción"
            required
          />
          <input
            type="number"
            name="price"
            value={product.price !== undefined ? product.price : ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Precio"
            min="0"
            step="0.01"
            required
          />
          <input
            type="number"
            name="stock"
            value={product.stock !== undefined ? product.stock : ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Stock"
            min="0"
            required
          />
          <input
            type="text"
            name="category"
            value={product.category || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Categoría"
            required
          />
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="URL de la imagen"
          />

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-sm text-gray-700 transition border rounded hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductPageFloat;
