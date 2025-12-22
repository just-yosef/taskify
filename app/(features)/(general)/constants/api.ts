import axios from "axios";
// @ts-ignore
const baseURL = "http://localhost:3000/api" || "https://taskify-five-psi.vercel.app/api"

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
