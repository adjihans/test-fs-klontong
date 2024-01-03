import axios from "axios";

export const api = async (method, url, payload) => {
  try {
    const options = {
      method,
      url,
      data: payload,
    };
    return await axios(options);
  } catch (error) {
    console.error(error);
  }
};
