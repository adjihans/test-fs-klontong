import { getAllCategories } from "../repositories/categories.repositories";
import {
  createProductRepositories,
  deleteProductRepositories,
  getAllProductRepositories,
  getProductDetailRepositories,
  updateProductRepositories,
} from "../repositories/products-repositories";

export const getAllProductUseCase = async (page, limit, keyword) => {
  return await getAllProductRepositories(page, limit, keyword);
};

export const getProductDetailUseCase = async (productId) => {
  return await getProductDetailRepositories(productId);
};

export const createProductUseCase = async (payload, access_token) => {
  return await createProductRepositories(payload, access_token);
};

export const updateProductUseCase = async (
  payload,
  access_token,
  productId
) => {
  return await updateProductRepositories(payload, access_token, productId);
};

export const deleteProductUseCase = async (access_token, productId) =>
  await deleteProductRepositories(access_token, productId);

export const getCategoriesUseCase = async (access_token) =>
  await getAllCategories(access_token);
