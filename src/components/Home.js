import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Miki Shibabaw is my name.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
    I have junior skill in web and mobile application development  in React JS, Python, Flutter, and React Native. 
    My expertise in these technologies has allowed me to build applications that can run on multiple platforms and devices. 
    I enjoy working on challenging projects and am passionate about delivering high-quality solutions that meet the needs of my clients.
    With a keen eye for detail and a commitment to excellence, I am confident in my ability to develop innovative applications that exceed expectations.
         
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://media.licdn.com/dms/image/D4E35AQGBQYWCf9z_lw/profile-framedphoto-shrink_400_400/0/1682189634277?e=1682794800&v=beta&t=netYV1TwsHR8epWVfQowajb84ebXyOkF-QyqkA6oaHA"
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
