import httpClient from "../apis/httpClient";

export const getAllUsers = async () => {
  try {
    const response = await httpClient.get("users");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return [];
  }
};

export const updateUserRole = async (id, role) => {
  return await httpClient.put(`users/${id}/role`, JSON.stringify(role), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteUser = async (id) => {
  return await httpClient.delete(`users/${id}`);
};
