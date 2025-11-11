import React from "react";
import AdminNavbar from "../admin/AdminNavbar"; // sesuaikan path

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <div className="main-content" style={{ padding: "20px" }}>
        {children}
      </div>
    </>
  );
}
