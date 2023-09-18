import express from "express";
import { create, get, getAll, remove, update } from "../controllers/author";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.get("/author", getAll);
router.get("/author/:id", get);
router.post("/author", checkPermission, create);
router.delete("/author/:id", checkPermission, remove);
router.patch("/author/:id", checkPermission, update);

export default router;
