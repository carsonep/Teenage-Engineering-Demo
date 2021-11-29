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
import computer1Hero from "../images/computer1Hero.jpg";
import "./styleComponents/ProductPreview.css";

function ProductsPreview() {
  return (
    <div className="product__preview">
      <NavBar textColor={"rgb(232,143,110)"} />
      <div className="grid grid-cols-6 gap-2 md:gap-0">
        <div
          className="md:-mt-14 lg:-mt-44 w-full col-span-6 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{
            backgroundImage: `url(${computer1Hero})`,
            backgroundSize: "100%",
            backgroundPosition: "50% 101.3%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "100%",
          }}
        ></div>
        <div
          // className="col-span-6 h-full"
          className="md:-mt-14 lg:-mt-44 w-full col-span-6 rounded-2xl md:rounded-none mt-2 md:mt-0"
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
        <div className="col-span-6 md:col-span-3 mt-2 md:mt-0">
          <img className="w-full rounded-2xl md:rounded-none" src={opzHero} />
        </div>
        <div
          className="col-span-6 md:col-span-3 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{ backgroundColor: "#cb986c" }}
        >
          <img src={redModularHero} />
        </div>
        <div
          className="col-span-6 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{ backgroundColor: "#e5e5e5" }}
        >
          <img src={pocketOperatorHero} />
        </div>
        <div
          className="col-span-6 md:col-span-2 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{ backgroundColor: "#b2b2b7" }}
        >
          <img src={op1Hero} />
        </div>
        <div
          className="col-span-3 md:col-span-2 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{ backgroundColor: "#0f0e12" }}
        >
          <img src={orthoHero} />
        </div>
        <div className="col-span-3 md:col-span-2 mt-2 md:mt-0">
          <img className="rounded-2xl md:rounded-none" src={od11Hero} />
        </div>
        <div className="hidden md:block col-span-6 rounded-2xl md:rounded-none mt-2 md:mt-0">
          <img src={op1Acc} />
        </div>
        <div
          className="col-span-6 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{
            backgroundColor: "#282828",
            backgroundSize: "72.9%",
          }}
        >
          <img src={cameraHero} className="object-contain" />
        </div>
        <div
          className="col-span-6 h-48 flex justify-center items-center rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{
            backgroundColor: "#0071bb",
          }}
        >
          <h1 className="text-white text-2xl md:text-5xl">
            worldwide delivery. visit our store.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ProductsPreview;
