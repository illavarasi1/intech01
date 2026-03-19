import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT||5000;
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log(" Client connected:", socket.id);
});

mongoose
  .connect("mongodb://localhost:27017/mern-login")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
