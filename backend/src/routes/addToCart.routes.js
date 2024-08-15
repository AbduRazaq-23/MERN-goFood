import { Router } from "express";

const router = Router();

import {
  addToCarts,
  countAddToCart,
} from "../controllers/addToCart.controllers.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

router.route("/:foodId").post(verifyJWT, addToCarts);
router.route("/").get(verifyJWT, countAddToCart);

export default router;
