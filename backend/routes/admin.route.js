import express from "express";
import { protectRoute } from "../middlewares/checkAuth.middleware.js";
import { createProduct, getProducts } from "../controllers/admin.controller.js";

const router = express.Router();

// Route accessible to all authenticated users
// router.get("/profile", protectRoute, (req, res) => {
//   res.status(200).json({ user: req.user });
// });

// Route accessible only to admins
router.get("/add-product", protectRoute, (req, res) => {
  res.status(200).json({ message: "Welcome Admin" });
});

router.get("/", protectRoute, getProducts);
router.post("/", protectRoute, createProduct);

export default router;
