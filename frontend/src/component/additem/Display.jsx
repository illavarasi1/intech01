import { useEffect, useState } from "react";
import { getAllItems } from "../service/service";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import "./display.css";

function Display() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const socket = io("http://localhost:5000");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getAllItems();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchItems();
    socket.on("itemAdded", (newItem) => {
      console.log("🔥 New item received:", newItem);

      setItems((prev) => [newItem, ...prev]);
    });

    return () => socket.off("itemAdded");
  }, []);

 const fetchItems = async () => {
   const data = await getAllItems();
   setItems(data);
 };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="display-container">
      <div className="header">
        <h2>All Items</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {items.length === 0 ? (
        <p className="no-items">No items found.</p>
      ) : (
        <div className="items-grid">
          {items.map((item) => (
            <div key={item._id} className="item-card">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="item-image"
              />
              <h3 className="item-title">{item.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Display;
