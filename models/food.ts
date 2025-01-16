import { Schema, model, models } from "mongoose";

const FOOD_SCHEMA = new Schema(
  {
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    category: Schema.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);
const FoodModel = models["food"] || model("Food", FOOD_SCHEMA, "food");

export { FoodModel };
