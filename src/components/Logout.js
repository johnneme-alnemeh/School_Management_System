import react from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams} from "react-router-dom"

export default function Logout(){
    
    let navigate = useNavigate();
    let t = [];
  let to = [];
    useEffect(() => {
        t = window.localStorage.getItem('auth_token');
          to = (JSON.parse(t));
            console.log(to.access_token);
        axios.post(`http://localhost:8000/api/auth/logout`, { headers: {"Authorization" : `Bearer ${to.access_token}`} }
        ).then(res => {
            console.log(res.data);
        })
        window.localStorage.removeItem('auth_token');
        navigate('/')
    }, [])
    
    
}