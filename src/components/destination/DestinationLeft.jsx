import React from 'react'
import { BsArrowLeftCircle, BsArrowRightCircleFill } from "react-icons/bs";
const DestinationLeft = () => {
  return (
    <div>
      <div className="head md:flex justify-between items-center my-12">
        <div>
          <h2 className="text-secondary text-xl font-bold mb-3">
            TOP DESTINATION
          </h2>
          <h3 className=" text-4xl font-bold">Explore top destination</h3>
        </div>
        <div className="flex gap-4">
          <span>
            <BsArrowLeftCircle size={40} color="#191825" />
          </span>
          <span
            className="rounded-full"
            style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.25)" }}
          >
            <BsArrowRightCircleFill color={"#5D50C6"} size={40} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DestinationLeft; 