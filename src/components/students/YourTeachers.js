import React from "react";
import Stunavbar from './Stunavbar';


const data = [
    { subject: "Math", teacher: "Robert"},
    { subject: "Science", teacher: "Robert"},
    { subject: "Physics", teacher: "Robert"},
    { subject: "Arabic", teacher: "Robert"},
    { subject: "English", teacher: "Robert"},
    { subject: "Art", teacher: "Robert"},
    { subject: "Sports", teacher: "Robert"}
  ]
export default function YourTeachers(){
    return(
        <>
            <Stunavbar />
            <div className="App" style={{marginTop: 100}}>
                <h1 style={{color: "#003399"}}>YOUR TEACHERS</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Teacher</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.teacher}</td>
                                        <td>{value.subject}</td>                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}
