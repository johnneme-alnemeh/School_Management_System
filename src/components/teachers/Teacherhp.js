import React from "react";
import MarkForm from "./setmark/MarkForm";
import Teachnavbar from "./Teachnavbar";

export default function Teacherhp(){
    return(
        <>
            <Teachnavbar />
            <div >
                <img src="/Student guy studying on internet.jpg" width="50%" height="auto" alt="" className="mhp"/>
                <p style={{paddingTop:140}} className="mht"><span style={{color: "#28FEB3"}}> Inlighten</span> your students with knowkedge.</p>
                <p className="mht">Teach them how to be<span style={{color: "#28FEB3"}}> great </span>. Be their <span style={{color: "#28FEB3"}}>role model</span>.</p>
            </div>
            <div >
                <img src="/20944387.jpg" width="50%" height="auto" alt="" className="mhp2"/>
                <p style={{paddingTop:140}} className="mht">Make them<span style={{color: "#28FEB3"}}> challenge </span> their selves with quizzes.</p>
                <p className="mht">Don't forget to<span style={{color: "#28FEB3"}}> evaluate </span>their marks, and check their <span style={{color: "#28FEB3"}}>attendance</span>.</p>
            </div>
        </>
    );
};

//