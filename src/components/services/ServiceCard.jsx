import React from 'react'

import booking from '../../assets/booking.png'
import booking1 from "../../assets/booking1.png";
import booking2 from "../../assets/booking2.png";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import ServiceChild from './ServiceChild';

const bookingArr = [
 {
    src: booking,
    title: "Best Tour Guide",
    data: "What looked like a small patch of purple grass, above five feet.",
  },
 {
    src: booking1,
    title: "Easy Booking",
    data: "Square, was moving across the sand in their direction.",
  },
  {
    src: booking2,
    title: "Weather Forecast",
    data: "What looked like a small patch of purple grass, above five feet.",
  },
]


const ServiceCard = () => {

  return (
  
    <div className='md:flex md:gap-4 mb-4'>
      
      {bookingArr.map((item, index) => {
        return (
          <div
            className="card text-center p-10 border-2 rounded-lg "
            key={index}
          >
            <div className="img flex justify-center border-2 ">
              <img src={item.src} alt="" />
            </div>
            <div className="content max-w-[200px]  border-2">
              <h2 className="my-10 font-Inter font-bold">{item.title}</h2>
              <p>{item.data}</p>
            </div>
          </div>
        );
        })}
      
     </div>
  );
}

export default ServiceCard