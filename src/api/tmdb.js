// src/api/tmdb.js
import axios from "axios";
import { API_KEY, BASE_URL } from "./config";

// Funktion för att hämta trending-innehåll
export const fetchTrending = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/all/day`, {
      params: { api_key: API_KEY },
    });
    return response.data.results; // Returnera endast resultaten
  } catch (error) {
    console.error("Error fetching trending data:", error);
    throw error; // Skicka vidare felet om det behövs
  }
};

// Funktion för att hämta detaljer om en specifik film/serie
export const fetchDetails = async (id, type) => {
  try {
    const response = await axios.get(`${BASE_URL}/${type}/${id}`, {
      params: { api_key: API_KEY },
    });
    return response.data; // Returnera detaljerad data
  } catch (error) {
    console.error(`Error fetching details for ${type} ID ${id}:`, error);
    throw error;
  }
};
