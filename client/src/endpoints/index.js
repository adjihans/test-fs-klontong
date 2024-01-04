const endpointURL = {
  users: `/users`,
  products: `/products`,
  categories: `/categories`,
};

export const users = {
  login: `${endpointURL.users}/login`,
  register: `${endpointURL.users}/register`,
};

export const products = {
  getAll: (page, limit = 10) =>
    `${endpointURL.products}/?page=${page}&limit=${limit}`,
  getOne: (productId) => `${endpointURL.products}/${productId}`,
};
