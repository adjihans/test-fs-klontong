import {
  loginRepositories,
  registerRepositories,
} from "../repositories/users-repositories";

export const loginUseCase = async (payload) => {
  const result = await loginRepositories(payload);
  return result?.data;
};

export const registerUseCase = async (payload) => {
  return await registerRepositories(payload);
};
