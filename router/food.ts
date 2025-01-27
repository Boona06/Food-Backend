import { Request, Response } from "express";
import { FoodModel } from "../models/food";
import { Router } from "express";

export const foodRouter = Router();

foodRouter.get("/", async (req: Request, res: Response) => {
  const food = await FoodModel.find();
  res.json(food);
});

foodRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const Food = await FoodModel.find({
    _id: id,
  });
  res.json(Food);
});

foodRouter.post("/", async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category } = req.body;

  const food = await FoodModel.create({
    foodName,
    price,
    image,
    ingredients,
    category,
  });
  res.status(200).json(food);
});

foodRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletefood = await FoodModel.deleteOne({
    _id: id,
  });
  res.send({ message: "Deleted" });
});
foodRouter.put("/:id", async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category } = req.body;

  const id = req.params.id.toString();
  const updatefood = await FoodModel.findByIdAndUpdate(
    id,
    {
      foodName,
      price,
      image,
      ingredients,
      category,
    },
    { new: true }
  );
  res.json(updatefood);
});
