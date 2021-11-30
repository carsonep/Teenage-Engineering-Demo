import React from "react";
import NavBar from "./NavBar";
import ob4PageHeader from "../images/ob4PageHeader.png";

function Ob4Screen() {
  return (
    <div className="relative z-0">
      <NavBar className="relative inset-0 z-20" textColor={"#fff"} />
      <div
        className="-mt-14 md:-mt-14 lg:-mt-44 w-full"
        style={{
          backgroundImage: `url(${ob4PageHeader})`,
          backgroundSize: "101.1%",
          backgroundPosition: "50% 30%",
          backgroundRepeat: "no",
          width: "100%",
          height: 0,
          paddingTop: "120%",
        }}
      >
        <h1
          className="absolute flex justify-center w-full text-white"
          style={{ top: "12%", fontSize: "3.33vw" }}
        >
          the magic radio.
        </h1>
        <h2
          className="absolute flex font-light leading-none text-white"
          style={{
            top: "12.65%",
            left: "62.5%",
            fontSize: "1.9vw",
            width: "18%",
          }}
        >
          OB-4
        </h2>

        <div
          className="flex absolute justify-center leading-tight font-light z-50"
          style={{ color: "#b2b2ab", top: "85.75%" }}
        >
          <p style={{ width: "30%", fontSize: "1.8vw", marginRight: "2.5%" }}>
            introducing OB–4, the portable high fidelity loudspeaker with two
            4'' bass drivers and a pair of neodymium tweeters that deliver
            crystal clear, open natural sound with 38 watts per channel — that's
            around 100 decibels
          </p>

          <p style={{ width: "30%", fontSize: "1.8vw" }}>
            of incredible sounding stereo. listen using line input, bluetooth,
            FM radio and disk. the interface is minimal, with only the things
            you really need. yet if you look below the surface, there's a lot
            more than meets the eye.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ob4Screen;
