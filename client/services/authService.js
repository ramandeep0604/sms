import axios from "axios";

// ✅ HERE (top of file)
const API = import.meta.env.VITE_API_URL;

export const registerUser = (data) => {
  return axios.post(`${API}/auth/register`, data);
};

export const loginUser = (data) => {
  return axios.post(`${API}/auth/login`, data);
};