import { Food } from "../models/food.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//@dec ---postFood controller---
const postFood = asyncHandler(async (req, res) => {
  const { foodName, description, category, picture, price } = req.body;

  if (!(foodName, description, category, picture, price)) {
    throw new ApiError(401, "fill the field");
  }

  const createdFood = await Food.create({
    foodName,
    description,
    category,
    picture,
    price,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, createdFood, "post successfully"));
});

//@dec ---deleteFood controller---
const deleteFood = asyncHandler(async (req, res) => {
  const { foodId } = req.params;

  if (!foodId) {
    throw new ApiError(500, "food not found");
  }

  const food = await Food.findByIdAndDelete(foodId);

  return res
    .status(200)

    .json(new ApiResponse(200, "deleted successfully"));
});

//@dec ---updateFood controller---
const updateFood = asyncHandler(async (req, res) => {
  const { foodId } = req.params;

  const updatedFood = await Food.findByIdAndUpdate(foodId, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, updatedFood, "updated successfully"));
});
//@dec ---getById controller---
const getById = asyncHandler(async (req, res) => {
  const { foodId } = req.params_id;

  const getFood = await Food.findById(foodId);

  return res
    .status(200)
    .json(new ApiResponse(200, getFood, "get all food successfully"));
});
//@dec ---getByCategoryDessert controller---
const getByCategoryDessert = asyncHandler(async (req, res) => {
  const getFood = await Food.aggregate([
    {
      $match: {
        category: "dessert",
      },
    },
  ]);

  return res
    .status(200)
    .json(new ApiResponse(200, getFood, "get all food successfully"));
});
//@dec ---getByCategoryAppetizer controller---
const getByCategoryAppetizer = asyncHandler(async (req, res) => {
  const getFood = await Food.aggregate([
    {
      $match: {
        category: "appetizer",
      },
    },
  ]);

  return res
    .status(200)
    .json(new ApiResponse(200, getFood, "get all food successfully"));
});

export {
  postFood,
  deleteFood,
  updateFood,
  getById,
  getByCategoryDessert,
  getByCategoryAppetizer,
};
