import {
  getAllProductRepositories,
  getProductDetailRepositories,
} from "../repositories/products-repositories";

export const getAllProductUseCase = async (page, limit) => {
  return await getAllProductRepositories(page, limit);
};

export const getProductDetailUseCase = async (productId) => {
  return await getProductDetailRepositories(productId);
};
