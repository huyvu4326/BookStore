import express from "express";
import { create, get, getAll, remove, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.get("/books", getAll);
router.get("/books/:id", get);
router.post("/books", checkPermission, create);
router.delete("/books/:id", checkPermission, remove);
router.patch("/books/:id", checkPermission, update);

export default router;
