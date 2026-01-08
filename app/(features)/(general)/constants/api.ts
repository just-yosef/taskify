import axios from "axios";
// @ts-ignore
const baseURL = "https://taskify-five-psi.vercel.app/api"

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
