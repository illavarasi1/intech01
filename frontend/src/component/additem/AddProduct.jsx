import React from "react";
import "./addproduct.css";

const AddProduct = () => {
  return (
    <main className="content">
      <form className="form-wrapper">
        <div className="form-card">
          <label>Product Visuals</label>
          <div className="upload-area">
            <span className="material-icons">cloud_upload</span>
            <p>Drop images or browse</p>
          </div>
        </div>

        <div className="form-card">
          <label>Product Name</label>
          <input className="input-field" placeholder="Product Name" />
        </div>

        <div className="row-grid">
          <div className="form-card">
            <label>Category</label>
            <select className="input-field">
              <option>Select</option>
              <option>Furniture</option>
            </select>
          </div>

          <div className="form-card">
            <label>Price</label>
            <input className="input-field" type="number" />
          </div>
        </div>

        <div className="form-card">
          <label>Description</label>
          <textarea className="input-field"></textarea>
        </div>

        <div className="actions">
          <button className="btn secondary">Cancel</button>
          <button className="btn primary">Add Product</button>
        </div>
      </form>
    </main>
  );
};

export default AddProduct;
