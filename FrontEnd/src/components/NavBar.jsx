import React, { useState } from "react";
import { FiUser, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-white bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          DevaStore
        </Link>

        {/* Botón Hamburguesa */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menú Desktop */}
        <nav className="hidden space-x-6 md:block">
          <Link to="/" className="transition hover:text-blue-400">
            Inicio
          </Link>
          <Link to="/productosList" className="transition hover:text-blue-400">
            Productos
          </Link>
        </nav>

        {/* Usuario Desktop */}
        <div className="items-center hidden gap-4 md:flex">
          {token ? (
            <>
              <FiUser size={20} className="text-white" />
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

      {/* Menú Mobile */}
      {menuOpen && (
        <div className="flex flex-col px-6 pb-4 space-y-2 md:hidden">
          <Link to="/" onClick={toggleMenu} className="hover:text-blue-400">
            Inicio
          </Link>
          <Link
            to="/productosList"
            onClick={toggleMenu}
            className="hover:text-blue-400"
          >
            Productos
          </Link>

          {token ? (
            <>
              <span className="flex items-center gap-2 text-white">
                <FiUser /> Mi cuenta
              </span>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="flex items-center gap-2 text-red-400"
              >
                <FiLogOut />
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link
              to="/register"
              onClick={toggleMenu}
              className="flex items-center gap-2 text-blue-400"
            >
              <FiUser />
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
}

export default NavBar;
