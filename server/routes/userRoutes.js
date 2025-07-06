import express from "express";
import {
  login,
  signup,
  updateProfile,
  checkAuth,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";
import { protectRoute } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/forgot-password", forgotPassword);
userRouter.put("/update-profile", protectRoute, updateProfile);
userRouter.get("/check", protectRoute, checkAuth);
userRouter.post("/reset-password/:token", resetPassword);

export default userRouter;
