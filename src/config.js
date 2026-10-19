/**
 * Central configuration for API and app-wide settings.
 * Uses Vite environment variables with sensible fallbacks.
 */

// Backend API base URL.
// In development, the Vite proxy forwards /api to localhost:5000.
// In production, set VITE_API_URL to your Render backend URL.
export const API_URL = import.meta.env.VITE_API_URL || "/api";

// Helper to build full API endpoint URLs
export const apiEndpoint = (path) => `${API_URL}${path}`;
