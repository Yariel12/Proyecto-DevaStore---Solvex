import React from "react";

function VariantsInput({ variations, setVariations }) {
  const handleChange = (index, field, value) => {
    const updated = [...variations];
    updated[index][field] = value;
    setVariations(updated);
  };

  const addVariant = () => {
    setVariations([
      ...variations,
      { color: "", price: 0, imageUrlVR: "", productId: 0 },
    ]);
  };

  const removeVariant = (index) => {
    const updated = variations.filter((_, i) => i !== index);
    setVariations(updated);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Variantes</h3>
      {variations.map((v, index) => (
        <div key={index} className="grid grid-cols-3 gap-2">
          <input
            type="text"
            placeholder="Color"
            value={v.color}
            onChange={(e) => handleChange(index, "color", e.target.value)}
            className="p-2 border"
          />
          <input
            type="number"
            placeholder="Precio"
            value={v.price}
            onChange={(e) =>
              handleChange(index, "price", parseFloat(e.target.value))
            }
            className="p-2 border"
          />
          <input
            type="text"
            placeholder="URL Imagen"
            value={v.imageUrlVR}
            onChange={(e) => handleChange(index, "imageUrlVR", e.target.value)}
            className="p-2 border"
          />
          <button
            type="button"
            onClick={() => removeVariant(index)}
            className="text-red-600"
          >
            Eliminar
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addVariant}
        className="text-blue-600 underline"
      >
        Añadir Variante
      </button>
    </div>
  );
}

export default VariantsInput;
