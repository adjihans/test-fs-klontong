const endpointURL = {
  users: "/users",
  products: "/products",
  categories: "/categories",
};

export const users = {
  login: `http://127.0.0.1:8080${endpointURL.users}/login`,
  register: `http://127.0.0.1:8080${endpointURL.users}/register`,
};
