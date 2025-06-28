const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  jobType: {
    type: String,
    enum: [
      "Full-time (On-site)",
      "Part-time (On-site)",
      "Full-time (Remote)",
      "Part-time (Remote)",
    ],
    required: true,
  },
  jobDescription: { type: String, required: true },
  requiredQualifications: { type: String, required: true },
}, 
{timestamps: true});

const JOB = mongoose.model("JOB", jobSchema);

module.exports = JOB;
