
import Redis from "ioredis";
import { createClient } from "redis";

const client = createClient({
  url: "redis://127.0.0.1:6380",
});

client.on("connect", () => {
  console.log(" Redis Connected");
});

client.on("error", (err) => {
  console.error(" Redis Error:", err);
});

await client.connect();

export default client;
