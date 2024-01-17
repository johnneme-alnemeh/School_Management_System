import React, { useState, useEffect } from "react";
import { MdOutlineQuiz } from "react-icons/md";
import { Link , useNavigate, useParams } from "react-router-dom";
import Stunavbar from './Stunavbar';
import axios from "axios";

export default function EditStudent(){

    let navigate = useNavigate();
    const { id } = useParams();

    const [quizzes , getquizzes] = useState([]);

    let p = [];
    let pro = [];
    const [sub, setsub] = useState([]);

    useEffect(() => {
        
        getallquizzes();
    },[]);


    const getallquizzes = () => {
        p = window.localStorage.getItem('profile');
          pro = (JSON.parse(p));
          console.log(pro);
          if(pro !== null){
            pro.map((i) => {
                axios.get(`http://localhost:8000/api/subject_from_section/${i.section_id}`).then((response) => {
            console.log(response.data);
            getquizzes(response.data);
        }
        );
        axios.get(`http://localhost:8000/api/subject_from_section/${i.section_id}`).catch((error) => {
            console.log(error);
        }
        );
            })
        
    }
    }

    return(
        <>
            <Stunavbar />
            <div className="App" style={{marginTop: 100}}>
                <h1 style={{color: "#003399"}}>Your Quizzes</h1>
                <table className="table-2">
                    <thead>
                          
                        <tr>
                            <th>ID</th>
                            <th>SUBJECT</th>
                            <th>STAGE</th>
                            <th>CLASS</th>
                            <th>SECTION</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quizzes.map((quiz) => {
                                return (
                                    <tr key={quiz.id}>
                                        <td>{quiz.id}</td>
                                        <td>{quiz.subject}</td>
                                        <td>{quiz.grade_id}</td>
                                        <td>{quiz.classroom_id}</td>
                                        <td>{quiz.section_id}</td>
                                        <td>
                                            
                                        <Link to={`/Quiz/${quiz.id}/${quiz.section_id}`} className="btn btn-primary mx-2">
                                                <MdOutlineQuiz className="edit-delete-icon"/>
                                                Solve Quiz
                                        </Link>
                                            

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


