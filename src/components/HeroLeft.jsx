import React from "react";
import suitcase from "../assets/work 1.png";
import Button from "./Button";
import { AiFillPlayCircle } from "react-icons/ai";
const HeroLeft = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="head flex gap-4">
          <h6 className="text-secondary text-sm font-bold">
            Explore the World!
          </h6>
          <img src={suitcase} alt="suitcase" width={24} height={24} />
        </div>
        <div className="content max-w-[500px] my-10 ">
          <h2 className=" md:text-7xl font-bold my-6">
            <span className=" mb-2 inline-block">
              Travel <span className="text-secondary">top</span>
            </span>
            <br />
            <span className="text-secondary mb-2 inline-block">
              destination
            </span>
            <br />
            <span>of the world</span>
          </h2>
          <p className="text-accent">
            We always make our customer happy by providing <br /> as many
            choices as possible
          </p>
        </div>
        <div className="flex flex-col gap-7 md:flex-row md:gap-2 mt-4">
          <Button>Get Started</Button>
          <button className="flex items-center justify-center border-2 rounded-3xl px-8 py-2 gap-5">
            <span >
              <AiFillPlayCircle color={"#5D50C6"} size={24} />
            </span>
            <span>Watch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
