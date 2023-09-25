import express from "express";
import { login, signup, forgotPassword, resetPassword } from "../controllers/user";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", login);
router.post('/forgotPassword',forgotPassword)
router.patch('/resetPassword/:token',resetPassword)

export default router;
