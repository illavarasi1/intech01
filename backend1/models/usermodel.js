import mongoose from "mongoose";

const loginSechema = new mongoose.Schema({
  email: String,
  password: String,
});
const login = mongoose.model("login", loginSechema);
export default login
