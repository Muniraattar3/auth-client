import { useNavigate } from "react-router-dom";
import {  useState } from "react";
//import { getMe } from "../services/user";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const logout = () => {
            localStorage.removeItem("token");
            navigate("/login")
    };

/*useEffect(()=>{
    const fetchUser = async ()=>{
        try{
            const response = await getMe();
            setUser(response.data.user)
        } catch(err){
            setError(err.message.data?.message || "Failed to load user");
        }
    }
    fetchUser();
},[]);
*/
    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={logout}>Logout</button>

            {error && <p style = {{color:"Red"}}>{error}</p>}

            {user ?(
                <div>
                    <p><strong>Name:</strong>{user.name}</p>
                    <p><strong>Email:</strong>{user.email}</p>
                    <p><strong>Role:</strong>{user.role}</p>
                </div>
            ):(
                <p>Loading user info...</p>
            )}
        </div>
    )
}

export default Dashboard; 