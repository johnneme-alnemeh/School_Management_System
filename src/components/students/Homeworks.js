import React from "react";
import Stunavbar from './Stunavbar';
import { BiUpload } from "react-icons/bi";


const data = [
    { homework: "Math", deadline:"18/1/2023", upload: ""},
    { homework: "Science", deadline:"12/1/2023", upload: ""},
    { homework: "Physics", deadline:"10/1/2023", upload: ""},
    { homework: "Arabic", deadline:"13/1/2023", upload: ""},
    { homework: "English", deadline:"25/1/2023", upload: ""},
    { homework: "Art", deadline:"8/1/2023", upload: ""},
    { homework: "Sports", deadline:"16/1/2023", upload: ""}
  ]
export default function Homeworks(){
    return(
        <>
            <Stunavbar />
            <div className="App">
                <h1 style={{color: "#003399"}}>YOUR HOMEWORKS</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Homeworks</th>
                            <th>Deadline</th>
                            <th>Upload</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.homework}</td>
                                        <td>{value.deadline}</td>
                                        <td>{value.upload}
                                            <BiUpload className="edit-delete-icon"/>
                                        </td>                                        
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
