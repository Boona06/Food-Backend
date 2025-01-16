import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import { FoodCategoryRouter } from "./router/food-category";
import { foodRouter } from "./router/food";
const cors = require("cors");
const express = require("express");
const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

configDotenv();
const MONGODB_URL = process.env.NEXT_PUBLIC_MONGODB;
//Connect to MONGODB
const Connect = async () => {
  if (!MONGODB_URL) {
    throw new Error("Database Connection URL is not defined ");
  }
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MONGODB holbogdloo");
  } catch (error) {
    console.error("failed broro", error);
  }
};

Connect();
app.use("/food-category/", FoodCategoryRouter);
app.use("/user/", foodRouter);
app.use("/food/", foodRouter);

app.listen(port, () => {
  console.log(`Sonsoj baina http://localhost:${port}`);
  console.log(MONGODB_URL);
});
