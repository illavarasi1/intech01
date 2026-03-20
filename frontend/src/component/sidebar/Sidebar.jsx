import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <a className="sidebar-link active">Products</a>
      <a className="sidebar-link">Dashboard</a>
      <a className="sidebar-link">Orders</a>
      <a className="sidebar-link">Customers</a>
      <a className="sidebar-link">Analytics</a>
      <a className="sidebar-link">Settings</a>
    </aside>
  );
};

export default Sidebar;
