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
  add: `${endpointURL.products}/add`,
  update: (productId) => `${endpointURL.products}/update/${productId}`,
  delete: (productId) => `${endpointURL.products}/delete/${productId}`,
};

export const categories = {
  getAll: `${endpointURL.categories}/`,
};
