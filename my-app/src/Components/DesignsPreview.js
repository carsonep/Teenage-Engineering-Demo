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

function DesignsPreview() {
  return (
    <div className="product__preview product__preview-design">
      <NavBar textColor={"#000000"} />
      <div className="grid grid-cols-6">
        <div
          className="md:-mt-14 lg:-mt-44 w-full col-span-6 rounded-2xl md:rounded-none mt-2 md:mt-0"
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
        <div className="col-span-6 md:col-span-3 object-cover  mt-2 md:mt-0">
          <img
            className="w-full rounded-2xl md:rounded-none"
            src={coolSpeakerHero}
          />
        </div>
        <div
          className="thumbnail col-span-6 md:col-span-3 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{
            backgroundImage: `url(${trippyDesign})`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <img className="w-full" src={trippyDesign} /> */}
        </div>
        <div className="col-span-6 object-cover  mt-2 md:mt-0">
          <img
            className="w-full rounded-2xl md:rounded-none"
            src={colorfulSquares}
          />
        </div>
        <div
          className="thumbnail col-span-6 md:col-span-3 rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{
            backgroundImage: `url(${coolRedArm})`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="col-span-6 md:col-span-3  mt-2 md:mt-0">
          <img
            className="w-full rounded-2xl md:rounded-none"
            src={cameraDesignHero}
          />
        </div>
        <div
          className="col-span-6  mt-2 md:mt-0"
          // style={{
          //   height: "62.5rem",
          //   backgroundImage: `url(${forestOb11})`,
          //   backgroundPosition: "50% 75%",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <img
            className="w-full rounded-2xl md:rounded-none"
            src={forestOb11}
          />
        </div>
      </div>
    </div>
  );
}

export default DesignsPreview;
