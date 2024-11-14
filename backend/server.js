//entry point for our api

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";

import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

//to ensure sending json works req.body to work
app.use(express.json());

app.use(cookieParser());

app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
