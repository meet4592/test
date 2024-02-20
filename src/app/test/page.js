'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";

const RollNumberAndName = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("/api/students"); // Make a GET request to the API endpoint
        setStudentData(response.data.students); // Set student data from the response
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData(); // Call the function to fetch student data

  }, []);

  return (
    <div className="rollnumber-and-name">
      <h1>Marks</h1>
      <ul>
        {studentData.map((student, index) => (
          <li key={index}>
            Roll Number: {student.rollnumber}, Name: {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RollNumberAndName;
