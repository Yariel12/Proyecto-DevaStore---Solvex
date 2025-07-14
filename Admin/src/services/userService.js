import httpClient from "../apis/httpClient";

export const getAllUsers = async () => {
  const response = await httpClient.get("/users");
  return response.data;
};

export const updateUserRole = async (id, newRoleId) => {
  const response = await httpClient.put(`users/${id}/role`, {
    roleId: newRoleId,
  });
  return response.data;
};

export const deleteUser = async (id) => {
  return await httpClient.delete(`/users/${id}`);
};

export const getRoles = async () => {
  const response = await httpClient.get("/roles");
  return response.data;
};
