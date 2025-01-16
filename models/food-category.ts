import { Schema, model, models } from "mongoose";

const FOOD_CATEGORY_SCHEMA = new Schema(
  {
    categoryName: String,
  },
  {
    timestamps: true,
  }
);

const FoodCategoryModel =
  models["food-category"] ||
  model("FOOD", FOOD_CATEGORY_SCHEMA, "food-category");

export { FoodCategoryModel };
