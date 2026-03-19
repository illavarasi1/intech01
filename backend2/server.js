import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import itemRoutes from "./router/itemRoutes.js";

const app = express();
const PORT=process.env.PORT||3000
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  }),
);
app.use(express.json());

app.use("/uploads", express.static("uploads"));

mongoose
  .connect("mongodb://127.0.0.1:27017/mern-login")
  .then(() => console.log("MongoDB Connected"));

app.use("/api/items", itemRoutes);

app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
  //  await processQueue(); 
});
