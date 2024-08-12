import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";

const userShema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userShema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userShema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userShema.methods.Token = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: process.env.EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userShema);
