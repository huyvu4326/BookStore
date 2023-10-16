import express from "express";
import productRouter from "./routes/product";
import userRouter from "./routes/user"
import categoryRouter from "./routes/category"
import authorRouter from "./routes/author"
import cartRouter from "./routes/cart"
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", userRouter);
app.use("/api", authorRouter)
app.use("/api", cartRouter)

mongoose.connect("mongodb://127.0.0.1:27017/BookStore");

export const viteNodeApp = app;
