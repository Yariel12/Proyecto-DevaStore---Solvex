import { FiTrash, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

function ProductItem({ product, onDelete }) {
  const selectedVariation = product.variations?.[0];

  return (
    <li className="pb-4 mb-5 border-b last:border-none">
      <div className="hidden grid-cols-[100px_1fr_2fr_100px_150px_60px] gap-4 items-center text-center md:grid">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-20 h-20 mx-auto rounded"
        />
        <div className="font-medium">{product.name}</div>
        <div className="pl-2 text-sm leading-relaxed text-left text-gray-600">
          {product.description.length > 120
            ? product.description.slice(0, 117) + "..."
            : product.description}
        </div>
        <div className="font-semibold text-blue-600">
          ${selectedVariation?.price}
        </div>
        <div className="flex flex-col items-center justify-center gap-1 text-xs text-gray-700">
          {product.variations.slice(0, 3).map((variation) => (
            <div key={variation.id}>
              {variation.color} - ${variation.price}
            </div>
          ))}
          {product.variations.length > 3 && (
            <span className="text-gray-500">
              +{product.variations.length - 3} más
            </span>
          )}
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

      <div className="flex flex-col gap-2 md:hidden">
        <div className="flex items-center gap-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-16 h-16 rounded"
          />
          <div>
            <div className="font-semibold">{product.name}</div>
            <div className="text-sm text-gray-500">
              ${selectedVariation?.price}
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          {product.description.length > 100
            ? product.description.slice(0, 97) + "..."
            : product.description}
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-gray-700">
          {product.variations.slice(0, 2).map((variation) => (
            <span key={variation.id}>
              {variation.color} - ${variation.price}
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
          >
            <FiEdit size={18} />
          </Link>
          <button
            onClick={() => onDelete(product.id, product.name)}
            className="text-red-500 transition hover:text-red-700"
          >
            <FiTrash size={18} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
