import React, {useEffect, useState} from "react"
import axios from 'axios'
import Mannavbar from './Mannavbar';

export default function Managerhp(){

    let t = [];
    let to = [];
    useEffect(() => {
        t = window.localStorage.getItem('auth_token');
              to = (JSON.parse(t));
          console.log(to.access_token);
          axios.get(`http://localhost:8000/api/auth/user-profile`,{ headers: {"Authorization" : `Bearer ${to.access_token}`} }
          ).then(res => {
            console.log(res.data);
          })
      }, []);
    return(
        <>
            <Mannavbar />
            <div >
                <img src="/18775.jpg" width="55%" height="auto" alt="" className="mhp"/>
                <p style={{paddingTop:140}} className="mht"><span style={{color: "#28FEB3"}}> Manage</span> your school easily with us.</p>
                <p className="mht">Welcome to the manager's homepage, from this place you can manage so <span style={{color: "#28FEB3"}}> many things</span>.</p>
            </div>
            
        </>
    );
};