import React, { useState, useEffect } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import { Link , useNavigate, useParams } from "react-router-dom";
import Mannavbar from './Mannavbar';
import axios from "axios";

export default function EditStudent(){

    let navigate = useNavigate();
    const { id } = useParams();

    const [students , getstudents] = useState([]);

    useEffect(() => {
        getallstudents();
    },[]);


    const getallstudents = () => {
        axios.get('http://localhost:8000/api/Students').then((response) => {
            console.log(response.data);
            getstudents(response.data);
        }
        );
        axios.get('http://localhost:8000/api/Students').catch((error) => {
            console.log(error);
        }
        );
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8000/api/Students/${id}`);
        getallstudents();
       };
    
    const add_student = () => {
        navigate('/Add-student');
    }

    return(
        <>
            <Mannavbar />
            <div className="App" style={{marginTop: 100}}>
                <h1 style={{color: "#003399"}}>Students Table</h1>
                <table className="table-2">
                    <thead>
                            <button className="btn btn-primary mx-2" onClick={() => add_student()} >
                                <AiOutlineUserAdd size={25} className="Add-icons"/>
                                Register Student
                            </button>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>NATIONALITY</th>
                            <th>GRADE</th>
                            <th>PARENT ID</th>
                            <th>ACADEMIC YEAR</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student) => {
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
                        }
                    </tbody>
                </table>
            </div> 
        </>
    );
}


