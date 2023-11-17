import express from "express";
import productRouter from "./routes/product";
import userRouter from "./routes/user"
import categoryRouter from "./routes/category"
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
app.use("/api", cartRouter)

mongoose.connect("mongodb+srv://huyvu0831:huyvu4326@cluster0.bs3nj1s.mongodb.net/Book-Store?retryWrites=true&w=majority");

export const viteNodeApp = app;
