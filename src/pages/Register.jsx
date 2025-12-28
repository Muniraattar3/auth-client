import { useState } from "react";
import { registerUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("All fields are required");
            return;
        }
        try {
            await registerUser(name, email, password);
            navigate("/login");
        } catch (err) {
            alert(err.message)
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>Register</button>
        </form>
    );
};
export default Register;