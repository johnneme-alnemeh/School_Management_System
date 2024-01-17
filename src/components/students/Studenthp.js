import React, {useEffect}from 'react';
import Stunavbar from './Stunavbar';
import axios from 'axios'
import CLubs from './Clubs';

export default function Studenthp() {

  let t = [];
  let to = [];
  let p = [];
  let pro = [];
  useEffect(() => {
    t = window.localStorage.getItem('auth_token');
          to = (JSON.parse(t));
      console.log(to.access_token);
      axios.get(`http://localhost:8000/api/auth/user-profile`,{ headers: {"Authorization" : `Bearer ${to.access_token}`} }
      ).then(result => {
        console.log(result.data);
        window.localStorage.setItem('auth_token', JSON.stringify(result.data));
      })

  }, []);

  
 
  return (
    <>
      <Stunavbar />
      {/* <Helmet bodyAttributes={{style: 'background-color : #FFE4E1'}}/> */}
      <div>
        <img src="./stuhp_2.jpg" width="55%" height="auto" alt="" className="shp"/>
        <p style={{paddingTop:210}} className="sht">Move your <span style={{color: "#28FEB3"}}> creative</span> journey forward.</p>
        <p  className="sht">Let's <span style={{color: "#28FEB3"}}> learn</span> beyond the <span style={{color: "#28FEB3"}}> limits!</span></p>
      </div>
      <h3 className='things1' style={{color:'#003399'}}>Many things you can do!</h3>
      <p className='things2' style={{color:'#003399'}}>You can participate in <span style={{color: "#28FEB3"}}> any club</span> you want from the clubs below.</p>
       
      <div className='clubs'>
      <CLubs 
          img="5609235.jpg"
          name="FOOTBALL Club"
          age="14 -> 18"
          status="Coming Soon"
        />
        <CLubs 
          img="5217.jpg"
          name="ART Club"
          age="10 -> 18"
          status="Coming Soon"
        />
        <CLubs 
          img="5870.jpg"
          name="MUSIC Club"
          age="10 -> 18"
          status="Coming Soon"
        />
        <CLubs 
          img="11070.jpg"
          name="LITERATURE Club"
          age="15 -> 18"
          status="Coming Soon"
        />
        
      </div>
    </>
  );
}