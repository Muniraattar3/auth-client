import { useState } from "react";
import { loginUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const user = await loginUser(email, password);

    if (user.role === "admin") {
      navigate("/admin");
    } else {
      alert("Access denied. Admins only.");
    }
  } catch (err) {
    setError("Invalid credentials");
  }
};

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <input 
            value={email} 
            placeholder="Email"
             onChange={e => setEmail(e.target.value)}
              />

            <input value={password} 
            type="password"
             placeholder="Password"
                autoComplete="current-password" 
                onChange={e => setPassword(e.target.value)} 
                />

            <button type="submit">Login</button>
        </form>
    )
}

export default Login;