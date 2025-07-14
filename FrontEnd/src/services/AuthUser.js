import httpClient from "../apis/httpClient.js";

export async function register(data) {
  const response = await httpClient.post("auth/register", data);
  return response.data;
}

export const login = async (email, password) => {
  try {
    const res = await httpClient.post("Auth/login", { email, password });
    return res.data;
  } catch (err) {
    console.error("Error al iniciar sesión:", err);
    throw err;
  }
};
