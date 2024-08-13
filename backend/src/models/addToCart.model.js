import mongoose, { Schema } from "mongoose";

const addToCartSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  food: {
    type: mongoose.Types.ObjectId,
    ref: "Food",
  },
});

export const AddToCart = mongoose.model("AddToCart", addToCartSchema);
