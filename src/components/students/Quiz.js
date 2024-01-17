import React, { useState, useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useNavigate, useParams} from "react-router-dom";
import Stunavbar from './Stunavbar';
import axios from "axios";

export default function AddStudent(){

  let navigate = useNavigate();
  const { id, sectionid } = useParams();
  let test = [];

const [quizzes, setquizzes] = useState([]);
// const [test, settest] = useState([]);
useEffect(() => {
        
    getallquestions();
},[]);


const getallquestions = () => {
    
        axios.get(`http://localhost:8000/api/quizz_from_subject/${id}/${sectionid}`).then((response) => {
            setquizzes(response.data);
            console.log(quizzes);
    }
    );
    
    axios.get(`http://localhost:8000/api/questions/${quizzes.id}`).then((response) => {
            test = response.data;
            console.log(test);
    }
    );
         
}
  const [formData, setFormData] = useState([
    {
      answer1: "",
      answer2: "",
      right_answer: "" 
    }]
  );

  function handleChange(event) {
      event.persist();
      const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
                [name]: type === "checkbox" ? checked : value
                
            }
        });
    }

    function handleSubmit(event){
      event.preventDefault();
    //   const info = {
    //     email : formData.email ,
    //     password : formData.password,
    //     name : formData.name,
    //     nationalitie_id : formData.nationalitie_id,
    //     Date_Birth : formData.Date_Birth,
    //     Classroom_id : formData.Classroom_id,
    //     Grade_id: formData.Grade_id,
    //     section_id : formData.section_id,
    //     academic_year : formData.academic_year,
    //     parent_id : formData.parent_id,
    //     gender_id : formData.gender_id
    //   }

    //   axios.post('http://localhost:8000/api/Students', info).then(res => {
    //     if(res.data.status ===200){
    //       console.log(res.data);
          
    //     }
    //   });
      
    //   axios.post('http://localhost:8000/api/Students',info).catch((error) => {
    //         console.log(error);
    //     }
    //     );
        navigate('/All-Quizzes');
    }
    

    return(
        <>
        <Stunavbar />
        <div>
        <div className="form-container-2">
        <div>
            <img src='/manager-form.png' className='addstu-image'/>
        </div>
          <form className="quiz-form" onSubmit={handleSubmit} >
            <div className="Edit-form-content">
              <h3 className="Edit-form-title">Test Your Self</h3>
            
                <div className="form-group mt-3">
                <label>
                which one is the exclamation mark?
                    </label>
               </div>
                
                
              <div className="form-group mt-3">

                <input 
                    type="radio"
                    id=";"
                    name="answer1"
                    value=";"
                    checked={formData.answer1 === ";"}
                    onChange={handleChange}
                />
                <label>;</label>
                <br />
                
                <input 
                    type="radio"
                    id="|"
                    name="answer2"
                    value="|"
                    checked={formData.answer2 === "|"}
                    onChange={handleChange}
                />
                <label>|</label>
                <br />
              
                <input 
                    type="radio"
                    id="!"
                    name="right_answer"
                    value="!"
                    checked={formData.right_answer === "!"}
                    onChange={handleChange}
                />
                <label>|</label>
                <br />
              </div>

             

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit Your Answers
                </button>
              </div>

            </div>
          </form>
        </div>
        </div>
        </>
        )
}