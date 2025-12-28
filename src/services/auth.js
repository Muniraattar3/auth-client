import api from "../api/api";

export const registerUser = async (name, email, password) => {
  const res = await api.post("/users/register", {
    name,
    email,
    password,
  });
  return res.data;
};


export const loginUser = async (email, password) => {
  const res = await api.post("/users/login", { email, password });

  // Save user info only (NO token)
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data;
};


