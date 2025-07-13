import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminHome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="p-10 mx-auto max-w-7xl">
      <h1 className="mb-8 text-4xl font-extrabold text-gray-900">
        Bienvenido(a),{" "}
        <span className="text-blue-600">{user?.name || "Admin"}</span>
      </h1>

      <p className="max-w-3xl mb-12 text-lg leading-relaxed text-gray-700">
        Aquí puedes gestionar todos los productos, usuarios y configuraciones de
        la plataforma. Mantén todo organizado y al día para un mejor
        rendimiento.
      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <Link
          to="/"
          className="block p-8 transition duration-300 transform shadow-lg group bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-white group-hover:text-white">
            Productos
          </h2>
          <p className="text-lg leading-relaxed text-blue-100 group-hover:text-blue-200">
            Agrega, edita o elimina productos y sus variaciones.
          </p>
        </Link>

        <Link
          to="/"
          className="block p-8 transition duration-300 transform shadow-lg group bg-gradient-to-br from-green-600 to-green-500 rounded-2xl hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-white group-hover:text-white">
            Usuarios
          </h2>
          <p className="text-lg leading-relaxed text-green-100 group-hover:text-green-200">
            Administra usuarios, roles y permisos.
          </p>
        </Link>

        <Link
          to="/"
          className="block p-8 transition duration-300 transform shadow-lg group bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-white group-hover:text-white">
            Reportes
          </h2>
          <p className="text-lg leading-relaxed text-purple-100 group-hover:text-purple-200">
            Consulta estadísticas y reportes de ventas y actividad.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default AdminHome;
