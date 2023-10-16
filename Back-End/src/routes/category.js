import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
import { authorization } from "../middlewares/authorization";
import { authenticate } from "../middlewares/authenticate";

const router = express.Router();

router.get("/categories", getAll);
router.get("/categories/:id", get);
router.post("/categories", authorization, authenticate, create);
router.delete("/categories/:id", authorization, authenticate, remove);
router.patch("/categories/:id", authorization, authenticate, update);

export default router;
