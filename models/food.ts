import { Schema, model, models } from "mongoose";

const FOOD_SCHEMA = new Schema(
  {
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
    },
  },
  {
    timestamps: true,
  }
);
const FoodModel = models["Food"] || model("Food", FOOD_SCHEMA, "food");

export { FoodModel };
