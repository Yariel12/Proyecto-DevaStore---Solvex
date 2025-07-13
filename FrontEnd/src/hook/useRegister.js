import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../services/AuthUser";

export function useRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.warn("Todos los campos son obligatorios", { theme: "colored" });
      return;
    }

    try {
      await register(name, email, password);
      toast.success("Registro exitoso. Ya puedes iniciar sesión", {
        theme: "colored",
        autoClose: 2000,
        onClose: () => navigate("/login"),
      });

      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error al registrar usuario", {
        theme: "colored",
      });
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
  };
}
