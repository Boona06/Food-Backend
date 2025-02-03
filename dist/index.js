"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const food_category_1 = require("./router/food-category");
const food_1 = require("./router/food");
const cors = require("cors");
const express = require("express");
const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());
(0, dotenv_1.configDotenv)();
const MONGODB_URL = process.env.NEXT_PUBLIC_MONGODB;
//Connect to MONGODB
const Connect = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!MONGODB_URL) {
        throw new Error("Database Connection URL is not defined ");
    }
    try {
        yield mongoose_1.default.connect(MONGODB_URL);
        console.log("MONGODB holbogdloo");
    }
    catch (error) {
        console.error("failed broro", error);
    }
});
Connect();
app.use("/food-category/", food_category_1.FoodCategoryRouter);
app.use("/user/", food_1.foodRouter);
app.use("/food/", food_1.foodRouter);
app.listen(port, () => {
    console.log(`Sonsoj baina http://localhost:${port}`);
    console.log(MONGODB_URL);
});
