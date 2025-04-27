import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5001/api",
});

export const getInterviewQuestions = (role: string) =>
  API.post("/interview", { role });