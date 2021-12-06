import React from "react";
import NavBar from "./NavBar";
import computer1Hero from "../images/computer1Hero.jpg";
import { Link } from "react-router-dom";
import teChristmas from "../images/teChristmas.jpg";




function HomePage() {
  return (
    <div className="relative z-0">
      <NavBar className="relative inset-0 z-20" textColor={"#fff"} />
      <div
        className="-mt-14 md:-mt-14 lg:-mt-44 w-full col-span-6"
        style={{
          backgroundImage: `url(${teChristmas})`,
          backgroundSize: "110%",
          backgroundPosition: "50% 75%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "80%",
        }}
      >
        
        <h2
          className="absolute flex justify-center w-full leading-none"
          style={{
            top: "75%",
            // left: "50%",
            fontSize: "1.9vw",
          
            color: "#e5e5e5"
          }}
        >
          our holiday gift shop is now open! 
        </h2>
        <h2
          className="absolute flex justify-center w-full leading-none"
          style={{
            top: "78%",
            
            fontSize: "1.9vw",
            
            color: "#e5e5e5",
          }}
        >
          gift ideas for your loved ones, or gift yourself.
        </h2>
      </div>
      <div
        className="col-span-6  flex justify-center items-center"
        style={{
          backgroundColor: "#006837",

          padding: "2.5%",
        }}
      >
        <h1 className="text-white text-xl md:text-6xl">visit store.</h1>
      </div>
    </div>
  );
}

export default HomePage;
