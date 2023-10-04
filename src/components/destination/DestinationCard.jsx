import React from "react";
import { AiFillStar } from "react-icons/ai";
import rectangle from "../../assets/Rectangle7.png";
import cloud from "../../assets/cloud1.png";
import fish from "../../assets/fish1.png";
const destinationArr = [
  {
    src: rectangle,
    alt: "sea",
    title: "Paradise Beach, Bantayan Island",
    price: "150.99",
    location: "Rome, Italy",
    rating: "4.5",
  },
  {
    src: fish,
    alt: "cloud",
    title: "Ocean with full of Colors",
    price: "550.16",
    location: "Maldives",
    rating: "5.0",
  },
  {
    src: cloud,
    alt: "fish",
    title: "Mountain View, Above the cloud",
    price: "20.99",
    location: "United Arab Emeries ",
    rating: "4.5",
  },
];
const DestinationCard = () => {
  return (
    <div className="md:flex justify-center gap-8">
      {destinationArr.map((item) => {
        return (
          <div key={item.alt} className="border-2 border-red-900 rounded-3xl ">
            <div className="h-[250px] w-[95%]">
              <img src={item.src} alt={item.alt} className=" h-full w-full" />
            </div>
            <div className="px-4 border-2 border-red-900">
              <div className="font-bold flex justify-between items-center my-6 max-w-[230px]">
                <h4>{item.title}</h4>
                <h4 className="text-secondary"> ${item.price}</h4>
              </div>

              <p>{item.location}</p>
              <p className="content flex items-center gap-2 mt-6 text-[#FF5722]">
                {item.rating} <AiFillStar color={"#FF5722"} />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DestinationCard;
