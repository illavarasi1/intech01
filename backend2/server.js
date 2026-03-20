import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import itemRoutes from "./router/itemRoutes.js";
import http from "http";
import { Server } from "socket.io";
import Item from "./models/items.js";

const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("⚡ Client connected:", socket.id);
});
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/api/items", itemRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/mern-login")
  .then(() => console.log("MongoDB Connected"));
  


// Emit all existing items via socket so frontend sees them
  const allItems = await Item.find();
  allItems.forEach((item) =>
    io.emit("itemAdded", {
      title: item.title,
      imageUrl: `/uploads/files/${item.image}`,
    }),
  );
server.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
  //  await processQueue();
});
