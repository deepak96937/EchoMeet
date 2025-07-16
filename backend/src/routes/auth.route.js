// authRoutes.js

import express from "express";
import { login, logout, onboard, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/onboarding", onboard)

export default router;
