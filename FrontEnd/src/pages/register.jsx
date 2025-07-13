import { ToastContainer } from "react-toastify";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { useRegister } from "../hook/useRegister";

function Register() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
  } = useRegister();

  return (
    <div className="flex min-h-screen">
      <ToastContainer />

      <div className="flex-col items-center justify-center hidden w-1/2 text-white bg-gray-900 md:flex">
        <h1 className="text-5xl font-bold tracking-wider">DevaStore</h1>
        <p className="mt-2 text-lg font-light tracking-wide text-center">
          Tu tienda de confianza en venta de celulares
        </p>
      </div>

      <div className="hidden w-px bg-gray-300 md:block"></div>

      <div className="flex flex-col justify-center w-full px-8 md:w-1/2 md:px-20">
        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
          Crear una cuenta
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 font-medium text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Registrarse
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-500">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
