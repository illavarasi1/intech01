import { addItemJob } from "./queue.js";
import axios from "axios";
const run = async () => {
  await addItemJob({
    title: "Test Item",
    image: "./test.jpg",
  });

    console.log(" Job added");
   
  process.exit();
};

run();
