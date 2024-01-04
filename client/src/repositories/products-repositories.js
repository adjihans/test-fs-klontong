import { products } from "../endpoints";
import axiosClient from "../utils/customAPI";

export const getAllProductRepositories = async (page, limit) => {
  return await axiosClient.get(products.getAll(page, limit));
};

export const getProductDetailRepositories = async (productId) => {
  return await axiosClient.get(products.getOne(productId));
};

export const createProductRepositories = async (payload, access_token) => {
  return await axiosClient.post(products.add, payload, {
    headers: {
      access_token,
    },
  });
};

export const updateProductRepositories = async (
  payload,
  access_token,
  productId
) => {
  return await axiosClient.put(products.update(productId), payload, {
    headers: {
      access_token,
    },
  });
};