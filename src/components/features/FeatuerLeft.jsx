import React from 'react'
import yellowIcon from "../../assets/yellowicon.png";
import orangeIcon from "../../assets/orangeicon.png";
import pinkIcon from "../../assets/pinkicon.png";
const FeatuerLeft = () => {
  return (
    <div>
      <div className="text-center">
        <h4 className="text-secondary mt-4">Key features</h4>
        <h3 className="font-bold text-3xl mb-8">We offer best services</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
      </div>
      <div className="mt-8 border-2 p-2 ">
        <div className="border-2 border-red-800 rounded-lg p-4">
          <img src={orangeIcon} alt="" className="inline-block mb-4 " />
          <div>
            <p className="font-bold text-2xl">We offer best services</p>
            <p>Lorem Ipsum is not simply random text</p>
          </div>
        </div>
        <div className="border-2 border-red-800 rounded-lg p-4">
          <img src={yellowIcon} alt="" className="inline-block mb-4 " />
          <div>
            <p className="font-bold text-2xl">We offer best services</p>
            <p>Lorem Ipsum is not simply random text</p>
          </div>
        </div>
        <div className="border-2 border-red-800 rounded-lg p-4">
          <img src={pinkIcon} alt="" className="inline-block mb-4 " />
          <div>
            <p className="font-bold text-2xl">We offer best services</p>
            <p>Lorem Ipsum is not simply random text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatuerLeft