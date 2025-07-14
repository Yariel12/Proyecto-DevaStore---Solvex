import { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../services/productService";
import { toast } from "react-toastify";

export function useProductEditor(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch {
        toast.error("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = value;

    if (name === "price" || name === "stock") {
      val = value === "" ? "" : Number(value);
    }

    setProduct((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product) return toast.error("Producto no cargado correctamente");

    try {
      console.log("Enviando producto:", product);
      await updateProduct(id, product);
      toast.success("Producto actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar:", error);
      toast.error("Error al actualizar el producto");
    }
  };

  return {
    product,
    loading,
    handleChange,
    handleSubmit,
  };
}
