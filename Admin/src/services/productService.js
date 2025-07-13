import httpClient from "../apis/httpClient";

export const getProducts = async (page = 1, pageSize = 5, search = "") => {
  let query = `?page=${page}&pageSize=${pageSize}`;
  if (search) {
    query += `&search=${encodeURIComponent(search)}`;
  }

  const response = await httpClient.get(`/products${query}`);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await httpClient.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await httpClient.post("/products", productData);
  return response.data;
};

export const updateProduct = async (id, updatedData) => {
  const response = await httpClient.put(`/products/${id}`, updatedData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await httpClient.delete(`/products/${id}`);
  return response.data;
};
