import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";

function ProductCard({ product, onDelete }) {
  const [selectedColor, setSelectedColor] = useState(product.variations?.[0]);

  return (
    <li className="flex items-center justify-between gap-4 p-4 border-b">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="object-cover w-20 h-20 rounded"
      />

      <div className="flex-1">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
      </div>

      <div className="flex gap-2">
        {product.variations.map((variation) => (
          <div
            key={variation.id}
            onClick={() => setSelectedColor(variation)}
            className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
              selectedColor?.id === variation.id
                ? "border-black"
                : "border-transparent"
            }`}
            style={{ backgroundColor: variation.color.toLowerCase() }}
            title={variation.color}
          ></div>
        ))}
      </div>

      <div className="w-24 font-bold text-right text-blue-600">
        ${selectedColor?.price}
      </div>

      <button
        onClick={() => onDelete?.(product.id)}
        className="text-red-500 hover:text-red-700"
        title="Eliminar producto"
      >
        <FiTrash size={18} />
      </button>
    </li>
  );
}

export default ProductCard;
