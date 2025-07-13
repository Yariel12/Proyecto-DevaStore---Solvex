import httpClient from "../apis/httpClient";

export const getProducts = async () => {
  try {
    const response = await httpClient.get("Products");
    return response.data;
  } catch (error) {
    console.error("Error fetching Products:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await httpClient.get(`Products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};
