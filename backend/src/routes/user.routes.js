import { Router } from "express";
const router = Router();

import {
  userRegister,
  userLogIn,
  userLogOut,
  userUpdate,
  userGetById,
  getAllUser,
} from "../controllers/user.controllers.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

router.route("/register").post(userRegister);
router.route("/login").post(userLogIn);
router.route("/logout").patch(verifyJWT, userLogOut);
router.route("/update").patch(verifyJWT, userUpdate);
router.route("/getuser").get(verifyJWT, userGetById);
router.route("/getalluser").get(verifyJWT, getAllUser);

export default router;
