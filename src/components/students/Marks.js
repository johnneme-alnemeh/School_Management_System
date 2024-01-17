import React, {useEffect,useState} from "react";
import axios from 'axios'
import Stunavbar from './Stunavbar';


export default function Marks(){

    let p = [];
    let pro = [];
    const [sub, setsub] = useState([]);

    useEffect(() => {
        p = window.localStorage.getItem('profile');
          pro = (JSON.parse(p));
          console.log(pro);

          if(pro !== null){
            pro.map((i) => {
              axios.get(`http://localhost:8000/api/show_marks/${i.id}`).then((res) => {
                console.log(res.data);
                setsub(res.data);
                console.log(sub);
            }
            );
    
            })
            
          }
      }, []);

    return(
        <>
            <Stunavbar />
            <div className="App" style={{marginTop: 100}}>
                <h1 style={{color: "#003399"}}>MARKS</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Minimum Score</th>
                            <th>Maximum Score</th>
                            <th>Quiz</th>
                            <th>Mid-term</th>
                            <th>final-term</th>
                            <th>Activity</th>
                            <th>Your Score</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            sub.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.name}</td>
                                        <td> 60 </td>
                                        <td>100</td>
                                        <td>{value.quiz}</td>
                                        <td>{value.mid}</td>
                                        <td>{value.final}</td>
                                        <td>{value.activity}</td>
                                        <td>{value.quiz + value.activity + value.mid + value.final}</td>
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
