import { Ordernow } from "../models/orderNow.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

//@dec ---orderNowPost controller---
const orderNowPost = asyncHandler(async (req, res) => {
  const { foodId } = req.params;
  const userId = req.user._id;

  if (!(foodId, userId)) {
    throw new ApiError(400, "Missing required parameters");
  }

  const findOrderNow = await Ordernow.findOne({
    user: new mongoose.Types.ObjectId(userId),
    food: new mongoose.Types.ObjectId(foodId),
  });

  if (findOrderNow) {
    await Ordernow.findByIdAndDelete(findOrderNow._id);
    return res
      .status(200)
      .json(new ApiResponse(200, null, "removed from cart"));
  } else {
  }
  const createOrderNow = await Ordernow.create({
    user: new mongoose.Types.ObjectId(userId),
    food: new mongoose.Types.ObjectId(foodId),
  });

  return res
    .status(200)
    .json(new ApiResponse(200, createOrderNow, "added to cart"));
});

//@dec ---countOrderNowPost controller---
const countOrderNowPost = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  if (!userId) {
    throw new ApiError(400, "Missing required parameters");
  }

  const countOrder = await Ordernow.aggregate([
    {
      $match: {
        user: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $count: "countOrder",
    },
  ]);
  return res
    .status(200)
    .json(new ApiResponse(200, countOrder, "fetched total order"));
});

export { orderNowPost, countOrderNowPost };
