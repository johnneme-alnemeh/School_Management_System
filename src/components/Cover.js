import react from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
function Cover(){
return(
    <>
    <Navbar 
        dest = "/Login"
        link = "Login"
    />
    <div className='bg-image'>
        <img src='./sbg_2.jpg' alt='school photo' className='sc-img'/>
        <div class="centered1">
            <h2 className='img-head'>Knowledge is power</h2>
        </div>
        <div class="centered2">
            <p className='img-p'>We aim to prepare our students to build a brighter future an life experiences and encourage them to follow their dreams.</p>
            <p className='img-p'>Also we teach them different kind of objects like math, science, art, sports, geography…</p>
        </div>
    </div>
    <h3 className='about'>About Us</h3>
    <div className='container'>
    <div >

        <h4> <img src='./Line 2.png'/> LOCATION</h4>
        <p>we are located in Damascus, Syria.</p>
    </div>
    <div className='about-div'>
        <h4> <img src='./Line 2.png'/> GRADES</h4>
        <p>We cover three educational stages: Elementary, Middle and Senior.</p>
    </div>
    <div className='about-div'>
        <h4> <img src='./Line 2.png'/> INFORMATION</h4>
        <p>We are governmental institution, aims to create a comfortable environment for our students to gain the greatest amount from the lessons.</p>
    </div>
    </div>
    <Footer />
    </>
);

};
export default Cover;