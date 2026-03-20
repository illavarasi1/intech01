import { Queue, Worker, QueueEvents } from "bullmq";
import Redis from "ioredis";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import { io } from "./server.js";
import Item from "../backend2/models/items.js";
// import client from "./redis.js"

const connection = new Redis({
  host: "127.0.0.1",
  port: 6380,
enableReadyCheck: false,
  maxRetriesPerRequest: null,
});

export const itemQueue = new Queue("itemQueue", { connection });

export const addItemJob = async (itemData) => {
 const job= await itemQueue.add("addItem", itemData, {
    attempts: 50,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
    removeOnComplete: true,
    removeOnFail: false,
 });
    console.log(`Job ${job.id} added to queue`);
   return job;
};

new Worker(
  "itemQueue",
  async (job) => {
        console.log(" Worker running job:", job.id);
    try {
      await connection.set(`job:${job.id}`, "processing");
      const formData = new FormData();
      formData.append("title", job.data.title);
      formData.append("image", fs.createReadStream(job.data.image));

      await axios.post("http://localhost:3000/api/items/add", formData, {
        headers: formData.getHeaders(),
        timeout: 5000,
      });
    io.emit("itemAdded", {
      title: job.data.title,
      imageUrl: `/uploads/files/${path.basename(job.data.image)}`,
    });
      await connection.set(`job:${job.id}`, "completed");

      console.log("Sent to backend2");
    } catch (err) {
      await connection.set(`job:${job.id}`, "failed");
      throw err;
    }
  },
  { connection },
);
const queueEvents = new QueueEvents("itemQueue", { connection });

queueEvents.on("completed", ({ jobId }) => {
  console.log(` Job ${jobId} completed`);
});

queueEvents.on("failed", ({ jobId, failedReason }) => {
  console.log(` Job ${jobId} failed: ${failedReason}`);
});
