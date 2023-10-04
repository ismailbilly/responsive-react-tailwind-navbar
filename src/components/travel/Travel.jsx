import React from 'react'
import circle from '../../assets/Frame50.png'
const Travel = () => {
  return (
    <div>
      <div className="mt-8">
        <div className="text-center">
          <h4 className="text-secondary mt-4">TRAVEL POINT</h4>
          <h3 className="font-bold text-3xl mb-8">
            We helping you find your dream location
          </h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        {/* <img src={circle} alt="circle" /> */}
      </div>
      <div className="stats mt-8 text-center">
        <div className="">
          <div className="border-2 rounded-lg py-8">
            <p className=" text-4xl text-Sorange">500+</p>
            <p>Holiday Package</p>
          </div>
          <div className="border-2 rounded-lg  py-8">
            <p className="text-4xl text-Sorange">100</p>
            <p>Luxury Hotel</p>
          </div>
        </div>
        <div className="2">
          <div className="border-2 rounded-lg  py-8">
            <p className="text-4xl text-Sorange">7</p>
            <p>Premium Airlines</p>
          </div>
          <div className="border-2 rounded-lg  py-8">
            <p className="text-4xl text-Sorange">2k+</p>
            <p>Happy Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel