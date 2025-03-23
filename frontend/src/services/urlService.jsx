// src/services/urlService.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/url/shorten";

export const shortenUrl = async (originalUrl) => {
  try {
    const response = await axios.post(`${API_URL}/urls`, { originalUrl });
    return response.data;
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw error;
  }
};

export const getShortenedUrls = async () => {
  try {
    const response = await axios.get(`${API_URL}/urls`);
    return response.data;
  } catch (error) {
    console.error("Error fetching URLs:", error);
    return [];
  }
};

export const deleteUrl = async (id) => {
  try {
    await axios.delete(`${API_URL}/urls/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting URL:", error);
    throw error;
  }
};
