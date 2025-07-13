import { FiTruck, FiShield, FiCreditCard } from "react-icons/fi";

function Features() {
  const features = [
    {
      icon: <FiTruck size={36} className="text-indigo-500" />,
      title: "Envíos rápidos",
      description: "Entregamos tus productos en tiempo récord a todo el país.",
    },
    {
      icon: <FiShield size={36} className="text-green-500" />,
      title: "Compra segura",
      description:
        "Tus datos están protegidos con cifrado y seguridad avanzada.",
    },
    {
      icon: <FiCreditCard size={36} className="text-pink-500" />,
      title: "Pagos flexibles",
      description: "Aceptamos tarjetas, transferencias y pagos contra entrega.",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="px-6 mx-auto text-center max-w-7xl">
        <h2 className="mb-16 text-4xl font-extrabold text-gray-900 md:text-5xl">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 transition-transform duration-300 transform bg-white shadow-lg cursor-pointer rounded-3xl hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-tr from-indigo-200 to-pink-200">
                  {feature.icon}
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
