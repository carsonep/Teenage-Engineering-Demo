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
import { NavLink } from "react-router-dom";

function WirelessAudioPreview() {
  return (
    <div className="product__preview">
      <NavBar textColor={"#FFFFfF"} />
      <div className="grid grid-cols-6">
        <NavLink
          to="/products/ob-4"
          className="md:-mt-14 lg:-mt-44 w-full col-span-6  mt-2 md:mt-0"
        >
          <div
            className="rounded-2xl md:rounded-none"
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
        </NavLink>

        <NavLink
          to="/products/orthoremote"
          className="col-span-6 md:col-span-3 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{ backgroundColor: "#e5e5e5" }}
        >
          <img src={orthoHero} />
        </NavLink>

        <NavLink
          to="/products/od-11"
          className="col-span-6 md:col-span-3 mt-2 md:mt-0"
          style={{ backgroundColor: "#e5e5e5" }}
        >
          <img className="rounded-2xl md:rounded-none" src={od11Hero} />
        </NavLink>

        <NavLink
          to="/store"
          className="col-span-6 h-48 flex justify-center items-center rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{
            backgroundColor: "#0f0e12",
          }}
        >
          <div
            className="rounded-2xl md:rounded-none"
            style={{
              backgroundColor: "#0f0e12",
            }}
          >
            <h1 className="text-white text-2xl md:text-5xl">
              worldwide delivery. visit our store.
            </h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default WirelessAudioPreview;
