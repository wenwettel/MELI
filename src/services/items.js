import { BASE_URL } from "../../constants";
import axios from "axios";

export const fetchItemById = async (id) => {
  return await axios(`${BASE_URL}/api/items/${id}`);
};

export const fetchAllItems = async (paramSearch) => {
  return await axios(`${BASE_URL}/api/items?q=${paramSearch}`);
};
