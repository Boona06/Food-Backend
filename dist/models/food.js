"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModel = void 0;
const mongoose_1 = require("mongoose");
const FOOD_SCHEMA = new mongoose_1.Schema({
    foodName: String,
    price: String,
    image: String,
    ingredients: String,
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "FoodCategory",
    },
}, {
    timestamps: true,
});
const FoodModel = mongoose_1.models["Food"] || (0, mongoose_1.model)("Food", FOOD_SCHEMA, "food");
exports.FoodModel = FoodModel;
