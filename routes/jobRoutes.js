const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  createNewJob,
  getJobById,
  deleteJobById,
} = require("../controllers/jobsController.js");

router.get("/", getAllJobs);

router.post("/", createNewJob);

router.get("/:jobId", getJobById);

router.delete("/:jobId", deleteJobById);

module.exports = router;
