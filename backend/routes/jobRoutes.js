 import express from 'express'
 import Jobs from "../models/jobsModel.js";
 import mongoose from 'mongoose';
import { createJob, deleteJob, getJobs, updateJob } from '../controllers/jobController.js';

 const router = express.Router();

 
router.get("/", getJobs);

router.post("/",createJob);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);

 export default router;