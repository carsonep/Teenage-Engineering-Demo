import React from "react";
import NavBar from "./NavBar";
import ob4Hero from "../images/ob4Hero.png";
import opzHero from "../images/opzHero.jpg";
import redModularHero from "../images/redModularHero.png";
import pocketOperatorHero from "../images/pocketOperatorHero.png";
import op1Hero from "../images/op1Hero.png";
import orthoHero from "../images/orthoHero.png";
import od11Hero from "../images/od11Hero.png";
import op1Acc from "../images/op1Acc.jpg";
import cameraHero from "../images/cameraHero.png";

function ProductsPreview() {
  return (
    <div className="">
      <NavBar bgColor={"#000000"} textColor={"#FFFFfF"} />
      <div className="grid grid-cols-6">
        <div
          // className="col-span-6 h-full"
          className="-mt-14 md:-mt-14 lg:-mt-44 w-full col-span-6"
          style={{
            backgroundImage: `url(${ob4Hero})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 60%",
            width: "100%",
            height: 0,
            paddingTop: "70%",
          }}
        ></div>
        <div className="col-span-3 object-cover">
          <img className="w-full" src={opzHero} />
        </div>
        <div className="col-span-3" style={{ backgroundColor: "#cb986c" }}>
          <img src={redModularHero} />
        </div>
        <div className="col-span-6" style={{ backgroundColor: "#e5e5e5" }}>
          <img src={pocketOperatorHero} />
        </div>
        <div className="col-span-2" style={{ backgroundColor: "#b2b2b7" }}>
          <img src={op1Hero} />
        </div>
        <div className="col-span-2" style={{ backgroundColor: "#0f0e12" }}>
          <img src={orthoHero} />
        </div>
        <div className="col-span-2">
          <img src={od11Hero} />
        </div>
        <div className="col-span-6">
          <img src={op1Acc} />
        </div>
        <div
          className="col-span-6 "
          style={{
            backgroundColor: "#282828",
            backgroundSize: "72.9%",
          }}
        >
          <img src={cameraHero} className="object-contain" />
        </div>
        <div
          className="col-span-6 h-48 flex justify-center items-center"
          style={{
            backgroundColor: "#0071bb",
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

export default ProductsPreview;
