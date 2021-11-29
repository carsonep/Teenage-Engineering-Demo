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
import "./styleComponents/ProductPreview.css";

function SynthesizerPreview() {
  return (
    <div className="product__preview product__preview-design">
      <NavBar className="product__preview-nav" textColor={"#ddcec0"} />
      <div className="grid grid-cols-6">
        <div
          className="md:-mt-14 lg:-mt-44 w-full col-span-6 rounded-2xl md:rounded-none mt-2 md:mt-0"
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
        ></div>
        <div
          className="col-span-6 md:col-span-3 w-full rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{
            backgroundColor: "#8a8a8a",
          }}
        >
          <img className="w-full" src={opz2Hero} />
        </div>
        <div
          className="thumbnail col-span-6 md:col-span-3 row-span-1 md:row-span-2 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{
            backgroundImage: `url(${operatorDemo})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="col-span-6 md:col-span-3 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{ backgroundColor: "#b2b2bc" }}
        >
          <img className="" src={op1Hero} />
        </div>
        <div
          className="hidden md:block col-span-6 "
          style={{
            backgroundColor: "#e5e5e5",
            backgroundImage: `url(${oplabHero})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "46%",
            backgroundPosition: "50% 50%",
            height: "760px",
          }}
        ></div>
        <div
          className="col-span-6 h-48 flex justify-center items-center rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{
            backgroundColor: "#0f0e12",
          }}
        >
          <h1 className=" text-white text-2xl md:text-5xl ">
            worldwide delivery. visit our store.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SynthesizerPreview;
