import express from "express";
import multer from "multer";
import Item from "../models/items.js";
import verifyToken from "../middleware/verifytoken.js"

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/add",verifyToken, upload.single("image"), async (req, res) => {
  try {
    const title = req.body.title;

    const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;

    const newItem = new Item({
      title,
      imageUrl,
    });

    await newItem.save();

    res.json(newItem);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/all", verifyToken, async (req, res) => {
  const items = await Item.find();

  res.json(items);
});


export default router;
