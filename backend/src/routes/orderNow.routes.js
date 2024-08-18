import { Router } from "express";

const router = Router();

import {
  orderNowPost,
  countOrderNowPost,
} from "../controllers/orderNow.controllers.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

router.route("/:foodId").post(verifyJWT, orderNowPost);
router.route("/").get(verifyJWT, countOrderNowPost);

export default router;
