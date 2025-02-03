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
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const food_1 = require("../models/food");
const express_1 = require("express");
exports.foodRouter = (0, express_1.Router)();
exports.foodRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield food_1.FoodModel.find();
    res.json(food);
}));
exports.foodRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const Food = yield food_1.FoodModel.find({
        _id: id,
    });
    res.json(Food);
}));
exports.foodRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { foodName, price, image, ingredients, category } = req.body;
    const food = yield food_1.FoodModel.create({
        foodName,
        price,
        image,
        ingredients,
        category,
    });
    res.status(200).json(food);
}));
exports.foodRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deletefood = yield food_1.FoodModel.deleteOne({
        _id: id,
    });
    res.send({ message: "Deleted" });
}));
exports.foodRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { foodName, price, image, ingredients, category } = req.body;
    const id = req.params.id.toString();
    const updatefood = yield food_1.FoodModel.findByIdAndUpdate(id, {
        foodName,
        price,
        image,
        ingredients,
        category,
    }, { new: true });
    res.json(updatefood);
}));
