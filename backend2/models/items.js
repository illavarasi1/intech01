import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
});

const Item = mongoose.model("item", itemSchema);

export default Item;
