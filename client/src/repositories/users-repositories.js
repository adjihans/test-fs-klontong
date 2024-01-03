import { users } from "../endpoints";
import { api } from "../utils/customAPI";

export const loginRepositories = async (payload) => {
  return await api("POST", users.login, payload);
};

export const registerRepositories = async (payload) => {
  return await api("POST", users.register, payload);
};
