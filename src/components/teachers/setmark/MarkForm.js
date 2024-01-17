import React from 'react'
import Axios from 'axios'
import './setmark.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Teachnavbar from '../Teachnavbar';
import { useNavigate } from 'react-router-dom';
function MarkForm() {
  let navigate = useNavigate();
  const url="http://127.0.0.1:8000/api/add_marks"
  const [data,setData] = useState({
    name:"",
    student_id:"",
    activity:"",
    quiz:"",
    mid:"",
    final:""
  })
  function submit(e){
    e.prevenDefault();
    // Axios.post(url,{
    //   name:data.name,
    //   student_id:parseInt(data.student_id),
    //   activity:parseFloat(data.activity),
    //   quiz:parseFloat(data.quiz),
    //   mid:parseFloat(data.mid),
    //   final:parseFloat(data.final)
    // })
    // .then(res=>{
    //   console.log(res.data)
    // })
    navigate('/Teacherhp');
  }
  function handle(e){
    e.persist();
    const {name, value} = e.target
      setData(prevData => {
        return{
          ...prevData,
          [e.target.name]: e.target.value
        }

      });
  }
  return (
    <>
    <Teachnavbar />
    <div>
    <div className="form-container">
    <div>
        <img src='./transistor-a-plus.png' className='update-image'/>
    </div>
      <form className="marks-form" onSubmit={(e)=>submit(e)} style={{marginTop: "100px"}}>
        <div className="Edit-form-content">
          <h3 className="Edit-form-title">SET MARKS</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Subject Name"
              name= "name"
              onChange={(e)=>handle(e)}
              value={data.name}
              style={{color:"#003399"}}
            />
          </div>

          <div className="form-group mt-3">
            <label>Student ID</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Student id"
              name= "student_id"
              onChange={(e)=>handle(e)}
              value={data.student_id}
              style={{color:"#003399"}}
            />
          </div>

          <div className="form-group mt-3">
            <label>Activitys</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter Activitys Mark"
              name= "activity"
              onChange={(e)=>handle(e)}
              value={data.activity}
              style={{color:"#003399"}}
            />
          </div>

          <div className="form-group mt-3">
            <label>Quiz</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter Quiz Mark"
              name= "quiz"
              onChange={(e)=>handle(e)}
              value={data.quiz}
              style={{color:"#003399"}}
            />
          </div>

          <div className="form-group mt-3">
            <label>Mid-term</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter Mid-term Mark"
              name= "mid"
              onChange={(e)=>handle(e)}
              value={data.mid}
              style={{color:"#003399"}}
            />
          </div>

          <div className="form-group mt-3">
            <label>Final</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter Final Mark"
              name= "final"
              onChange={(e)=>handle(e)}
              value={data.final}
              style={{color:"#003399"}}
            />
          </div>

         

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit Mark
            </button>
          </div>

        </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default MarkForm

