import { categories } from "../endpoints";
import axiosClient from "../utils/customAPI";

export const getAllCategories = async (access_token) =>
  await axiosClient.get(categories.getAll, {
    headers: {
      access_token,
    },
  });
