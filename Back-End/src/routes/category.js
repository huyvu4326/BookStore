import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
import { authenticate } from "../middlewares/authenticate";


const router = express.Router();

router.get("/categories", getAll);
router.get("/categories/:id", get);
router.post("/categories", authenticate, create);
router.delete("/categories/:id", authenticate, remove);
router.patch("/categories/:id", authenticate, update);

export default router;
