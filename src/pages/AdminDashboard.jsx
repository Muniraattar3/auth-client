import { useEffect, useState } from "react";
import api from "../api/api"

const AdminDashboard = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("")
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const res = await api.get("/users", {
                params: { search, role: roleFilter || undefined },
            });
            setUsers(res.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [search, roleFilter]);


    const deleteUser = async (id) => {
        if (!window.confirm("Delete this user?")) return

        await api.delete(`/users/${id}`);
        setUsers(users.filter((u) => u._id != id))
    };

    const changeRole = async (id, role) => {
        await api.patch(`/users/${id}/role`, { role });
        fetchUsers();
    }

    if (loading) return <p>Loading Users...</p>

    return (
        <div>
            <h2>Admin Dashboard</h2>

            <div style={{ marginBottom: "10px" }}>
                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}>
                </input>
                <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}>
                    <option value="">All Roles</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((u) => (
                        <tr key={u._id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>
                                <select
                                    value={u.role}
                                    onChange={(e) => changeRole(u._id, e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value={"admin"}>Admin</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={() => deleteUser(u._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
