import { useNavigate } from "react-router-dom";

function ProductDisplay({ id, image, name, price }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/Product/${id}`);
  };

  return (
    <div
      onClick={goToDetails}
      className="w-full max-w-[230px] overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer rounded-2xl hover:shadow-lg"
    >
      <div className="flex items-center justify-center h-48 overflow-hidden bg-white">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 truncate transition-colors duration-300 group-hover:text-blue-600">
          {name}
        </h3>
        <p className="mt-1 text-xl font-bold text-blue-600">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
