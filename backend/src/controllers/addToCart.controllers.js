import { AddToCart } from "../models/addToCart.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

//@dec ---addToCart controller---
const addToCarts = asyncHandler(async (req, res) => {
  const { foodId } = req.params;
  const userId = req.user._id;

  if (!(foodId, userId)) {
    throw new ApiError(400, "Missing required parameters");
  }

  const findAddToCart = await AddToCart.findOne({
    user: new mongoose.Types.ObjectId(userId),
    food: new mongoose.Types.ObjectId(foodId),
  });

  if (findAddToCart) {
    await AddToCart.findByIdAndDelete(findAddToCart._id);
    return res
      .status(200)
      .json(new ApiResponse(200, null, "removed from cart"));
  } else {
  }
  const createAddToCart = await AddToCart.create({
    user: new mongoose.Types.ObjectId(userId),
    food: new mongoose.Types.ObjectId(foodId),
  });

  return res
    .status(200)
    .json(new ApiResponse(200, createAddToCart, "added to cart"));
});

//@dec ---countAddToCart controller---
const countAddToCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  if (!userId) {
    throw new ApiError(400, "Missing required parameters");
  }

  const countCart = await AddToCart.aggregate([
    {
      $match: {
        user: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $count: "addedToCart",
    },
  ]);
  return res
    .status(200)
    .json(new ApiResponse(200, countCart, "fetched total add to cart"));
});

export { addToCarts, countAddToCart };
