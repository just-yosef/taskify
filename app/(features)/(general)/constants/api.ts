import axios from "axios"
export const api = axios.create({
    baseURL: `${process.env.BASE_URL}/api`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})