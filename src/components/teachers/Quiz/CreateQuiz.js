import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useNavigate, useParams} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Teachnavbar from '../Teachnavbar';

export default function CreateQuiz() {

    let navigate = useNavigate();

    const [place, setplace] = useState([[],[]]);

    const [value, setvalue] = useState({
        grade_id:"",
        classroom_id:"",
        section_id:""
      });

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

  function handleSubmit(event){
    event.preventDefault();
    const sec = [{
      grade_id: value.grade_id,
      classroom_id: value.classroom_id,
      section_id: value.section_id
    }]
    window.localStorage.setItem('Quiz_State', JSON.stringify(sec));
    console.log(sec);
    sec.map((i) =>{

      navigate(`/Quiz-Name/${i.section_id}`);
    })
  }

  // function handleSubmit(event){
  //   event.preventDefault();
  // }

//   const add_subject = () => {
//     window.localStorage.setItem('Quiz_State', JSON.stringify(value));
//     navigate('/Quiz-Name');
// }

  function handleChange(e){
    e.persist();
    setvalue(prevValue => {
        return {
            ...prevValue,
            [e.target.name]: e.target.value,
            
            
        }
    });
  }

  return (
    <>
    <Teachnavbar />
    <div>
    <div className="form-container">
    
    <form className="classes-form" onSubmit={handleSubmit}>
        <div className="Login-form-content">
          <h3 className="Login-form-title">Choose Class</h3>
          <div className="form-group mt-3">
          <select value={value.grade_id} 
          onChange={handleChange} 
          name="grade_id"
          className="droplist"
          key={value.grade_id}>
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
          <select value={value.classroom_id} 
          onChange={handleChange} 
          name="classroom_id"
          className="droplist"
          key={value.classroom_id}>
          <option value="">Select Class</option>
          {

            place.map((i) => {
              return(
                i.map((j) => {
                                               
                  return(
                    j.sections.map((n) => {
                      if(value.grade_id == n.Grade_id){                                                  
                        return(
                          <option value={n.class_id} key={n.class_id}>Class: {n.Class_id}</option>
                        );
                      }
                                                      
                    })  

                  );
                })
              );
            })
          }
            
            </select>
            </div>

          <div className="form-group mt-3">
          <select value={value.section_id} 
          onChange={handleChange} 
          name="section_id"
          className="droplist"
          key={value.section_id}>
          <option value="">Select Section</option>
          {

            place.map((i) => {
              return(
                i.map((j) => {
                                               
                  return(
                    j.sections.map((n) => {
                      if(value.grade_id == n.Grade_id){                                                  
                        return(
                          <option value={n.id} key={n.id}>Section: {n.Name_Section}</option>
                        );
                      }
                                                      
                    })  

                  );
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
    </>
  )
}


