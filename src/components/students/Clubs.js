import React from "react"
import {FcLock} from "react-icons/fc";

export default function CLubs(props) {
    return (
        <div className="card">
            <img src={`/${props.img}`} className="card--image" />
            <div className="card--stats">
                <span>{props.name}</span>
                </div>
                <div>
                <span className="gray">Ages from: {props.age}</span>
                 
                </div>
                <div>
                <span className="gray">{props.status} <FcLock /></span>
                </div>
           
        </div>
    )
}