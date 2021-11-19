import React from "react";
import NavBar from "./NavBar";
import playdateHero from "../images/playdateHero.jpg";
import playdateBreakdown from "../images/playdateBreakdown.jpg";

function PlayDateScreen() {
  return (
    <div>
      <NavBar textColor={"#000"} />
      <div
        className="-mt-14 md:-mt-14 lg:-mt-44 w-full col-span-6"
        style={{
          backgroundImage: `url(${playdateHero})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "53.4% 37.7%",
          width: "100%",
          height: 0,
          paddingTop: "70%",
        }}
      ></div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight pt-16 md:pt-24"
        style={{
          fontSize: "1.8333vw",
          color: "#e5e5e5",
          backgroundColor: "#0f0e12",
        }}
      >
        <h1
          className="font-normal pb-6 md:pb-12 w-1/2 text-center"
          style={{ fontSize: "3.333vw" }}
        >
          introducing playdate.
        </h1>
        <span>teenage engineering designed the hardware for panic's </span>
        <span>gaming console, playdate. playdate is a hand-held gaming</span>
        <span>system with a flip-out analog crank controller.</span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
          <p style={{ fontSize: "1.8333vw", color: "#aa9413" }}>read more</p>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${playdateBreakdown})`,

          backgroundSize: "100%",
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "55%",
        }}
      ></div>
    </div>
  );
}

export default PlayDateScreen;
