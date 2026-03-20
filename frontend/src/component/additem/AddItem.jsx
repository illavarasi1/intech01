import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../service/service";
import "./additem.css";

function AddItem() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitData = async (e) => {
    e.preventDefault(); 
    try {
      setLoading(true);
      await addItem(title, image);
      setMessage("Item is being processed. It will appear shortly...");
      // Optional: add temporary item in frontend (optimistic UI)
      // const tempItem = {
      //   _id: "temp-" + Date.now(),
      //   title,
      //   imageUrl: URL.createObjectURL(image),
      // };
      // setItems((prev) => [tempItem, ...prev]);
      setTimeout(() => {
        navigate("/display");
      }, 1500);
    } catch (error) {
      console.error("Failed to add item:", error);
      setMessage("Failed to add item");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="add-item-container">
      <div className="header">
        <h2>Add New Item</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <form className="add-item-form" onSubmit={submitData}>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
        </select>

        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Processing..." : "Proceed"}
        </button>
      </form>
      {message && <p className="status-msg">{message}</p>}
    </div>
  );
}

export default AddItem;
