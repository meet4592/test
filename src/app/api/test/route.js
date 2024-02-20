import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import StudentModel from '../models/Student';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/students");

app.get('/students', (req, res) => {
  StudentModel.find()
    .then(students => res.json(students))
    .catch(err => res.json(err));
});

app.listen(3000, () => {
  console.log('Server is running');
});
