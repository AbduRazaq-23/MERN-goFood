import { Router } from "express";
const router = Router();

import { userRegister } from "../controllers/user.controllers.js";

router.route("/register").post(userRegister);

export default router;
