const mongoose = require("mongoose");
require("dotenv").config();

const appURI = process.env.MONGODB;

async function connectDB() {
  await mongoose
    .connect(appURI, { dbName: "jobposting" })
    .then(() => {
      console.log("Connected to Database Successfully.");
    })
    .catch((err) => {
      console.log("Error connecting to Database.");
    });
}

module.exports = connectDB;
