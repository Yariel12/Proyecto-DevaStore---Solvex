import { FiTrash, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

function ProductItem({ product, onDelete }) {
  const selectedVariation = product.variations?.[0];

  return (
    <li className="pb-4 mb-5 border-b last:border-none">
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-[100px_1fr_2fr_100px_150px_60px_60px] gap-4 items-center text-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-20 h-20 mx-auto rounded"
        />
        <div className="font-medium truncate">{product.name}</div>
        <div className="pl-2 text-sm leading-relaxed text-left text-gray-600 truncate">
          {product.description.length > 120
            ? product.description.slice(0, 117) + "..."
            : product.description}
        </div>
        <p className="mt-1 text-xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </p>

        <div className="flex flex-col items-center justify-center gap-1 text-xs text-gray-700">
          {product.variations.slice(0, 3).map((variation) => (
            <div key={variation.id} className="truncate">
              {variation.color} - ${variation.price.toFixed(2)}
            </div>
          ))}
          {product.variations.length > 3 && (
            <span className="text-gray-500">
              +{product.variations.length - 3} más
            </span>
          )}
        </div>

        <div className="font-semibold text-center text-gray-800">
          {product.stock}
        </div>

        <div className="flex items-center justify-center gap-2">
          <Link
            to={`/admin/products/edit/${product.id}`}
            className="text-green-500 transition hover:text-green-700"
            aria-label={`Editar ${product.name}`}
          >
            <FiEdit size={18} />
          </Link>
          <button
            onClick={() => onDelete(product.id, product.name)}
            className="text-red-500 transition hover:text-red-700"
            aria-label={`Eliminar ${product.name}`}
          >
            <FiTrash size={18} />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-2 md:hidden">
        <div className="flex items-center gap-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-16 h-16 rounded"
          />
          <div className="flex-1 min-w-0">
            <div className="font-semibold truncate">{product.name}</div>
            <div className="text-sm text-gray-500">
              Precio base: ${product.price.toFixed(2)}
            </div>
            <div className="text-sm text-gray-700">Stock: {product.stock}</div>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          {product.description.length > 100
            ? product.description.slice(0, 97) + "..."
            : product.description}
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-gray-700">
          {product.variations.slice(0, 2).map((variation) => (
            <span key={variation.id} className="truncate">
              {variation.color} - ${variation.price.toFixed(2)}
            </span>
          ))}
          {product.variations.length > 2 && (
            <span className="text-gray-500">
              +{product.variations.length - 2} más
            </span>
          )}
        </div>
        <div className="flex items-center justify-end gap-3 mt-2">
          <Link
            to={`/admin/products/edit/${product.id}`}
            className="text-green-500 transition hover:text-green-700"
            aria-label={`Editar ${product.name}`}
          >
            <FiEdit size={18} />
          </Link>
          <button
            onClick={() => onDelete(product.id, product.name)}
            className="text-red-500 transition hover:text-red-700"
            aria-label={`Eliminar ${product.name}`}
          >
            <FiTrash size={18} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
