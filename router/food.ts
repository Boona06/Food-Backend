import { Request, Response } from "express";
import { FoodModel } from "../models/food";
import { Router } from "express";

export const foodRouter = Router();

foodRouter.get("/", async (req: Request, res: Response) => {
  const food = await FoodModel.find();
  res.json(food);
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

foodRouter.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const deletefood = FoodModel.deleteOne({
    _id: id,
  });
  res.send({ message: "Deleted" });
});
foodRouter.put("/:id", (req: Request, res: Response) => {
  const { foodName, price, image, ingredients } = req.body;
  const updatefood = FoodModel.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      foodName,
      price,
      image,
      ingredients,
    }
  );
  res.json(updatefood);
});
