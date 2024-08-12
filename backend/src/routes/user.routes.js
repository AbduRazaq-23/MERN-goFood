import { Router } from "express";
const router = Router();

import { userRegister, userLogIn } from "../controllers/user.controllers.js";

router.route("/register").post(userRegister);
router.route("/login").post(userLogIn);

export default router;
