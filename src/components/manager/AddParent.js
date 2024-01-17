import React, { useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useNavigate } from "react-router-dom";
import Mannavbar from './Mannavbar';
import swal from "sweetalert";
import axios from "axios";

export default function AddParent(){

  let navigate = useNavigate();
  const addstuURL = 'http://localhost:8000/api/Students';

  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      Name_Father: "",
      National_ID_Father:"",
      Passport_ID_Father:"",
      Phone_Father:"",
      Job_Father:"",
      Religion_Father_id:"",
      Address_Father:"",
      Name_Mother:"",
      National_ID_Mother:"",
      Passport_ID_Mother:"",
      Phone_Mother:"",
      Job_Mother:"",
      Address_Mother:""
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
        email : formData.email ,
        password : formData.password,
        Name_Father : formData.Name_Father,
        National_ID_Father : formData.National_ID_Father,
        Passport_ID_Father : formData.Passport_ID_Father,
        Phone_Father : formData.Phone_Father,
        Job_Father: formData.Job_Father,
        Religion_Father_id : formData.Religion_Father_id,
        Address_Father : formData.Address_Father,
        Name_Mother : formData.Name_Mother,
        National_ID_Mother : formData.National_ID_Mother,
        Passport_ID_Mother : formData.Passport_ID_Mother,
        Phone_Mother : formData.Phone_Mother,
        Job_Mother : formData.Job_Mother,
        Address_Mother : formData.Address_Mother
      }

      axios.post('http://localhost:8000/api/parents', info).then(res => {
        if(res.data.status ===200){
          console.log(res.data);
          
        }
      });
      
      axios.post('http://localhost:8000/api/parents',info).catch((error) => {
            console.log(error);
        }
        );
        navigate('/Edit-parent');
    }
    

    return(
        <>
        <Mannavbar />
        <div>
        <div className="form-container-2">
        <div>
            <img src='./manager-form.png' className='addstu-image'/>
        </div>
          <form className="AddParent-form" onSubmit={handleSubmit} >
            <div className="Edit-form-content">
              <h3 className="Edit-form-title">ADD PARENTS</h3>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Email"
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
                  placeholder="Enter Password"
                  name= "password"
                  onChange={handleChange}
                  value={formData.password}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
              <legend style={{color:"#003399"}}>Father Info</legend>
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Father Name"
                  name= "name"
                  onChange={handleChange}
                  value={formData.Name_Father}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label>National ID</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter National ID"
                  name= "National_ID_Father"
                  onChange={handleChange}
                  value={formData.National_ID_Father}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label>Passport ID</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Passport ID"
                  name= "Passport_ID_Father"
                  onChange={handleChange}
                  value={formData.Passport_ID_Father}
                  style={{color:"#003399"}}
                />
              </div>
            
              <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Phone Number"
                  name= "Phone_Father"
                  onChange={handleChange}
                  value={formData.Phone_Father}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label>Job</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Job Title"
                  name= "Job_Father"
                  onChange={handleChange}
                  value={formData.Job_Father}
                  style={{color:"#003399"}}
                />
              </div>


              <div className="form-group mt-3">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Address"
                  name= "Address_Father"
                  onChange={handleChange}
                  value={formData.Address_Father}
                  style={{color:"#003399"}}
                />
              </div>
              </div>

              <div className="form-group mt-3">
              <legend style={{color:"#003399"}}>Mother Info</legend>
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Name"
                  name= "Name_Mother"
                  onChange={handleChange}
                  value={formData.Name_Mother}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label>National ID</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter National ID"
                  name= "National_ID_Mother"
                  onChange={handleChange}
                  value={formData.National_ID_Mother}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label> Passport ID</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Passport ID"
                  name= "Passport_ID_Mother"
                  onChange={handleChange}
                  value={formData.Passport_ID_Mother}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label> Phone Number</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Phone Number"
                  name= "Phone_Mother"
                  onChange={handleChange}
                  value={formData.Phone_Mother}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label> Job</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Job Title"
                  name= "Job_Mother"
                  onChange={handleChange}
                  value={formData.Job_Mother}
                  style={{color:"#003399"}}
                />
              </div>

              <div className="form-group mt-3">
                <label> Address</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Address"
                  name= "Address_Mother"
                  onChange={handleChange}
                  value={formData.Address_Mother}
                  style={{color:"#003399"}}
                />
              </div>
              </div>
              

              <div className="form-group mt-3">
                <label>Religion</label>
                <br />
              <select 
                id="Religion_Father_id"
                value={formData.Religion_Father_id}
                onChange={handleChange}
                name="Religion_Father_id" 
                style={{color:"#003399"}}
                >

                <option style={{color:"#003399"}} value="">-- Choose Religion --</option>
                <option style={{color:"#003399"}} value="1">Christian</option>
                <option style={{color:"#003399"}} value="2">Muslim</option>
                <option style={{color:"#003399"}} value="3">Juwish</option>
              
            </select>
            </div>


              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  ADD STUDENT
                </button>
              </div>

            </div>
          </form>
        </div>
        </div>
        </>
        )
}

