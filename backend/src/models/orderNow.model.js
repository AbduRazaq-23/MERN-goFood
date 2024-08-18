import mongoose, { Schema } from "mongoose";

const OrderNowSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  food: {
    type: mongoose.Types.ObjectId,
    ref: "Food",
  },
});

export const Ordernow = mongoose.model("Ordernow", OrderNowSchema);
