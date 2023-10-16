import express from "express";
import { create, get, getAll, remove, update } from "../controllers/author";
import { authorization } from "../middlewares/authorization";
import { authenticate } from "../middlewares/authenticate";


const router = express.Router();

router.get("/authors", getAll);
router.get("/authors/:id", get);
router.post("/authors",authorization,authenticate , create);
router.delete("/authors/:id", authorization, authenticate, remove);
router.patch("/authors/:id", authorization, authenticate, update);

export default router;
