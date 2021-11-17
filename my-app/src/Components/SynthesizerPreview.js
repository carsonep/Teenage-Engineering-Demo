import React from "react";
import NavBar from "./NavBar";

import ob4Hero from "../images/ob4Hero.png";
import opz2Hero from "../images/opz2Hero.png";
import redModularHero from "../images/redModularHero.png";
import pocketOperatorHero from "../images/pocketOperatorHero.png";
import op1Hero from "../images/op1Hero.png";
import orthoHero from "../images/orthoHero.png";
import od11Hero from "../images/od11Hero.png";
import oplabHero from "../images/oplabHero.jpg";
import operatorDemo from "../images/operatorDemo.png";

function SynthesizerPreview() {
  return (
    <div>
      <NavBar bgColor={"#cb986c"} textColor={"#ddcec0"} />
      <div className="grid grid-cols-6">
        <div
          className="-mt-14 md:-mt-14 lg:-mt-44 w-full col-span-6"
          style={{
            backgroundImage: `url(${redModularHero})`,
            backgroundSize: "92.33%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 40%",
            width: "100%",
            height: 0,
            paddingTop: "70%",
            backgroundColor: "#cb986c",
          }}
        >
          <img src={redModularHero} />
        </div>
        <div
          className="col-span-3 w-full"
          style={{
            backgroundColor: "#8a8a8a",
          }}
        >
          <img className="w-full" src={opz2Hero} />
        </div>
        <div
          className="col-span-3 row-span-2"
          style={{
            backgroundColor: "#282828",
            backgroundImage: `url(${operatorDemo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "250.1%",
            backgroundPosition: "center top",
          }}
        ></div>
        <div className="col-span-3" style={{ backgroundColor: "#b2b2bc" }}>
          <img className="" src={op1Hero} />
        </div>
        <div
          className="col-span-6"
          style={{
            backgroundColor: "#e5e5e5",
            backgroundImage: `url(${oplabHero})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "46%",
            backgroundPosition: "50% 50%",
            height: "760px",
          }}
        >
          {/* <img className="" src={oplabHero} /> */}
        </div>
        <div
          className="col-span-6 h-48 flex justify-center items-center"
          style={{
            backgroundColor: "#0f0e12",
          }}
        >
          <h1 className=" text-white text-2xl md:text-5xl">
            worldwide delivery. visit our store.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SynthesizerPreview;
