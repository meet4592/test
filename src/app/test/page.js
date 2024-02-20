'use client';
import React, { useEffect , useState } from 'react';
import axios from 'axios';


function Page() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/test')
        .then(students => setStudents(students.data))
        .catch(err => console.log(err))
    }, [])

     
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Roll Number</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => {
                        return (
                            <tr>
                                <td>{student.rollnumber}</td>
                                <td>{student.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Page;
