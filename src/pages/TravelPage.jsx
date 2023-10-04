import React from 'react'
import girl from "../assets/Girl.png";
import Travel from "../components/travel/Travel";
const TravelPage = () => {
  return (
    <div className=''>
      <div className="img">
       <img src={girl} alt="" />
        
      </div>
     
      <div className='mt-8'>
         <Travel />
        
      </div>
    </div>
  );
}

export default TravelPage