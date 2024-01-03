import { getAllProductRepositories } from "../repositories/products-repositories";

export const getAllProductUseCase = async (page, limit) => {
  return await getAllProductRepositories(page, limit);
};
