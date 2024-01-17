import React, { useState, useEffect } from "react";
import { GiBlackBook } from "react-icons/gi";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import { Link , useNavigate, useParams } from "react-router-dom";
import Mannavbar from './Mannavbar';
import axios from "axios";

export default function AllSubjects(){

    let navigate = useNavigate();
    const { id } = useParams();

    const [subjects , getsubjects] = useState([]);

    useEffect(() => {
        getallsubjects();
    },[]);


    const getallsubjects = () => {
        axios.get('http://localhost:8000/api/subjects').then((response) => {
            getsubjects(response.data);
        }
        );
        axios.get('http://localhost:8000/api/subjects').catch((error) => {
            console.log(error);
        }
        );
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8000/api/subjects/${id}`);
        getallsubjects();
       };
    
    const add_Subject = () => {
        navigate('/Student-schedule');
    }

    return(
        <>
            <Mannavbar />
            <div className="App" style={{marginTop: 100}}>
                <h1 style={{color: "#003399"}}>Subjects Table</h1>
                <table className="table-2">
                    <thead>
                            <button className="btn btn-primary mx-2" onClick={() => add_Subject()} >
                                <GiBlackBook size={25} className="Add-icons"/>
                                ADD SUBJECT
                            </button>
                        <tr>
                            <th>Subject</th>
                            <th>Stage</th>
                            <th>Classroom</th>
                            <th>Section</th>
                            <th>Day</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subjects.map((subject) => {
                                if(subject.grade_id == 3)
                                subject.grade_id = "High School"
                                else if(subject.grade_id == 2)
                                subject.grade_id = "Middle School"
                                else if(subject.grade_id == 1)
                                subject.grade_id = "Primary School"
                                if(subject.grade_id == "High School" && subject.classroom_id == 3)
                                subject.classroom_id = "Twelfth Grade"
                                else if(subject.grade_id == "High School" && subject.classroom_id == 2)
                                subject.classroom_id = "Eleventh Grade"
                                else if(subject.grade_id == "High School" && subject.classroom_id == 1)
                                subject.classroom_id = "Tenth Grade"
                                else if(subject.grade_id == "Middle School" && subject.classroom_id == 3)
                                subject.classroom_id = "Ninth Grade"
                                else if(subject.grade_id == "Middle School" && subject.classroom_id == 2)
                                subject.classroom_id = "Eighth Grade"
                                else if(subject.grade_id == "Middle School" && subject.classroom_id == 1)
                                subject.classroom_id = "Seventh Grade"
                                else if(subject.grade_id == "Primary School" && subject.classroom_id == 3)
                                subject.classroom_id = "Sixth Grade"
                                else if(subject.grade_id == "Primary School" && subject.classroom_id == 2)
                                subject.classroom_id = "Fifth Grade"
                                else if(subject.grade_id == "Primary School" && subject.classroom_id == 1)
                                subject.classroom_id = "Fourth Grade"
                                return (
                                    <tr key={subject.id}>
                                        <td>{subject.subject}</td>
                                        <td>{subject.grade_id}</td>
                                        <td>{subject.classroom_id}</td>
                                        <td>{subject.section_id}</td>
                                        <td>{subject.day}</td>
                                        <td>{subject.time}</td>
                                        <td>
                                            <Link to={`/Update-subject/${subject.id}`} className="btn btn-success mx-2">
                                                <RiEdit2Fill className="edit-delete-icon"/>
                                                EDIT SUBJECT
                                            </Link>

                                            <button className="btn btn-danger mx-2" onClick={() => deleteUser(subject.id)} >
                                                <RiDeleteBin6Fill className="edit-delete-icon" />
                                                DELETE
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


