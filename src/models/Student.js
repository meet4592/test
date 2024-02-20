import mongoose from "mongoose";

const { Schema } = mongoose;


const studentSchema = new Schema({
    rollnumber: {
        type: String,
      
    },
    name: {
        type: String,
    }
})

const Student = model('students', studentSchema)
export default StudentModel
