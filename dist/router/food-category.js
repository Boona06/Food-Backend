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
exports.FoodCategoryRouter = void 0;
const food_category_1 = require("../models/food-category");
const express_1 = require("express");
exports.FoodCategoryRouter = (0, express_1.Router)();
exports.FoodCategoryRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Food = yield food_category_1.FoodCategoryModel.find();
    res.json(Food);
}));
exports.FoodCategoryRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const Food = yield food_category_1.FoodCategoryModel.find({
        _id: id,
    });
    res.json(Food);
}));
exports.FoodCategoryRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.categoryName;
    const newFood = yield food_category_1.FoodCategoryModel.create({
        categoryName: name,
    });
    res.json(newFood);
}));
exports.FoodCategoryRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deleteFood = yield food_category_1.FoodCategoryModel.deleteOne({
        _id: id,
    });
    res.json(deleteFood);
}));
exports.FoodCategoryRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const newFood = yield food_category_1.FoodCategoryModel.findByIdAndUpdate(id, {
        categoryName: req.body.categoryName,
    }, {
        new: true,
    });
    res.json(newFood);
}));
