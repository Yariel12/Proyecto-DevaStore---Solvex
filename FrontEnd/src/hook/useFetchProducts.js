import { useRef, useEffect, useState } from "react";
import { getProducts } from "../services/ApiProduct";

export function useProductCarousel() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProducts();
        setProducts(result.data || []);
      } catch (err) {
        console.error("Error cargando productos", err);
        setError("Error al cargar productos");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return {
    products,
    loading,
    error,
    scrollRef,
    scroll,
  };
}
