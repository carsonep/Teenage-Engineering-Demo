import React from "react";
import NavBar from "./NavBar";
import computer1Hero from "../images/computer1Hero.jpg";

function HomePage() {
  return (
    <div className="relative z-0">
      <NavBar className="relative inset-0 z-20" textColor={"#cc996c"} />
      <div
        className="-mt-14 md:-mt-14 lg:-mt-44 w-full col-span-6"
        style={{
          backgroundImage: `url(${computer1Hero})`,
          backgroundSize: "100%",
          backgroundPosition: "50% 101.3%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      >
        <h1
          className="absolute flex w-full"
          style={{ top: "20.5%", left: "4.633%", fontSize: "3.33vw" }}
        >
          hey!
        </h1>
        <h2
          className="absolute flex  font-light leading-none"
          style={{
            top: "26.5%",
            left: "4.633%",
            fontSize: "1.9vw",
            width: "18%",
          }}
        >
          no big deal. we have made a mini-ITX pc chassis that we call the
          computer–1.
        </h2>
        <h2
          style={{ color: "#ed614a" }}
          className="absolute flex  font-light leading-tight"
          style={{
            top: "35%",
            left: "4.633%",
            fontSize: "1.9vw",
            width: "18%",
          }}
        >
          explore
        </h2>
      </div>
      <div
        className="col-span-6  flex justify-center items-center"
        style={{
          backgroundColor: "#f05a24",

          padding: "2.5%",
        }}
      >
        <h1 className=" text-white text-xl md:text-6xl">visit store.</h1>
      </div>
    </div>
  );
}

export default HomePage;
