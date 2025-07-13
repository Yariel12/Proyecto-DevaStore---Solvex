import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-white bg-gray-900">
      <div className="flex flex-col items-center justify-between px-6 py-20 mx-auto max-w-7xl md:flex-row">
        <div className="mb-10 md:mb-0 md:w-1/2">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Bienvenido a <span className="text-blue-400">DevaStore</span>
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Compra productos de calidad al mejor precio, con envío rápido y
            atención personalizada.
          </p>
          <Link
            to="/productosList"
            className="inline-block px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Ver productos
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
            alt="Hero"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
