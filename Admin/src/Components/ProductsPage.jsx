import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import { toast, ToastContainer } from "react-toastify";
import { useDeleteResource } from "../Hook/HandleClick";
import { usePagination } from "../Hook/usePagination";
import Pagination from "./Pagination.jsx";
import ProductItem from "../Components/ProductItem.jsx";
import "react-toastify/dist/ReactToastify.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const itemsPerPage = 8;

  const { currentPage, totalPages, goToPage } = usePagination(
    total,
    itemsPerPage
  );

  const reloadProducts = async () => {
    try {
      const res = await getProducts(currentPage, itemsPerPage);
      setProducts(res.data);
      setTotal(res.total);
    } catch (error) {
      console.error("Error cargando productos", error);
      toast.error("Error cargando productos");
    }
  };

  useEffect(() => {
    reloadProducts();
  }, [currentPage]);

  const { handleDelete } = useDeleteResource(deleteProduct, reloadProducts);

  return (
    <div className="flex flex-col min-h-screen p-6 mx-auto max-w-7xl">
      <ToastContainer />
      <div className="hidden grid-cols-[100px_1fr_2fr_100px_150px_60px] gap-4 items-center pb-3 mb-5 border-b font-semibold text-center md:grid">
        <div>Imagen</div>
        <div>Nombre</div>
        <div className="pl-2 text-left">Descripción</div>
        <div>Precio</div>
        <div>Variaciones</div>
        <div>Acción</div>
      </div>

      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </div>
  );
}

export default ProductsPage;
