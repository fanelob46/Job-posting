//entry point for our api

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Jobs from "./models/jobsModel.js";

dotenv.config();

const app = express();

//to ensure sending json works req.body to work
app.use(express.json());

app.post("/api/jobs", async (req, res) => {
  const job = req.body; //user will send this data

  ///ensuring the fiels are inputed with data from the use
if (
  !job.title ||
  !job.description ||
  !job.location ||
  !job.salary ||
  !job.type
) {
  return res.status(400)
    .json({ success: false, message: "please provide all fields" });
}

  const newJob = new Jobs(job);
  try {
    await newJob.save();
    res.status(201).json({ success: true, message: "new job added" });
  } catch (error) {
    console.log("Error in saving a job:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.delete("/api/jobs/:id", async (req,res) =>{
    const {id} = req.params;

    try {
        await Jobs.findByIdAndDelete(id);
        res.status(200).json({success: true, message:"job deleted"})
    } catch (error) {
        res.status(404).json({success:false, message:"Job not found"})
    }
})

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
