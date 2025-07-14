import React, { useState } from "react";
import VariantsInput from "../Components/VariantsInput";
import { createProduct } from "../services/productService";
import { toast } from "react-toastify";

const initialForm = {
  name: "",
  description: "",
  price: 0,
  stock: 0,
  category: "",
  imageUrl: "",
  variations: [],
};

function ProductCR() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const updateVariations = (variations) => {
    setForm((prev) => ({ ...prev, variations }));
  };

  const resetForm = () => setForm(initialForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(form);
      toast.success("Producto creado correctamente");
      resetForm();
    } catch (err) {
      console.error("Error al crear producto:", err);
      toast.error("Error al crear el producto");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-5xl p-6 space-y-8 ">
      <h2 className="text-2xl font-semibold text-gray-800">Crear Producto</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Nombre del Producto
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Categoría
          </label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Ej: Ropa, Tecnología"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="price" className="text-sm font-medium text-gray-700">
            Precio
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="0.00"
            value={form.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="stock" className="text-sm font-medium text-gray-700">
            Inventario
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            placeholder="Cantidad disponible"
            value={form.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="col-span-1 space-y-2 md:col-span-2">
          <label
            htmlFor="imageUrl"
            className="text-sm font-medium text-gray-700"
          >
            URL de Imagen
          </label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="https://..."
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="col-span-1 space-y-2 md:col-span-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Descripción
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            placeholder="Escribe una descripción clara del producto..."
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md resize-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Variantes */}
      <div className="pt-4 border-t">
        <VariantsInput
          variations={form.variations}
          setVariations={updateVariations}
        />
      </div>

      <div className="flex justify-end pt-4 border-t">
        <button
          type="submit"
          className="px-6 py-2 font-medium text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
          Guardar Producto
        </button>
      </div>
    </form>
  );
}

export default ProductCR;
