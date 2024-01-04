import { products } from "../endpoints";
import axiosClient from "../utils/customAPI";

export const getAllProductRepositories = async (page, limit, keyword) => {
  return await axiosClient.get(products.getAll(page, limit, keyword));
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

export const deleteProductRepositories = async (access_token, productId) =>
  await axiosClient.delete(products.delete(productId), {
    headers: {
      access_token,
    },
  });
