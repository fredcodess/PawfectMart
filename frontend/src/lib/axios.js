import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", // Replace with your backend URL
  withCredentials: true, // Include cookies in requests
  headers: { "Content-Type": "application/json" },
});
