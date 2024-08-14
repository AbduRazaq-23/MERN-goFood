import { Router } from "express";

const router = Router();

import {
  postFood,
  deleteFood,
  updateFood,
  getAllFood,
} from "../controllers/food.controllers.js";

router.route("/postfood").post(postFood);
router.route("/deletefood/:foodId").delete(deleteFood);
router.route("/updatefood/:foodId").patch(updateFood);
router.route("/getfood").get(getAllFood);

export default router;
