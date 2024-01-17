import React,  { useState, useEffect } from 'react'
import { useNavigate, useParams} from "react-router-dom"
import Teachnavbar from '../Teachnavbar'
import axios from "axios"


function AttendanceTable() {

  let navigate = useNavigate();
  const [place, setplace] = useState([[],[]]);
  const [value, setValue] = useState({
      grade_id:"",
      section_id:""
    });
  const [students, setstudents] = useState([{
    id:"",
    name:"",
    Grade_id:"",
    Classroom_id:"",
    section_id:"",
  }]);
  const [attending, setattending] = useState([{
    attendance:"",
    date:""
  }]);

    useEffect(() => {
    allclasses();
    }, [])

    const allclasses = () => {
        axios.get(`http://localhost:8000/api/attendence`).then((response) => {
        console.log(response.data);
        setplace(response.data);
        
        }
      );    
    };


    function handleChange(event) {
      event.persist();
        setValue(prevValue => {
            return {
                ...prevValue,
                [event.target.name]: event.target.value,
                
                
            }
        });
    }

    function whenChange(event) {
      event.persist();
      const {name, value, type, checked} = event.target
        setattending(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
                [name]: type === "checkbox" ? checked : value
                
            }
        });
    }

    function whenSubmit() {
      // const info = [{
      //   student_id: students.id,
      //   grade_id: students.Grade_id,
      //   classroom_id: students.Classroom_id,
      //   section_id: students.section_id,
      //   date: attending.date,
      //   attendence: attending.attendance
      // }]
      // console.log(info);
      navigate('/Teacherhp');
    }
      
       function handleSubmit(e){
        e.preventDefault();
        axios.get(`http://localhost:8000/api/attendence/${value.section_id}`).then(res => {
          setstudents(res.data);  
      });  
      console.log(students);
        axios.get(`http://localhost:8000/api/attendence/${value.section_id}`).catch((error) => {
            console.log(error);
        }
        );
      }


  return (
    <>
    <Teachnavbar />
    <div>
    <div className="form-container-1">
    
      <form className="classes-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Login-form-content">
          <h3 className="Login-form-title">Choose Class</h3>
          <div className="form-group mt-3">
          <select value={value.grade_id} 
          onChange={handleChange} 
          name="grade_id"
          className="droplist">
          <option value="">Select Grade</option>
          {
            place.flat().map((i) => {
                return(
                    <option key={i.id} value={i.id}>{i.id}_ {i.Name}</option>
                );
            }

            )
          }
            </select>
          </div>
          <div className="form-group mt-3">
          <select value={value.section_id} 
          onChange={handleChange} 
          name="section_id"
          className="droplist">
          <option value="">Select Section</option>
          {

            place.flat().map((i) => {
                                          
                  return(
                    i.sections.map((n) => {
                      if(value.grade_id == n.Grade_id){                                                  
                        return(
                          <option value={n.id} key={n.id}>Class: {n.Class_id} Section: {n.Name_Section}</option>
                        );
                      }
                                                      
                    })  

                  );
                
              
            })
          }
            
            </select>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>

    <div className="App">
    <h1 style={{color: "#003399"}}>ATTENDANCE</h1>

     <table>
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Grade</th>
    <th>Class</th>
    <th>Section</th>
    <th>Date</th>
    <th>Attendance</th>
  </tr>
</thead>
<tbody>
{
  students.map((i) => {
    return(
      <tr>
          <td >{i.id}</td>
          <td>{i.name}</td>
          <td>{i.Grade_id}</td>
          <td>{i.Classroom_id}</td>
          <td>{i.section_id}</td>
          <td>
            <input type="date" name='date' value={attending.date} onChange={whenChange} className="form-control mt-1" style={{color:"#003399"}}/>
          </td>
          <td>
            <input type="radio" id="presence" name="attendance" value="presence" checked={attending.attendance === "presence"} onChange={whenChange}/>
            <label>attending </label> &nbsp;
            <input type="radio" id="absent" name="attendance" value="absent" checked={attending.attendance === "absent"} onChange={whenChange}/>
            <label>absent</label>&nbsp;
          </td>
        </tr>
    );
  })
}
 
      
 
  
      <button className="btn btn-primary" style={{marginTop:"25px"}} onClick={() => whenSubmit()}>
        Submit 
      </button>
    </tbody>
</table>


    </div>
    </>
  )
}

export default AttendanceTable
