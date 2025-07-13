import React from "react";

function Footer() {
  return (
    <footer className="py-10 text-white bg-gray-900">
      <div className="grid grid-cols-1 gap-8 px-6 mx-auto max-w-7xl md:grid-cols-3">
        <div>
          <h2 className="mb-4 text-xl font-bold">Deva Store</h2>
          <p className="text-sm text-gray-400">
            Ventas de equipos electronicos y accesorios de computadoras. Somos
            tu mejor opción para encontrar lo último en tecnología.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Servicios
              </a>
            </li>
            <li></li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Contáctanos</h2>
          <p className="text-sm text-gray-400">Correo: DevaStore@gmail.com</p>
          <p className="text-sm text-gray-400">Teléfono: +1 (809) 000-0000</p>
          <div className="flex mt-4 space-x-4">
            <a href="/" className="hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-10 text-sm text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} Deva Store. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
