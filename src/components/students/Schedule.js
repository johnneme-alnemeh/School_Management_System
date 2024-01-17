import React, {useEffect,useState} from "react";
import axios from 'axios'
import Stunavbar from './Stunavbar';


// const data = [
//     { subject: "Math", time: "8:00 -> 10:00", days: "Moday - Tuesday" },
//     { subject: "Science", time: "10:00 -> 12:00", days: "Moday - Tuesday" },
//     { subject: "Physics", time: "8:00 -> 10:00", days: "Sunday - wednsday" },
//     { subject: "Arabic", time: "8:00 -> 10:00", days: "tuesday - thursday" },
//     { subject: "English", time: "8:00 -> 10:00", days: "Moday - Tuesday" },
//     { subject: "Art", time: "8:00 -> 10:00", days: "Moday - Tuesday" },
//     { subject: "Sports", time: "8:00 -> 10:00", days: "Moday - Tuesday" }
//   ]
export default function Schedule(){

    let p = [];
    let pro = [];
    const [sub, setsub] = useState([]);

    useEffect(() => {
        p = window.localStorage.getItem('profile');
          pro = (JSON.parse(p));
          console.log(pro);

          if(pro !== null){
            pro.map((i) => {
              axios.get(`http://localhost:8000/api/subject_from_section/${i.section_id}`).then((res) => {
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
                <h1 style={{color: "#003399"}} >SCHEDULE</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Time</th>
                            <th>Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sub.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.subject}</td>
                                        <td>{value.time}</td>
                                        <td>{value.day}</td>
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
