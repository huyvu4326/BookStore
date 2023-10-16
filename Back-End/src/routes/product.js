import express from "express";
import { create, get, getAll, remove, update } from "../controllers/product";
import { authenticate } from "../middlewares/authenticate";
import { authorization } from "../middlewares/authorization";

const router = express.Router();

router.get("/books", getAll);
router.get("/books/:id", get);
router.post("/books", authorization, authenticate, create);
router.delete("/books/:id", authorization, authenticate, remove);
router.patch("/books/:id", authorization, authenticate, update);

export default router;
