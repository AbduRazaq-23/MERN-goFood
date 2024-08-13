import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema(
  {
    foodName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["appetizer", "main course", "dessert"],
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Food = mongoose.model("Food", foodSchema);
