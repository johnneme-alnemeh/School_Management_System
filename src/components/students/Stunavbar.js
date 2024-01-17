import React, {useEffect,useState} from "react";
import axios from 'axios'
import { slide   as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { BiCalendar, BiLogOut } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import {SlGraduation} from "react-icons/sl";
import {IoHomeOutline} from "react-icons/io5";
import { VscPass, VscAccount } from "react-icons/vsc";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbPencil } from "react-icons/tb";
export default function Stunavbar(){

  let p = [];
  let pro = [];

  useEffect(() => {
      p = window.localStorage.getItem('profile');
        pro = (JSON.parse(p));
        console.log(pro);

    }, []);

return(
<>


<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position: "fixed", top: 0 , width: "100%", zIndex: 1}}>
    <Menu className='navmenu' noOverlay >

      <h5>
        <VscAccount className='nav-icon'/>
        john al-nemeh
      </h5>

      <Link className="menu-Link" to='/Studenthp'>
        <IoHomeOutline className='nav-icon'/>
        Home
      </Link>

      <Link className="menu-Link" to="/schedule">
        <BiCalendar className='nav-icon'/>
            Schedule
      </Link>

      <Link className="menu-Link" to="/Marks">
        <SlGraduation className='nav-icon'/>
            Marks
      </Link>

      <Link className="menu-Link" to="/All-Quizzes">
        <TbPencil className='nav-icon'/>
            All Quizzes
      </Link>


    </Menu>

    <img src="/school-logo.png" width="40" height="40" alt="" className='nvimg'/>
        <h2 className="nav-title">MODERN SCHOOL</h2>
        
        <Link className="Log-link" to="/Logout">
            <BiLogOut className='nav2-icon'/>
                Logout
        </Link>
    </nav>
</>
    );
}