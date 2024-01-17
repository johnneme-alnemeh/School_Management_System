import React from 'react';
import { FcManager} from "react-icons/fc";
import { slide   as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import {FiUserCheck, FiEdit3} from "react-icons/fi";
import {TfiWrite} from "react-icons/tfi";
import {SlGraduation} from "react-icons/sl";
import {IoHomeOutline} from "react-icons/io5";
export default function Teachnavbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position: "fixed", top: 0 , width: "100%", zIndex: 1}} >
                <Menu className='navmenu' noOverlay >

                    <h5>
                        <FcManager className='nav-icon'/>
                        Mr. Houmam
                    </h5>

                    <Link className="menu-Link" to='/Teacherhp'>
                        <IoHomeOutline className='nav-icon'/>
                        Home
                    </Link>

                    <Link className="menu-Link" to="/Attendance">
                        <FiUserCheck className='nav-icon'/>
                        Attendance
                    </Link>


                    <Link className="menu-Link" to="/Set-Mark">
                        <FiEdit3 className='nav-icon'/>
                        Set A Mark
                    </Link>

                    <Link className="menu-Link" to="/Create-Quiz">
                        <TfiWrite className='nav-icon'/>
                        Create Quiz
                    </Link>


                    
                </Menu>

                <img src="./school-logo.png" width="40" height="40" alt="" className='nvimg'/>
                <h2 className="nav-title">MODERN SCHOOL</h2>
        
                <Link className="Log-link" to="/Logout">
                    <BiLogOut className='nav2-icon'/>
                    Logout
                </Link>
            </nav>
        </>
    );
}

