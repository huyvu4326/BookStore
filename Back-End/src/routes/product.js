import express from "express";
import { create, get, getAll, remove, update } from "../controllers/product";
import { authenticate } from "../middlewares/authenticate";


const router = express.Router();

router.get("/books", getAll);
router.get("/books/:id", get);
router.post("/books", authenticate, create);
router.delete("/books/:id", authenticate, remove);
router.patch("/books/:id", authenticate, update);

export default router;
