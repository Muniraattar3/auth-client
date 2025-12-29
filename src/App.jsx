import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Default*/}
        <Route path="/" element={<Navigate to="/login" />} />

        {/*Public route*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*Admin only*/}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
          />
          <Route 
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;