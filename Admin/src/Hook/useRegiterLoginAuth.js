import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginAdminPanel,
  registerAdminPanel,
} from "../services/AuthUserService";
import { toast } from "react-toastify";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await LoginAdminPanel(email, password);

      const userData = {
        name: res.name,
        email: res.email,
        role: res.role,
      };

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(userData));

      toast.success("Login correcto, redirigiendo...");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      toast.error(err.response?.data || "Error en el login");
    } finally {
      setLoading(false);
    }
  };

  const register = async (formData) => {
    setLoading(true);
    try {
      await registerAdminPanel(formData);
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

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return {
    loading,
    login,
    register,
    logout,
  };
}
