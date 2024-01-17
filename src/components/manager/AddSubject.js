import React, { useState, useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useNavigate } from "react-router-dom";
import Mannavbar from './Mannavbar';
import axios from "axios";

export default function AddStudent(){

  let navigate = useNavigate();
  const [details , getdetails] = useState([]);
  const [formData, setFormData] = useState(
    {
      subject:"",
      day:"",
      time:"",
      Grade_id:"",
      Class_id:"",
      Teacher_id:"",
      Section_id:""
    }
  );


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

function handleChange(e){
  e.persist();
  setFormData(prevFormData => {
      return {
          ...prevFormData,
          [e.target.name]: e.target.value
          
      }
  });
}

    function handleSubmit(event){
      event.preventDefault();
      const info = {
        subject : formData.subject ,
        day : formData.day,
        time : formData.time,
        Grade_id : formData.Grade_id,
        Class_id : formData.Class_id,
        Teacher_id : formData.Teacher_id,
        Section_id: formData.Section_id,
        
      }

      axios.post('http://localhost:8000/api/subjects', info).then(res => {
        if(res.data.status ===200){
          console.log(res.data);
          
        }
      });
      
        navigate('/All-subjects');
    }
    

    return(
        <>
        <Mannavbar />
        <div>
        <div className="form-container-2">
        <div>
            <img src='./manager-form.png' className='addstu-image'/>
        </div>
          <form className="addsubject-form" onSubmit={handleSubmit} >
            <div className="Edit-form-content">
              <h3 className="Edit-form-title">ADD A SUBJECT</h3>
              <div className="form-group mt-3">
                <label>Subject</label>
                <br></br>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Subject Name"
                  name= "subject"
                  onChange={handleChange}
                  value={formData.subject}
                  style={{color:"#003399"}}
                  />
              </div>

              <div className="form-group mt-3">
                <label>Learning Stage</label>
                <br></br>
                <select value={formData.Grade_id}
                onChange={handleChange} 
                name="Grade_id"
                className="droplist"
                >
                                   <option>--Choose Stage--</option>
                                   {
                                            details.slice(0,1).flat().map((i, index) => {
                                            return(
                                                    
                                                        
                                                    <option value={i.id} key={index}>{i.Name}</option>

                                            );
                                        })
                                    }
                                        </select>
              </div>

              <div className="form-group mt-3">
                <label>Classroom</label>
                <br></br>
                <select value={formData.Class_id}
                onChange={handleChange} 
                name="Class_id"
                className="droplist"
                >
                                        <option >--Choose Class--</option>
                                        {
                                            details.slice(2,3).flat().map((i, index) => {
                                            return(
                                                    
                                                        
                                                    <option value={i.id} key={index}>{i.Name_Class}</option>

                                            );
                                        })
                                    }
                                        </select>

              </div>

              <div className="form-group mt-3">
                <label>Section</label>
                <br></br>
                <select value={formData.Section_id}
                onChange={handleChange} 
                name="Section_id"
                className="droplist"
                >
                                        <option >--Choose Section--</option>
                                        {
                                            details.slice(3,4).flat().map((i, index) => {
                                            return(
                                                    
                                                        
                                                    <option value={i.id} key={index}>{i.Name_Section}</option>

                                            );
                                        })
                                    }
                                        </select>
              </div>
              <div className="form-group mt-3">
                <label>Teacher</label>
                <br></br>
                <select value={formData.Teacher_id}
                onChange={handleChange} 
                name="Teacher_id"
                className="droplist"
                >
                                        <option >--Choose Section--</option>
                                        {
                                            details.slice(1,2).flat().map((i, index) => {
                                            return(
                                                    
                                                        
                                                    <option value={i.id} key={index}>{i.Name}</option>

                                            );
                                        })
                                    }
                                        </select>
              </div>

              <div className="form-group mt-3">
                <label>Day</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Day"
                  name= "day"
                  onChange={handleChange}
                  value={formData.day}
                  style={{color:"#003399"}}
                />
              </div>
            
              <div className="form-group mt-3">
                <label>Time</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Time"
                  name= "time"
                  onChange={handleChange}
                  value={formData.time}
                  style={{color:"#003399"}}
                />
              </div>

              

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  ADD SUBJECT
                </button>
              </div>

            </div>
          </form>
        </div>
        </div>
        </>
        )
}