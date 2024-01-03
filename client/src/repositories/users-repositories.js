import { users } from "../endpoints";
import axiosClient from "../utils/customAPI";

export const loginRepositories = async (payload) => {
  return await axiosClient.post(users.login, payload);
};

export const registerRepositories = async (payload) => {
  return await axiosClient.post(users.register, payload);
};
