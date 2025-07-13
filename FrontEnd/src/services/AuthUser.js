import httpClient from "../apis/httpClient.js";

export const register = async (name, email, password) => {
  try {
    const res = await httpClient.post("Auth/register", {
      name,
      email,
      password,
    });
    return res.data;
  } catch (err) {
    console.error("Error al registrar usuario:", err);
    throw err;
  }
};

export const login = async (email, password) => {
  try {
    const res = await httpClient.post("Auth/login", { email, password });
    return res.data;
  } catch (err) {
    console.error("Error al iniciar sesión:", err);
    throw err;
  }
};
