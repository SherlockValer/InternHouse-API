const JOB = require("../models/job.model.js");
const catchAsync = require("../utils/catchAsync.js");

// Get All Job Postings
const getAllJobs = catchAsync(async (req, res, next) => {
  const jobs = await JOB.find();

  res.status(200).json({ jobs });
});

// Create a new job posting
const createNewJob = catchAsync(async (req, res, next) => {
  const newJob = new JOB(req.body);
  const saveJob = await newJob.save();

  if (saveJob) {
    res
      .status(201)
      .json({ message: "New Job Posted Successfully", newJob: saveJob });
  }
});

// Get Job Posting by ID
const getJobById = catchAsync(async (req, res, next) => {
  const jobId = req.params.jobId;

  const jobPosting = await JOB.findById(jobId);

  if (!jobPosting) {
    throw { statusCode: 404, message: "Job Posting not found!" };
  }

  res.status(200).json({
    jobPosting,
  });
});

// Delete a job
const deleteJobById = catchAsync(async (req, res, next) => {
  const jobId = req.params.jobId;

  await JOB.findByIdAndDelete(jobId);

  res.status(200).json({
    message: "Job Posting deleted successfully.",
  });
});

module.exports = { getAllJobs, createNewJob, getJobById, deleteJobById };
