import express from "express";
import { create, get, getAll, remove, update } from "../controllers/author";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.get("/authors", getAll);
router.get("/authors/:id", get);
router.post("/authors", checkPermission, create);
router.delete("/authors/:id", checkPermission, remove);
router.patch("/authors/:id", checkPermission, update);

export default router;
