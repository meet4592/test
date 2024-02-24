import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import StudentModel from "../models/Student";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection using environment variable
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/students";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// Async handler for better error handling
app.get("/students", async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving data" });
  }
});

// Fallback for unhandled routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Dynamic port configuration for different environments
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
