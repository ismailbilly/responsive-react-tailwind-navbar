import React from 'react'
import HeroLeft from '../components/HeroLeft'
import heroimg from '../assets/Group 1.png'
import ellipse from "../assets/Ellipse.png"
const Hero = () => {
  return (
    <div
      className="flex flex-col-reverse items-center md:flex-row md:mt-6"
     
    >
      <HeroLeft />
      <div className="">
        <img src={heroimg} alt="hero-image" height={500} width={700} />
      </div>
    </div>
  );
}

export default Hero