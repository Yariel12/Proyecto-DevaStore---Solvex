import httpClient from "../apis/httpClient";

export const registerAdminPanel = async (name, email, password, role) => {
  try {
    const res = await httpClient.post("/Auth/register", {
      name,
      email,
      password,
      role,
    });
    return res.data;
  } catch (err) {
    console.error("Error al registrar usuario:", err.response?.data || err);
    throw err;
  }
};

export const LoginAdminPanel = (email, password) => {
  return httpClient
    .post("https://localhost:7222/api/auth/login", {
      email: email,
      password: password,
    })
    .then((res) => res.data);
};
