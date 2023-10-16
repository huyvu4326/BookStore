import express from "express";
import { forgotPassword, getProfile, resetPassword, updatePassword, updateProfile } from "../controllers/user";
import { login, signup } from "../controllers/auth";
import { authenticate } from "../middlewares/authenticate";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", login);
router.get('/getProfile',authenticate,getProfile)
router.patch('/updateProfile',authenticate,updateProfile)
router.patch('/updatePassword',authenticate,updatePassword)
router.post('/forgotPassword',forgotPassword)
router.patch('/resetPassword/:token',resetPassword)

export default router;
