import { Router } from "express";

const router = Router();

import {
  postFood,
  deleteFood,
  updateFood,
  getByCategoryDessert,
  getByCategoryAppetizer,
} from "../controllers/food.controllers.js";

router.route("/postfood").post(postFood);
router.route("/deletefood/:foodId").delete(deleteFood);
router.route("/updatefood/:foodId").patch(updateFood);
router.route("/getbycategorydessert").get(getByCategoryDessert);
router.route("/getbycategoryappetizer").get(getByCategoryAppetizer);

export default router;
