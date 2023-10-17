import express from "express";
import { create, get, getAll, remove, update } from "../controllers/author";
import { authenticate } from "../middlewares/authenticate";


const router = express.Router();

router.get("/authors", getAll);
router.get("/authors/:id", get);
router.post("/authors",authenticate , create);
router.delete("/authors/:id", authenticate, remove);
router.patch("/authors/:id", authenticate, update);

export default router;
