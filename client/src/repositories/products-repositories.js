import { products } from "../endpoints";
import axiosClient from "../utils/customAPI";

export const getAllProductRepositories = async (page, limit) => {
  return await axiosClient.get(products.getAll(page, limit));
};
