import React from 'react'
import beautifulImg from "../assets/beautiful.png"
import FeatuerLeft from '../components/features/FeatuerLeft';
const FeatureSection = () => {
  return (
    <div className="">
      <div>
        <img src={beautifulImg} alt="" />
      </div>
      <div>
        <FeatuerLeft />
      </div>
    </div>
  );
}

export default FeatureSection