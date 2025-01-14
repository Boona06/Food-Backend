import { Schema , model } from "mongoose"

const FOOD_CATEGORY_SCHEMA = new Schema({
    categoryName : String
} , 
{
    timestamps:true
}
)

const  FoodCategoryModel = model ("FOOD" , FOOD_CATEGORY_SCHEMA , "food-category") 

export {FoodCategoryModel}