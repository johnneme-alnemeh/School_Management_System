import React , { useState, useEffect } from "react";
import Mannavbar from './Mannavbar';
import axios from 'axios';

const Day = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday'];
const Subject = ['Math', 'Science', 'English', 'French', 'Art', 'Arabic', 'Sport', 'Physics', 'Chemistry', 'History', 'Geo'];
const Time = ['08:00 -> 08:45', '08:45 -> 09:30', '09:30 -> 10:15', '10:30 -> 11:15', '11:15 -> 12:00', '12:15 ->01:00', '01:00 ->01:45'];

export default function StudentSched(){


    const [details , getdetails] = useState([]);
    let det = [];
    useEffect(() => {
        getalldata();
        
    },[]);
    
    
    const getalldata = () => {
        axios.get('http://localhost:8000/api/subjects/create').then((response) => {
            console.log(response.data);
            getdetails(response.data);
        }
        );
        
        
        axios.get('http://localhost:8000/api/subjects/create').catch((error) => {
            console.log(error);
        }
        );
        
    }
    
    return(
        <>
            <Mannavbar />
            <div className="App">
                <h1 style={{color: "#003399"}}>Create Students Schedule</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Stage</th>
                            <th>Classroom</th>
                            <th>Section</th>
                            <th>Day</th>
                            <th>Subject</th>
                            <th>Time</th>
                            <th>Teacher</th>

                        </tr>
                    </thead>
                    <tbody>
                            
                    
                    
                        
                                    <tr >
                                    <td style={{paddingRight: "10px"}}>
                                   <select>
                                   <option >--Choose Stage--</option>
                                    {
                                        details.map((i) => {
                                            return(
                                                i.map((j,index) => {
                                                    
                                                    return(
                                                    <option value={j.Name} key={index}>{j.Name}</option>

                                                    );
                                                    
                                                }
                                                )
                                            );
                                        })
                                    }
                                        </select>
                                        </td>

                                        <td style={{paddingRight: "3px"}}>
                                        <select>
                                        <option >--Choose Class--</option>
                                        {
                                            details.map((i) => {
                                            return(
                                                i.map((j,index) => {
                                                    
                                                    return(
                                                        
                                                    <option value={j.Name_Class} key={index}>{j.Name_Class}</option>

                                                    );
                                                }
                                                )
                                            );
                                        })
                                    }
                                        </select>

                                        </td>

                                        <td style={{paddingRight: "3px"}}>
                                        <select>
                                        <option >--Choose Section--</option>
                                        {
                                            details.map((i) => {
                                            return(
                                                i.map((j,index) => {
                                                    return(
                                                    <option value={j.Name_Section} key={index}>{j.Name_Section}</option>

                                                    );
                                                }
                                                )
                                            );
                                        })
                                    }
                                        </select>
                                        </td>

                                        <td style={{paddingRight: "3px"}}>
                                        <select>
                                        <option >--Choose Day--</option>
                                        {
                                            Day.map((i,index)=>{
                                                return(
                                                    <option>{i}</option>
                                                );
                                            })
                                        }
                                        </select>

                                        </td>

                                        <td style={{paddingRight: "3px"}}>
                                        <select>
                                        <option >--Choose Subject--</option>
                                        {
                                            Subject.map((i,index)=>{
                                                return(
                                                    <option>{i}</option>
                                                );
                                            })
                                        }
                                        </select>

                                        </td>

                                        <td style={{paddingRight: "3px"}}>
                                        <select>
                                        <option >--Choose Time--</option>
                                        {
                                            Time.map((i,index)=>{
                                                return(
                                                    <option>{i}</option>
                                                );
                                            })
                                        }
                                        </select>
                                        </td>
                                    </tr>
                                   
                     
                                    
                    </tbody>
                </table>
                                    <button type="submit" className="btn btn-primary" style={{marginTop:"25px"}}>
                                        Submit Schedule
                                    </button>
            </div>
        </>
    );
}


