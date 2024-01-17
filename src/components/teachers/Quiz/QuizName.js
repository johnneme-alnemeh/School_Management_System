import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Teachnavbar from '../Teachnavbar';

export default function QuizName(){

  let navigate = useNavigate
    let clas = [];
    let sc = [];
    const [sub, setsub] = useState([]);
    const [info , setinfo] = useState({
        name:'',
        id:'',
        teacher_id:''
    });

    useEffect(() => {
        sections();
        getsections();

        }, [])

    function sections(){
        clas = window.localStorage.getItem('Quiz_State');
        sc = (JSON.parse(clas));
        console.log(sc);
    }

    function getsections(){
      if(sc !== null){
        sc.map((i) => {
          axios.get(`http://localhost:8000/api/subject_from_section/${i.section_id}`).then((res) => {
            console.log(res.data);
            setsub(res.data);
            console.log(sub);
        }
        );

        })
        
      }
    }

    function handle(e){
        e.persist();
        setinfo(previnfo => {
            return {
                ...previnfo,
                [e.target.name]: e.target.value,    
            }
        });
      }

    function submit(e){
        e.preventDefault();
        const details = [{
          Name: info.name,
          subject_id: info.id,
          Grade_id: sc.grade_id,
          Classroom_id: sc.classroom_id,
          section_id: sc.section_id,
          teacher_id: info.teacher_id
        }]

        axios.post('http://localhost:8000/api/quizzes', details).then(res => {
        if(res.data.status ===200){
          console.log(res.data);
          navigate('Quizzes-Table');
        }
      });



    }

return (
    <>
    <Teachnavbar />
    <div>
    <div className="form-container">
    
    <form className="quizzes-form" onSubmit={(e) => submit(e)}>
        <div className="Login-form-content">
          <h3 className="Login-form-title">Choose Class</h3>
          <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Quiz Name"
                  name= "name"
                  onChange={(e) => handle(e)}
                  value={info.name}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
              <label>Teacher</label>
          <select value={info.teacher_id} 
          onChange={(e) => handle(e)} 
          name="teacher_id"
          className="droplist"
          style={{color:"#003399"}}>
          <option value="">Select teacher</option>
          {

            sub.map((i) => {
              return(
                <option value={i.teacher_id} key={i.teacher_id}>
                    {i.teacher_id}
                </option>
              );
            })
          }
            
            </select>
          
          </div>

          <div className="form-group mt-3">
          <label>Subject</label>
          <select value={info.id} 
          onChange={(e) => handle(e)} 
          name="id"
          className="droplist"
          style={{color:"#003399"}}>
          <option value="">Select Subject</option>
          {

            sub.map((i) => {
              return(
                <option value={i.subject} key={i.id}>
                    {i.subject}
                </option>
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
