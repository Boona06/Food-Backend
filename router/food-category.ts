import { Request, Response } from "express";
import { FoodCategoryModel } from "../models/food-category";
import { Router } from "express";

export const FoodCategoryRouter = Router();

FoodCategoryRouter.get("/", async (req: Request, res: Response) => {
  const Food = await FoodCategoryModel.find();
  res.json(Food);
});
FoodCategoryRouter.post("/", async (req: Request, res: Response) => {
  const name = req.body.categoryName;
  const newFood = await FoodCategoryModel.create({
    categoryName: name,
  });
  res.json(newFood);
});
FoodCategoryRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deleteFood = await FoodCategoryModel.deleteOne({
    _id: id,
  });
  res.json(deleteFood);
});
FoodCategoryRouter.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const newFood = await FoodCategoryModel.findByIdAndUpdate(
    id,
    {
      categoryName: req.body.categoryName,
    },
    {
      new: true,
    }
  );
  res.json(newFood);
});
