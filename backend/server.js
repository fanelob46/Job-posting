//entry point for our api

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import jobRoutes from "./routes/jobRoutes.js"

dotenv.config();

const app = express();

//to ensure sending json works req.body to work
app.use(express.json());

app.use("/api/jobs", jobRoutes);


app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
