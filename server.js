const express = require("express");
const connectDB = require("./db/connectDB.js");
const cors = require("cors");
require("dotenv").config();
const jobRoutes = require("./routes/jobRoutes.js");
const errorHandler = require("./middlewares/errorMiddleware.js");

async function runServer() {
  await connectDB();

  const app = express();
  const PORT = process.env.PORT || 3000;

  // json parser
  app.use(express.json());

  // CORS
  app.use(cors());

  // Routes
  app.use("/v1/jobs", jobRoutes);

  // Global error handling middleware
  app.use(errorHandler);

  // start the server
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

runServer();
