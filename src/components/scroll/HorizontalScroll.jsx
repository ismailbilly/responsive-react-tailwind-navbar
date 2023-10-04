import React from 'react'
import img1 from "../../assets/Group (1).png"
import img2 from "../../assets/Group 2.png";
import img3 from "../../assets/Group 3.png";
import img4 from "../../assets/Group.png";
import img5 from "../../assets/Group 9235.png";
import "./HorizontalScroll.css";
const imageArr = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
];
const HorizontalScroll = () => {
    return (
     <div className="horizontal-scrolling-items">
             {
            imageArr.map((img, index) => {
          return(
              <div className={`horizontal-scrolling-items__item item + ${index+1}`} key={index}>
        <img src={img.src} alt="" height={10}/>
      </div>
          )
      })}
     </div>
  );
}

export default HorizontalScroll