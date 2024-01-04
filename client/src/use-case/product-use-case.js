import { getAllCategories } from "../repositories/categories.repositories";
import {
  createProductRepositories,
  getAllProductRepositories,
  getProductDetailRepositories,
} from "../repositories/products-repositories";

export const getAllProductUseCase = async (page, limit) => {
  return await getAllProductRepositories(page, limit);
};

export const getProductDetailUseCase = async (productId) => {
  return await getProductDetailRepositories(productId);
};

export const createProductUseCase = async (payload, access_token) => {
  return await createProductRepositories(payload, access_token);
};

export const getCategoriesUseCase = async (access_token) =>
  await getAllCategories(access_token);
