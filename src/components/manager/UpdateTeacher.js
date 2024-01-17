import React, { useState, useEffect }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useNavigate, useParams } from "react-router-dom";
import EditStudent from './EditTeacher';
import Mannavbar from './Mannavbar';
import swal from "sweetalert";
import axios from "axios";

export default function UpdateTeacher(){

  let navigate = useNavigate();

const { id } = useParams();

  const [formData, setFormData] = useState(
    {
      Email: "",
      Password: "",
      Name: "",
      Specialization_id:"",
      Gender_id:"",
      Joining_Date:"",
      Address:""
    }
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

  useEffect(() => {
    loadUser();
  }, []);


  function handleSubmit(event){
    event.preventDefault();
    const data = {
      Email : formData.Email ,
      Password : formData.Password,
      Name : formData.Name,
      Specialization_id : formData.Specialization_id,
      Gender_id : formData.Gender_id,
      Joining_Date : formData.Joining_Date,
      Address : formData.Address,
    }

    event.preventDefault();
    axios.put(`http://localhost:8000/api/Teachers/${id}`, data);
    navigate("/EditTeacher");
  }

  const loadUser = () => {
    const result = axios.get(`http://localhost:8000/api/Teachers/${id}`);
    setFormData(result.data);
  };


    return(
        <>
        <Mannavbar />
        <div>
        <div className="form-container">
        <div>
            <img src='./manager-form-4.webp' className='update-image'/>
        </div>
          <form className="Edit-form" onSubmit={handleSubmit} style={{marginTop: "100px"}}>
            <div className="Edit-form-content">
              <h3 className="Edit-form-title">ADD A TEACHER</h3>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Email"
                  name= "Email"
                  onChange={handleChange}
                  value={formData.Email}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Password"
                  name= "Password"
                  onChange={handleChange}
                  value={formData.Password}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter First And Last Name"
                  name= "Name"
                  onChange={handleChange}
                  value={formData.Name}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Address"
                  name= "Address"
                  onChange={handleChange}
                  value={formData.Address}
                  style={{color:"#003399"}}
                />
              </div>

             

              <div className="form-group mt-3">
                <label>Specialization</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Specialization"
                  name= "Specialization_id"
                  onChange={handleChange}
                  value={formData.Specialization_id}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label>Joining Date</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Day/Month/Year"
                  name= "Joining_Date"
                  onChange={handleChange}
                  value={formData.Joining_Date}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">

              <legend style={{color:"#003399"}}>Teacher Gender</legend>
                
                <input 
                    type="radio"
                    id="male"
                    name="Gender_id"
                    value="male"
                    checked={formData.Gender_id === "male"}
                    onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
                <br />
                
                <input 
                    type="radio"
                    id="female"
                    name="Gender_id"
                    value="female"
                    checked={formData.Gender_id === "female"}
                    onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
                <br />
              
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-success">
                  Update TEACHER
                </button>
              </div>

            </div>
          </form>
        </div>
        </div>
        </>
        )
}