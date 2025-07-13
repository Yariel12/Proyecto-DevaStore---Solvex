import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/AuthUser";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warn("Todos los campos son obligatorios", { theme: "colored" });
      return;
    }

    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);

      toast.success("Inicio de sesión exitoso", {
        theme: "colored",
        autoClose: 1500,
        onClose: () => navigate("/"),
      });
    } catch (err) {
      const errorMessage =
        err.response?.data || "Error al iniciar sesión. Intenta de nuevo.";
      toast.error(errorMessage, { theme: "colored" });
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
}
