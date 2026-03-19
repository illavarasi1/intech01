import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { addItemJob } from "../queue.js";
import verifyToken from "../middleware/verifytoken.js";

const router = express.Router();


const upload = multer({ dest: "uploads/" });

router.post("/add-item", verifyToken, upload.single("image"), async (req, res) => {
 try {
 
   const newPath = `uploads/files/${Date.now()}-${req.file.originalname}`;

   fs.renameSync(req.file.path, newPath);

   const itemData = {
     title: req.body.title,
     image: newPath,
   };

   await addItemJob(itemData);
   res.json({
     message: "Added to queue",
     jobId: job.id, 
   });

 } catch (err) {
   res.status(500).json({ error: err.message });
 }
});

export default router;