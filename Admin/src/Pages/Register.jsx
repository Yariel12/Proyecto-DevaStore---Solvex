import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerAdminPanel } from "../services/AuthUserService";
import { FiUser, FiMail, FiLock, FiUserCheck } from "react-icons/fi";
import { toast } from "react-toastify";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await registerAdminPanel(form.name, form.email, form.password, form.role);
      toast.success("Usuario registrado correctamente!");
      navigate("/login");
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Error al registrar, revisa los datos e intenta de nuevo"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="items-center justify-center hidden w-1/2 p-10 text-white bg-gray-900 bg-gradient-to-br lg:flex">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-wide">
            Admin Panel
          </h1>
          <h2 className="text-5xl font-bold text-blue-700">DevaStore</h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-blue-100">
            Gestiona productos, usuarios y mucho más con facilidad.
          </p>
        </div>
      </div>

      {/* Lado derecho - formulario */}
      <div className="flex items-center justify-center w-full px-6 py-12 bg-gray-100 lg:w-1/2">
        <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
            Registro de Usuario
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FiUser className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FiMail className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FiLock className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FiUserCheck className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full px-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Admin">Admin</option>
                <option value="Seller">Seller</option>
              </select>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                ¿Tienes una cuenta?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Inicia sesion aquí
                </Link>
              </p>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-3 text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Registrando..." : "Registrar Usuario"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
