import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
       My name is Miki Shibabaw from Gondar University.
    I am HTML,CSS,PHP,REACT,JAVASCRIPT,REACT JS ,DJANGO,REACT-REDUX,React Native developer.
        </p>

        <br />

        <p className="text-xl">
I can develop responsive website with material ui,tailwind css framework.
    I also develop mobile appication in React Native and Desktop application in c# and different Games.
    At backend I also render django rest framework and PhpMyAdmin XAMPP


        </p>
      </div>
    </div>
  );
};

export default About;
