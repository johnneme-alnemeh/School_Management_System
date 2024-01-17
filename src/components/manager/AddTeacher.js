import React, { useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Mannavbar from './Mannavbar';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddTeacher(){
  let navigate = useNavigate();

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

  function handleSubmit(event){
    event.preventDefault();
    const info = {
      Email : formData.Email ,
      Password : formData.Password,
      Name : formData.Name,
      Specialization_id : formData.Specialization_id,
      Gender_id : formData.Gender_id,
      Joining_Date : formData.Joining_Date,
      Address : formData.Address,
    }

    axios.post('http://localhost:8000/api/Teachers', info).then(res => {
      if(res.data.status ===200){
        console.log(res.data);
      }
    });
    navigate('/Edit-teacher');
  }

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
                  placeholder="Enter email"
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
                  placeholder="Enter password"
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
                  placeholder="Enter Full Name"
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
                <label>Joining Date</label>
                <input
                  type="date"
                  className="form-control mt-1"
                  name= "Joining_Date"
                  onChange={handleChange}
                  value={formData.Joining_Date}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label>Specialization</label>
                <br />
              <select 
                id="Specialization_id"
                value={formData.Specialization_id}
                onChange={handleChange}
                name="Specialization_id" 
                style={{color:"#003399"}}
                >

                <option style={{color:"#003399"}} value="">-- Choose Specialization --</option>
                <option style={{color:"#003399"}} value="1">Arabic</option>
                <option style={{color:"#003399"}} value="2">Science</option>
                <option style={{color:"#003399"}} value="3">Physics</option>
                <option style={{color:"#003399"}} value="4">Chemestry</option>
                <option style={{color:"#003399"}} value="5">Math</option>
                <option style={{color:"#003399"}} value="6">English</option>
                <option style={{color:"#003399"}} value="7">French</option>
                <option style={{color:"#003399"}} value="8">Art</option>
                <option style={{color:"#003399"}} value="9">Sport</option>
                <option style={{color:"#003399"}} value="10">History</option>
                <option style={{color:"#003399"}} value="11">Geography</option>
                <option style={{color:"#003399"}} value="12">Nationality</option>

            </select>
            </div>

              <div className="form-group mt-3">

              <legend style={{color:"#003399"}}>Teacher Gender</legend>
                
                <input 
                    type="radio"
                    id="1"
                    name="Gender_id"
                    value="1"
                    checked={formData.Gender_id === "1"}
                    onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
                <br />
                
                <input 
                    type="radio"
                    id="2"
                    name="Gender_id"
                    value="2"
                    checked={formData.Gender_id === "2"}
                    onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
                <br />
              
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  ADD TEACHER
                </button>
              </div>

            </div>
          </form>
        </div>
        </div>
        </>
        )
}