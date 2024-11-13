import Jobs from "../models/jobsModel.js";

export const getJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find({});
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    console.log("Error in  fetching jobs", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const createJob = async (req, res) => {
  const job = req.body; //user will send this data

  ///ensuring the fiels are inputed with data from the use
  if (
    !job.title ||
    !job.description ||
    !job.location ||
    !job.salary ||
    !job.type
  ) {
    return res
      .status(400)
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
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const job = req.body;

  try {
    const updatedjob = await Jobs.findByIdAndUpdate(id, job, { new: true });
    res.status(200).json({ success: true, data: updatedjob });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    await Jobs.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "job deleted" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Job not found" });
  }
};