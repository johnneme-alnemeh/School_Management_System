import React, { useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import swal from "sweetalert";
import axios from "axios";

export default function Login(){


  let user = [];
  let users = [];
  let t = [];
  let to = [];
  let navigate = useNavigate();
  const [formData, setFormData] = useState(
    {
      email: "",
      password: ""
    }
  );

  function handleChange(event){
    event.persist();
    const {name, value} = event.target
      setFormData(prevFormData => {
        return{
          ...prevFormData,
          [event.target.name]: event.target.value
        }

      });
  }

  function handleSubmit(event){
      event.preventDefault();
      const data = {
        email : formData.email ,
        password : formData.password
      }

      axios.post(`http://localhost:8000/api/auth/login`, data).then(res => {

          window.localStorage.setItem('auth_token', JSON.stringify(res.data));
          user = window.localStorage.getItem('auth_token');
          users = (JSON.parse(user));
          console.log(users);

          if(users.user.type == "Student"){
            navigate("/Studenthp");

          }
          else if(users.user.type == "Teacher"){
            navigate("/Teacherhp");

          }
          else if(users.user.type == "Manager"){
            navigate("/Managerhp");

          }
    
      });
      
      // if(formData.email == "humam@gmail.com" && formData.password == "111222")
      // navigate('/Teacherhp');
      

  }
  return(
    <div>
    <Navbar />
    <div className="form-container">
    <div>
        <img src='./Login.png' className='Login-image'/>
    </div>
      <form className="Login-form" onSubmit={handleSubmit}>
        <div className="Login-form-content">
          <h3 className="Login-form-title">LOGIN</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter email"
              name= "email"
              onChange={handleChange}
              value={formData.email}
              style={{color:"#003399"}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name= "password"
              onChange={handleChange}
              value={formData.password}
              style={{color:"#003399"}}
            />
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
  );
}











      