import React, { useState, useEffect } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import { Link , useNavigate, useParams } from "react-router-dom";
import Mannavbar from './Mannavbar';
import axios from "axios";

export default function EditParent(){

    let navigate = useNavigate();
    const { id } = useParams();

    const [parents , getparents] = useState([]);

    useEffect(() => {
        getallparents();
    },[]);


    const getallparents = () => {
        axios.get('http://localhost:8000/api/parents').then((response) => {
            console.log(response.data);
            getparents(response.data);
        }
        );
        axios.get('http://localhost:8000/api/parents').catch((error) => {
            console.log(error);
        }
        );
    }

     const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8000/api/parents/${id}`);
        getallparents();
       };
    
    const add_parent = () => {
        navigate('/Add-parent');
    }

    return(
        <>
            <Mannavbar />
            <div className="App">
                <h1 style={{color: "#003399"}}>parents Table</h1>
                <table className="table-2">
                    <thead>
                            <button className="btn btn-primary mx-2" onClick={() => add_parent()} >
                                <AiOutlineUserAdd size={25} className="Add-icons"/>
                                Add Parent
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
                            parents.map((parent) => {
                                return (
                                    <tr key={parent.id}>
                                        <td>{parent.id}</td>
                                        <td>{parent.name}</td>
                                        <td>{parent.email}</td>
                                        <td>{parent.nationalitie_id}</td>
                                        <td>{parent.Grade_id}</td>
                                        <td>{parent.parent_id}</td>
                                        <td>{parent.academic_year}</td>
                                        <td>
                                            <Link to={`/Update-parent/${parent.id}`} className="btn btn-success mx-2">
                                                <RiEdit2Fill className="edit-delete-icon"/>
                                                Edit parent
                                            </Link>

                                            <button className="btn btn-danger mx-2" onClick={() => deleteUser(parent.id)} >
                                                <RiDeleteBin6Fill className="edit-delete-icon" />
                                                Delete Parent
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


