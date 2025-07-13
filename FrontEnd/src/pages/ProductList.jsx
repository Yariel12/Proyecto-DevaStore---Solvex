import ProductDisplay from "../components/ProductDisplay";
import { useProductList } from "../hook/useProductList";

function ProductList() {
  const { filteredProducts, searchTerm, setSearchTerm } = useProductList();

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <div className="flex mb-8">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-5 py-3 text-gray-800 placeholder-gray-400 transition duration-300 ease-in-out border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 hover:shadow-lg"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductDisplay
              key={product.id}
              id={product.id}
              image={
                product.image ||
                product.imageUrl ||
                "https://via.placeholder.com/150"
              }
              name={product.name}
              price={product.price}
            />
          ))
        ) : (
          <p className="self-center text-center text-gray-500 col-span-full">
            No hay productos disponibles.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
