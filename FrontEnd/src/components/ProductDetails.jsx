import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/ApiProduct";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="py-10 text-center">Cargando producto...</p>;
  if (!product)
    return <p className="py-10 text-center">Producto no encontrado.</p>;

  const currentImage = selectedVariant?.imageUrlVR || product.imageUrl;

  return (
    <section className="flex flex-col w-full p-10 mx-auto my-10 text-black shadow-lg xl:flex-row rounded-xl max-w-7xl ">
      {/* Imagen */}
      <div className="flex flex-col items-center w-full gap-4 xl:w-1/2">
        <motion.div
          className="flex items-center justify-center w-full bg-white rounded-xl p-7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={currentImage}
            alt={product.name}
            className="rounded-xl object-contain max-h-[500px] w-full"
          />
        </motion.div>
      </div>

      {/* Info */}
      <div className="flex flex-col w-full gap-6 p-6 xl:w-1/2">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <div className="flex items-center gap-6 text-xl font-semibold">
          <div className="text-blue-600">
            {selectedVariant
              ? `$${selectedVariant.price}`
              : `$${product.price}`}
          </div>
          <div className="flex items-center gap-1 text-yellow-400">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <FaStar key={idx} />
              ))}
            <span className="text-sm text-gray-500">(223)</span>
          </div>
        </div>

        <div className="p-4 bg-gray-200 rounded-lg">
          <h4 className="mb-2 text-lg font-semibold">Modelos disponibles:</h4>
          <div className="flex flex-wrap gap-2">
            {product.variations?.map((variant, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 border rounded-md text-sm ${
                  selectedVariant === variant
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                {variant.color} - ${variant.price}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Descripción</h4>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
