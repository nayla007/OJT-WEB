import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import React from "react";

export default function AdminNavbar() {
  const { user, logout } = useAuth();
  const isSuperAdmin = user?.role === "superadmin";
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand fw-bold"
          to="/admin/dashboard"
        >
          Admin Panel
        </NavLink>
        <div
          className=" d-flex justify-content-end"
          id="adminNavbarMenu"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <NavLink to="/admin/dashboard" className="nav-link">
                Dashboard
              </NavLink>
            </li>
            {isSuperAdmin && (
              <li className="nav-item">
                <NavLink
                  to="/admin/approval"
                  className="nav-link fw-bold"
                >
                  Admin Approval
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink to="/admin/data-pendaftar" className="nav-link">
                Data Pendaftar
              </NavLink>
            </li>
<li className="nav-item">
              <NavLink to="/admin/daftar-pelatihan" className="nav-link">
                Daftar Pelatihan
              </NavLink>
            </li>
            
<li className="nav-item">
              <NavLink to="/admin/kategori-pelatihan" className="nav-link">
                Kategori Pelatihan
              </NavLink>
            </li>

            <li className="nav-item ms-3">
              <button onClick={handleLogout} className="btn btn-danger btn-sm">
                Logout ({user?.username || "Admin"})
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}