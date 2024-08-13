import { Router } from "express";
const router = Router();

import {
  userRegister,
  userLogIn,
  userLogOut,
  userUpdate,
} from "../controllers/user.controllers.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

router.route("/register").post(userRegister);
router.route("/login").post(userLogIn);
router.route("/logout").post(verifyJWT, userLogOut);
router.route("/update").patch(verifyJWT, userUpdate);

export default router;
