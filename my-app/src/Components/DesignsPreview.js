import React from "react";
import NavBar from "./NavBar";
import playdateHero from "../images/playdateHero.jpg";
import coolSpeakerHero from "../images/coolSpeakerHero.jpg";
import trippyDesign from "../images/trippyDesign.jpg";
import colorfulSquares from "../images/colorfulSquares.png";
import coolRedArm from "../images/coolRedArm.png";
import cameraDesignHero from "../images/cameraDesignHero.jpg";
import forestOb11 from "../images/forestOb11.jpg";

function DesignsPreview() {
  return (
    <div>
      <NavBar textColor={"#000000"} />
      <div className="grid grid-cols-6">
        <div
          className="-mt-14 md:-mt-14 lg:-mt-44 w-full col-span-6"
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
        <div className="col-span-3 object-cover">
          <img className="w-full" src={coolSpeakerHero} />
        </div>
        <div
          className="col-span-3"
          style={{
            backgroundImage: `url(${trippyDesign})`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <img className="w-full" src={trippyDesign} /> */}
        </div>
        <div className="col-span-6 object-cover">
          <img className="w-full" src={colorfulSquares} />
        </div>
        <div
          className="col-span-3 "
          style={{
            backgroundImage: `url(${coolRedArm})`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <img className="w-full" src={coolRedArm} /> */}
        </div>
        <div className="col-span-3">
          <img className="w-full" src={cameraDesignHero} />
        </div>
        <div
          className="col-span-6"
          // style={{
          //   height: "62.5rem",
          //   backgroundImage: `url(${forestOb11})`,
          //   backgroundPosition: "50% 75%",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <img className="w-full" src={forestOb11} />
        </div>
      </div>
    </div>
  );
}

export default DesignsPreview;
