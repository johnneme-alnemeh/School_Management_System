import React, { useState, useEffect } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import { Link , useParams, useNavigate} from "react-router-dom";
import Mannavbar from './Mannavbar';
import axios from "axios";

export default function EditTeacher(){
let navigate = useNavigate();
const { id } = useParams();

const [teachers , getteachers] = useState([]);

useEffect(() => {
    getAllTeachers();
},[]);


const getAllTeachers = () => {
    axios.get('http://localhost:8000/api/Teachers').then((response) => {
        getteachers(response.data);
        console.log(response.data);
    }
    );
    axios.get('http://localhost:8000/api/Teachers').catch((error) => {
        console.log(error);
    }
    );
}

 const deleteUser = (id) => {
    axios.delete(`http://localhost:8000/api/Teachers/${id}`);
    getAllTeachers();
   };


    return(
        <>
            <Mannavbar />
            <div className="App">
                <h1 style={{color: "#003399"}}>Teachers Table</h1>
                <table>
                    <thead>
                            <Link to="/Add-teacher" className="btn btn-primary mx-2">
                                <AiOutlineUserAdd size={25} className="Add-icon"/>
                                Hire Teacher
                            </Link>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialization</th>
                            <th>Joining Date</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             teachers.map((teacher) => {
                                 return (
                                    <tr key={teacher.id}>
                                        <td>{teacher.id}</td>
                                        <td>{teacher.Name}</td>
                                        <td>{teacher.email}</td>
                                        <td>{teacher.Specialization_id}</td>
                                        <td>{teacher.Joining_Date}</td>
                                        <td>{teacher.Address}</td>
                                        <td>
                                            <Link to={`/Update-teacher/${teacher.id}`} className="btn btn-success mx-2" >
                                                <RiEdit2Fill className="edit-delete-icon"/>
                                                Edit Teacher
                                            </Link>

                                            <button className="btn btn-danger mx-2" onClick={() => deleteUser(teacher.id)} style={{marginTop: "4px"}}>
                                                <RiDeleteBin6Fill className="edit-delete-icon" />
                                                Fire
                                            </button>

                                        </td>
                                    </tr>
                                    );  
                            })
                        }
                  </tbody>
                </table>
            </div>
        </>
    );
}

{/* <tbody>
{
    teachers.map((student) => {
        return (
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.nationalitie_id}</td>
                <td>{student.Grade_id}</td>
                <td>{student.parent_id}</td>
                <td>{student.academic_year}</td>
                <td>
                    <Link to={`/Update-student/${student.id}`} className="btn btn-success mx-2">
                        <RiEdit2Fill className="edit-delete-icon"/>
                        Edit Student
                    </Link>

                    <button className="btn btn-danger mx-2" onClick={() => deleteUser(student.id)} >
                        <RiDeleteBin6Fill className="edit-delete-icon" />
                        EXPEL
                    </button>

                </td>
            </tr>
        );  
    })
} */}


{/* <tbody>
{
    Teachers.map((teacher) => {
        return (
            <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.Name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.Specialization_id}</td>
                <td>{teacher.Joining_Date}</td>
                <td>{teacher.Address}</td>
                <td>
                    <Link to="/Update-teacher" className="btn btn-success mx-2">
                        <RiEdit2Fill className="edit-delete-icon"/>
                        Edit Teacher
                    </Link>

                    <button className="btn btn-danger mx-2" onClick={() => deleteUser(teacher.id)} >
                        <RiDeleteBin6Fill className="edit-delete-icon" />
                        Fire
                    </button>
                </td>
            </tr>
        );
    })
} */}