import axios from "axios";

const baseURL = "https://taskify-five-psi.vercel.app/api"

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
