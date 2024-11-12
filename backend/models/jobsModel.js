import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
},
{
    timestamps:true
});

const Jobs = mongoose.model('Job', jobsSchema)

export default Jobs;