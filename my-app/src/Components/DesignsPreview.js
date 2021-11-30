import React from "react";
import NavBar from "./NavBar";
import playdateHero from "../images/playdateHero.jpg";
import coolSpeakerHero from "../images/coolSpeakerHero.jpg";
import trippyDesign from "../images/trippyDesign.jpg";
import colorfulSquares from "../images/colorfulSquares.png";
import coolRedArm from "../images/coolRedArm.png";
import cameraDesignHero from "../images/cameraDesignHero.jpg";
import forestOb11 from "../images/forestOb11.jpg";
import "./styleComponents/ProductPreview.css";
import { NavLink } from "react-router-dom";

function DesignsPreview() {
  return (
    <div className="product__preview product__preview-design">
      <NavBar textColor={"#000000"} />
      <div className="grid grid-cols-6">
        <NavLink
          to="/designs/playdate"
          className="md:-mt-14 lg:-mt-44 w-full col-span-6  mt-2 md:mt-0"
        >
          <div
            className="rounded-2xl md:rounded-none"
            style={{
              backgroundImage: `url(${playdateHero})`,
              backgroundSize: "107%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "35% 30%",
              width: "100%",
              height: 0,
              paddingTop: "70%",
            }}
          ></div>
        </NavLink>

        <NavLink
          to="/designs/frekvens"
          className="col-span-6 md:col-span-3 object-cover  mt-2 md:mt-0"
        >
          <img
            alt=""
            className="w-full rounded-2xl md:rounded-none"
            src={coolSpeakerHero}
          />
        </NavLink>

        <NavLink
          to="/designs/frekvens"
          className="col-span-6 md:col-span-3 mt-2 md:mt-0"
        >
          <div
            className="thumbnail rounded-2xl md:rounded-none"
            style={{
              backgroundImage: `url(${trippyDesign})`,
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              paddingTop: "133.35%",
              height: 0,
            }}
          ></div>
        </NavLink>

        <NavLink to="/designs/h" className="col-span-6 mt-2 md:mt-0">
          <div
            className="thumbnail rounded-2xl md:rounded-none"
            style={{
              backgroundImage: `url(${colorfulSquares})`,
              backgroundPosition: "50% 15%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "115%",
              paddingTop: "50%",
              height: 0,
            }}
          ></div>
        </NavLink>

        <NavLink
          to="/designs/r"
          className="col-span-6 md:col-span-3  mt-2 md:mt-0"
        >
          <div
            className="thumbnail rounded-2xl md:rounded-none "
            style={{
              backgroundImage: `url(${coolRedArm})`,
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: 0,
              paddingTop: "100%",
            }}
          ></div>
        </NavLink>

        <NavLink
          to="designs/I-1"
          className="col-span-6 md:col-span-3  mt-2 md:mt-0"
        >
          <img
            alt=""
            className="w-full rounded-2xl md:rounded-none"
            src={cameraDesignHero}
          />
        </NavLink>

        <NavLink
          to="/designs/the-holocellulose-OD-11"
          className="col-span-6  mt-2 md:mt-0"
        >
          <img
            alt=""
            className="w-full rounded-2xl md:rounded-none"
            src={forestOb11}
          />
        </NavLink>
      </div>
    </div>
  );
}

export default DesignsPreview;
