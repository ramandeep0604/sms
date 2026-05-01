import axios from "axios";

const API = import.meta.env.VITE_API_URL;

// ✅ ADD THIS LINE (GLOBAL FIX)
axios.defaults.withCredentials = true;

export const registerUser = (data) => {
  return axios.post(`${API}/auth/register`, data);
};

export const loginUser = (data) => {
  return axios.post(`${API}/auth/login`, data);
};