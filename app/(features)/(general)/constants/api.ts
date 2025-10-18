import axios from "axios";

const baseURL = process.env.BASE_URL
  ? `${process.env.BASE_URL}/api`
  : "http://localhost:3000/api";

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
