import axios from "axios";

const ITEMS_API = import.meta.env.VITE_ITEMS;
const AUTH_API = import.meta.env.VITE_AUTH;

const apis = axios.create({
  baseURL: AUTH_API,
});
const api = axios.create({
  baseURL: ITEMS_API,
  withCredentials: true,
});

export const loginUser = async (data) => {
  const response = await apis.post("/login", data);
  const authToken = response.data.token;
  console.log(authToken);
  localStorage.setItem("token", authToken);
  return response.data;
};
export const addItem = async (title, image) => {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("title", title);
  formData.append("image", image);

  try {
    const response = await api.post("/items/add", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (err) {
    console.log("Backend2 down, sending to queue...");

    const queueResponse = await axios.post(
      "http://localhost:5001/queue/add",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return queueResponse.data;
  }
};
export const getAllItems = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/items/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
