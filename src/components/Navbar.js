import React from "react";
import { NavLink } from 'react-router-dom'
import { BiLogIn } from "react-icons/bi";
function Navbar(props){
  // const div_style = {
  //   text-align:right
  // };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position: "sticky", top: 0 , width: "100%"}}>
      <img src="./school-logo.png" width="50" height="40" alt="" style={{paddingLeft: "8px"}}/>
      <h2 className="nav-title">MODERN SCHOOL</h2>
      <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{alignSelf: 'flex-end', paddingLeft: "900px", paddingBottom: "8px"}}>
          
          <NavLink to={`${props.dest}`} className="Log-link" style={{textAlign: 'right'}}>{props.link}</NavLink>
      </div>
    </nav>
    
    </>
  );
};

export default Navbar;


//style={div_style}