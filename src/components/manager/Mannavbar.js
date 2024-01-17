import React, {useEffect, useState} from 'react';
import { FcManager, FcPortraitMode, FcBusinessman, FcCalendar, FcConferenceCall, FcHome} from "react-icons/fc";
import { slide   as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import {BiLogOut } from "react-icons/bi";

export default function Mannavbar(){

    let user = [];
    let users = [];
    const [username , setusername] = useState([{}]);
    useEffect(() => {
        user = window.localStorage.getItem('auth_token');
        users = (JSON.parse(user));
        setusername(users.user.name);
        console.log(username);
    }, [])
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position: "fixed", top: 0 , width: "100%", zIndex: 1}} >
                <Menu className='navmenu' noOverlay >


            <h5>
                <FcManager className='nav-icon'/>
                Welcome Mr.George    
            </h5>
        
                    
                    
                    <Link className="menu-Link" to='/Managerhp'>
                        <FcHome className='nav-icon'/>
                        Home
                    </Link>

                    <Link className="menu-Link" to="/Edit-teacher">
                        <FcBusinessman className='nav-icon'/>
                        Teachers
                    </Link>


                    <Link className="menu-Link" to="/Edit-student">
                        <FcPortraitMode className='nav-icon'/>
                        Students
                    </Link>

                    <Link className="menu-Link" to="/Edit-parent">
                        <FcConferenceCall className='nav-icon'/>
                        Parents
                    </Link>

                    <Link className="menu-Link" to="/All-subjects">
                        <FcCalendar className='nav-icon'/>
                        Students Schedule
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

