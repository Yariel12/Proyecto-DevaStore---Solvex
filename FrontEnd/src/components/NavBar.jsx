import React from "react";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="text-white bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          DevaStore
        </Link>

        <nav className="hidden space-x-6 md:block">
          <Link to="/" className="transition hover:text-blue-400">
            Inicio
          </Link>
          <Link to="/productosList" className="transition hover:text-blue-400">
            Productos
          </Link>
          <Link to="/servicios" className="transition hover:text-blue-400">
            Servicios
          </Link>
          <Link to="/contacto" className="transition hover:text-blue-400">
            Contacto
          </Link>
        </nav>

        <div className="items-center hidden gap-4 md:flex">
          {token ? (
            <>
              <FiUser
                size={20}
                className="flex items-center gap-2 px-3 py-2 text-sm text-white transition rounded hover:text-blue-400"
              />
              <span>Mi cuenta</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 text-sm text-white transition rounded hover:text-red-400"
              >
                <FiLogOut size={20} />
                <span>Cerrar sesión</span>
              </button>
            </>
          ) : (
            <Link
              to="/register"
              className="flex items-center gap-2 px-3 py-2 text-sm text-white transition rounded hover:text-blue-400"
            >
              <FiUser size={20} />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
