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

function WirelessAudioPreview() {
  return (
    <div className="">
      <NavBar bgColor={"#000000"} textColor={"#FFFFfF"} />
      <div className="grid grid-cols-6">
        <div className="col-span-6 h-full">
          <img src={ob4Hero} className="h-full w-full object-cover" />
        </div>

        <div className="col-span-3" style={{ backgroundColor: "#e5e5e5" }}>
          <img src={orthoHero} />
        </div>
        <div className="col-span-3">
          <img src={od11Hero} />
        </div>

        <div
          className="col-span-6 h-48 flex justify-center items-center"
          style={{
            backgroundColor: "#0f0e12",
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

export default WirelessAudioPreview;
