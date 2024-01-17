import React, { useState, useEffect }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useNavigate, useParams} from "react-router-dom";
import Mannavbar from './Mannavbar';
import axios from "axios";

export default function UpdateStudent(){

    const { id } = useParams();
    let navigate = useNavigate();

    const [formData, setFormData] = useState([{
        email: '',
        password: '',
        name: '',
        nationalitie_id:'',
        Date_Birth:'',
        Grade_id:'',
        Classroom_id:'',
        section_id:'',
        academic_year:'',
        parent_id:'',
        gender_id:''
      }]);
  
    useEffect(() => {
      loadUser();
   
    }, []);

     const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/api/edit/${id}`);
    console.log(result.data);
    setFormData(result.data);
    console.log(formData);
  };


  function handleChange(event) {
    event.persist();
    const {name, value, type, checked} = event.target
      setFormData(prev => {
          return {
              ...prev,
              [event.target.name]: event.target.value,
              [name]: type === "checkbox" ? checked : value
              
          }
      });
  }



    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8000/api/Students/${id}`, formData);
      navigate('/Edit-student');
    };

    // function handleSubmit(event){
    //   event.preventDefault();
      

    //   axios.put(`http://localhost:8000/api/Students/${id}`, user).then(res => {
    //     if(res.data.status ===200){
    //       console.log(res.data);
          
    //     }
        
    //   });
      
    //   axios.put(`http://localhost:8000/api/Students/${id}`,user).catch((error) => {
    //         console.log(error);
    //     }
    //     );
    //     navigate('/Edit-student');
    // }
    


    return(
      <>
      <Mannavbar />
      <div>
      <div className="form-container-2">
      <div>
          <img src='./manager-form.png' className='addstu-image'/>
      </div>
      <form className="Editstu-form" onSubmit={handleSubmit} >
          <div className="Edit-form-content">
            <h3 className="Edit-form-title">EDIT A STUDENT</h3>
      {
        formData.map((i) => {
          return(
            <>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Email"
                name= "email"
                onChange={handleChange}
                value={i.email}
                style={{color:"#003399"}}
                />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter Password"
                name= "password"
                onChange={handleChange}
                value={i.password}
                style={{color:"#003399"}}
              />
            </div>

            <div className="form-group mt-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter First And Last Name"
                name= "name"
                onChange={handleChange}
                value={i.name}
                style={{color:"#003399"}}
              />
            </div>

            <div className="form-group mt-3">
              <label>Date Of Birth</label>
              <input
                type="date"
                className="form-control mt-1"
                name= "Date_Birth"
                onChange={handleChange}
                value={i.Date_Birth}
                style={{color:"#003399"}}
              />
            </div>

            <div className="form-group mt-3">
              <label>Grade</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter Grade"
                name= "Grade_id"
                onChange={handleChange}
                value={i.Grade_id}
                style={{color:"#003399"}}
              />
            </div>
          
            <div className="form-group mt-3">
              <label>Classroom</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter Classroom"
                name= "Classroom_id"
                onChange={handleChange}
                value={i.Classroom_id}
                style={{color:"#003399"}}
              />
            </div>

            <div className="form-group mt-3">
              <label>Section</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter Section"
                name= "section_id"
                onChange={handleChange}
                value={i.section_id}
                style={{color:"#003399"}}
              />
            </div>


            <div className="form-group mt-3">
              <label>Academic Year</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter Academic Year"
                name= "academic_year"
                onChange={handleChange}
                value={i.academic_year}
                style={{color:"#003399"}}
              />
            </div>

            <div className="form-group mt-3">
              <label>Parent ID</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter Parent ID"
                name= "parent_id"
                onChange={handleChange}
                value={i.parent_id}
                style={{color:"#003399"}}
              />
            </div>

            <div className="form-group mt-3">

            <legend style={{color:"#003399"}}>Student Gender</legend>
              
              <input 
                  type="radio"
                  id="1"
                  name="gender_id"
                  value="1"
                  checked={i.gender_id === "1"}
                  onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
              <br />
              
              <input 
                  type="radio"
                  id="2"
                  name="gender_id"
                  value="2"
                  checked={i.gender_id === "2"}
                  onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
              <br />
            
            </div>

            <div className="form-group mt-3">
              <label>Nationality</label>
              <br />
            <select 
              id="nationalitie_id"
              value={i.nationalitie_id}
              onChange={handleChange}
              name="nationalitie_id" 
              style={{color:"#003399"}}
              >

              <option style={{color:"#003399"}} value="">-- Choose Nationality --</option>
              <option style={{color:"#003399"}} value="1">Syria</option>
              <option style={{color:"#003399"}} value="2">Lebanon</option>
              <option style={{color:"#003399"}} value="3">Jordan</option>
              <option style={{color:"#003399"}} value="4">Iraq</option>
              <option style={{color:"#003399"}} value="5">Egypt</option>
              <option style={{color:"#003399"}} value="6">Tunis</option>
              <option style={{color:"#003399"}} value="7">United Arab Emarates</option>
              <option style={{color:"#003399"}} value="8">Kingdom Saudi Arabia</option>


          </select>
          </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                UPDATE STUDENT
              </button>
            </div>
            </>
          );
        })
      }
        
            

          </div>
        </form>
      </div>
      </div>
      </>
      )
}