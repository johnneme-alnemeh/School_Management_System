import React, { useState, useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useNavigate, useParams} from "react-router-dom";
import Mannavbar from './Mannavbar';
import axios from "axios";

export default function UpStudent(){

  let stu = [];
  let stu_info = [];
  let navigate = useNavigate();
  const { id } = useParams();

  
  let [formData, setFormData] = useState([{}]);

  useEffect(() => {
    loadUser();
  }, []);


  const loadUser = async() => {
    let data = await axios.get(`http://localhost:8000/api/edit/${id}`)
      // window.localStorage.setItem('Edit_stu', JSON.stringify(data.data));
      // stu = window.localStorage.getItem('Edit_stu');
      // stu_info= (JSON.parse(stu));
      // console.log(stu_info);
      setFormData(data.data);
      console.log(formData);


};
  
const handleChange = (e) => {
  const newArray = formData.map((item) => {
    
      return { ...item, [e.target.name]: e.target.value, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value };
    
    
  });
  setFormData(newArray);
};
  // function handleChange(event) {
  //     setFormData({
          
  //             ...formData,
  //             [event.target.name]: event.target.value,
  //             [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
  //     }
  //     );
  // }

    function handleSubmit(event){
      event.preventDefault();
      const info = {
        email : formData.email ,
        password : formData.password,
        name : formData.name,
        nationalitie_id : formData.nationalitie_id,
        Date_Birth : formData.Date_Birth,
        Classroom_id : formData.Classroom_id,
        Grade_id: formData.Grade_id,
        section_id : formData.section_id,
        academic_year : formData.academic_year,
        parent_id : formData.parent_id,
        gender_id : formData.gender_id
      }

        axios.put(`http://localhost:8000/api/Students/${id}`, info);
        navigate('/Edit-student');
      };
     
    
    

    return(
        <>
        <Mannavbar />
        <div>
        
        <div className="form-container-2">
        <div>
            <img src='/manager-form.png' className='addstu-image'/>
        </div>
        {
                  formData.map((i) => {
                    return(
            <form className="Editstu-form" onSubmit={handleSubmit} >
            
                  <div className="Edit-form-content">
                <h3 className="Edit-form-title">Edit A STUDENT</h3>
                
                <div className="form-group mt-3">
                <label>Email</label>
               
                      <input
                  type="text"
                  className="form-control mt-1"
                  name='email'
                  placeholder="Enter Email"
                  onChange={(e) => handleChange(e)}
                  value={i.email}
                  style={{color:"#003399"}}
                  />
                    
                 
              </div>
              
                 
              
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  name='password'
                  placeholder="Enter Password"
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
                  name='name'
                  placeholder="Enter First And Last Name"
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
                  name='Date_birth'
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
                  name='Grade_id'
                  placeholder="Enter Grade"
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
                  name='Classroom_id'
                  placeholder="Enter Classroom"
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
                  name='section_id'
                  placeholder="Enter Section"
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
                  name='academic_year'
                  placeholder="Enter Academic Year"
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
                  name='parent_id'
                  placeholder="Enter Parent ID"
                  onChange={handleChange}
                  value={i.parent_id}
                  style={{color:"#003399"}}
                />
              </div>


              <div className="form-group mt-3">
                <label>Nationality</label>
                <br />
              <select 
                id="nationalitie_id"
                name='nationalitie_id'
                value={i.nationalitie_id}
                onChange={handleChange}
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
                <button type="submit" className="btn btn-success">
                  UPDATE STUDENT
                </button>
              </div>

            </div>
   
          </form>
          );
            })
                }
      
        </div>
        </div>
        </>
        )
}