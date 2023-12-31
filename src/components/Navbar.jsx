import React, { useState } from "react";
import ellipse from "../assets/Ellipse.png";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Vector.png";
import heroimg from "../assets/Group 1.png";
import Button from "./Button";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="bg-white border-2 border-red-600"
      
    >
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 md:w-auto w-full flex justify-between items-center gap-2">
          <img src={logo} alt="company logo" />
          <span className="font-extrabold">TourLog</span>
          <div className="text-3xl md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        <ul className="md:flex hidden  items-center gap-8 font-[Poppins]">
          <li>
            <a to="/" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>
          <li>
            <a to="/" className="py-7 px-3 inline-block text-red-600">
              Discover
            </a>
          </li>
          <li>
            <a to="/" className="py-7 px-3 inline-block text-accent">
              Special Deals
            </a>
          </li>
          <li>
            <a to="/" className="py-7 px-3 inline-block text-accent">
              Contact
            </a>
          </li>
        </ul>
        <div className="md:flex hidden md:gap-8">
          <button>Log in</button>
          <Button>Sign up</Button>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <a to="/" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>
          <li>
            <a to="/" className="py-7 px-3 inline-block text-accent">
              Discover
            </a>
          </li>
          <li>
            <a to="/" className="py-7 px-3 inline-block text-accent">
              Special Deals
            </a>
          </li>
          <li>
            <a to="/" className="py-7 px-3 inline-block text-accent">
              Contact
            </a>
          </li>
          <div className="py-5 flex flex-col gap-12">
            <button>Log in</button>
            <button>SignUp</button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
