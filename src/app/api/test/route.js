// pages/api/students.js

import { connectToDatabase } from "@/utils/db";
import Student from "@/models/Student";

export async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Connect to the database
    const sequelize = await connectToDatabase();

    // Fetch roll numbers and marks from the database
    const students = await Student.findAll({ attributes: ["rollnumber", "name"] });

    res.status(200).json({ students });
  } catch (error) {
    console.error("Error fetching student data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
