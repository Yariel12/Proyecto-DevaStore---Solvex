import React, { useState, useRef } from "react";
import { FiUser, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hook/useAuth";
import { isAdmin } from "../utils/authUtils";
import { useClickOutside } from "../Hook/useClickOutside";

function NavBar() {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();
  const mobileMenuRef = useRef();

  useClickOutside(dropdownRef, () => setShowDropdown(false));
  useClickOutside(mobileMenuRef, () => setMobileMenuOpen(false));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (user === null) return null;

  return (
    <header className="text-white bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          DevaStore Admin Panel
        </Link>

        {/* Botón hamburguesa (visible solo en móvil) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white md:hidden"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menú en desktop */}
        <nav className="hidden space-x-6 md:block">
          <Link to="/" className="transition hover:text-blue-400">
            Inicio
          </Link>
          <Link to="/product" className="transition hover:text-blue-400">
            Productos
          </Link>
          <Link to="/admin/products" className="transition hover:text-blue-400">
            Administrar los Productos
          </Link>
          {user && isAdmin(user) && (
            <Link to="/admin/users" className="transition hover:text-blue-400">
              Admininistrar los Usuarios
            </Link>
          )}
        </nav>

        {/* Usuario y logout */}
        <div
          className="relative items-center hidden gap-4 md:flex"
          ref={dropdownRef}
        >
          <div
            className="flex items-center gap-2 px-3 py-2 text-sm text-white rounded cursor-pointer select-none hover:text-blue-400"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FiUser size={20} />
            <span>Mi cuenta</span>
          </div>

          {showDropdown && (
            <div className="absolute right-0 z-50 w-48 p-4 mt-2 text-gray-900 bg-white rounded-md shadow-lg select-none">
              <p className="text-sm font-semibold truncate">{user.name}</p>
              <p className="text-xs text-gray-600 capitalize">{user.role}</p>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 text-sm text-white transition rounded hover:text-red-400"
          >
            <FiLogOut size={20} />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <nav
          ref={mobileMenuRef}
          className="block px-6 pb-4 space-y-3 text-white bg-gray-800 md:hidden"
        >
          <Link
            to="/"
            className="block transition hover:text-blue-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/product"
            className="block transition hover:text-blue-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Productos
          </Link>
          <Link
            to="/admin/products"
            className="block transition hover:text-blue-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Administrar los Productos
          </Link>
          {user && isAdmin(user) && (
            <Link
              to="/admin/users"
              className="block transition hover:text-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admininistrar los Usuarios
            </Link>
          )}
          <div className="pt-3 border-t border-gray-700">
            <p className="text-sm font-semibold truncate">{user.name}</p>
            <p className="text-xs text-gray-400 capitalize">{user.role}</p>
            <button
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 mt-2 text-sm text-red-400"
            >
              <FiLogOut size={20} />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
