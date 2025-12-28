import api from "../api/api";

/**
 * Get all users (ADMIN ONLY)
 * No token, no auth headers
 */
export const getAllUsers = async () => {
  const res = await api.get("/users");
  return res.data.data;
};

/**
 * Get currently logged-in user
 * Read from localStorage (mock auth)
 */
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

/**
 * Logout user
 */
export const logoutUser = () => {
  localStorage.removeItem("user");
};
