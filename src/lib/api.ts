import { env } from "@/config/env";
import axios from "axios";

const api = axios.create({
  baseURL: env.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: env.timeout,
});

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Success handler: return only data from result.data
    return response.data;
  },
  (error) => {
    // Error handler: format error response
    return Promise.reject({
      status: error.response?.status || 500,
      message:
        error.response?.data?.message || "Terjadi error yang tidak diketahui",
    });
  }
);

export default api;
