// models/Student.js

import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db'; // Assuming you export sequelize from connectToDatabase function

const Student = sequelize.define('Student', {
  rollnumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'students', // Assuming your table name in the database is 'students'
});

export default Student;
