import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//@dec ---user registration controller---
const userRegister = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    throw new ApiError(401, "fill the field");
  }

  const findEmail = await User.findOne({ email });
  if (findEmail) {
    throw new ApiError(409, "user already exist u should login");
  }

  const userReg = await User.create({
    userName,
    email,
    password,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, userReg, "u register successfully"));
});

//@dec ---user LogIn controller---
const userLogIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!(email, password)) {
    throw new ApiError(401, "fill the field");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(409, "u can't login");
  }
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(400, "invalid credentials");
  }

  const token = user.generateToken();
  user.token = token;
  await user.save({ validateBeforeSave: false });

  const options = {
    httpOnly: false,
  };

  return res
    .status(200)
    .cookie("token", token, options)
    .json(new ApiResponse(200, user, "u login successfully"));
});
//@dec ---user LogOut controller---
const userLogOut = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        token: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
  };

  return res
    .status(200)
    .clearCookie("token", options)
    .json(new ApiResponse(200, "u logOut successfully"));
});

//@dec ---user registration controller---
const userUpdate = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;

  if (!(userName, email)) {
    throw new ApiError(401, "fill the field");
  }

  const user = await User.findByIdAndUpdate(req.user._id, {
    userName,
    email,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, user, "u register successfully"));
});

export { userRegister, userLogIn, userLogOut, userUpdate };
