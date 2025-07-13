import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductCarousel } from "../hook/useFetchProducts";

function ProductCarousel() {
  const { products, loading, error, scrollRef, scroll } = useProductCarousel();
  const navigate = useNavigate();

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="relative w-full px-4 py-8">
      <h2 className="mb-16 text-4xl font-extrabold text-center text-gray-900 md:text-5xl">
        Productos
      </h2>

      <div className="relative flex items-center gap-2">
        <button
          onClick={() => scroll("left")}
          className="z-10 p-2 text-white bg-gray-700 rounded-full hover:bg-gray-900"
        >
          ◀
        </button>

        <div
          ref={scrollRef}
          className="flex w-full gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          style={{ scrollBehavior: "smooth", paddingBottom: "10px" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/Product/${product.id}`)}
              className="flex-shrink-0 w-[230px] overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer group rounded-2xl hover:shadow-lg"
            >
              <div className="flex items-center justify-center h-48 overflow-hidden bg-white">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-blue-600">
                  {product.name}
                </h3>
                <p className="mt-1 text-xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="z-10 p-2 text-white bg-gray-700 rounded-full hover:bg-gray-900"
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default ProductCarousel;
