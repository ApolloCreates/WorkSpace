import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../Components/Dashboard/AdminSidebar";
import Navbar from "../Components/Dashboard/Navbar";
import AdminSummary from "../Components/Dashboard/AdminSummary";

const AdminDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (!user) navigate("/login");

  return (
    <>
      <div className="flex">
        <AdminSidebar />
        <div className="flex h-screen">
          <Navbar />
          <AdminSummary />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
