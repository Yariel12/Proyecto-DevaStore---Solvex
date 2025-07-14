import httpClient from "../apis/httpClient";

export async function registerAdminPanel(data) {
  const response = await httpClient.post("auth/register", data);
  return response.data;
}

export async function LoginAdminPanel(email, password) {
  const response = await httpClient.post(`auth/login`, {
    email,
    password,
  });

  return response.data;
}
