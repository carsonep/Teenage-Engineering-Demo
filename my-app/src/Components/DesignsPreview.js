import React from "react";
import NavBar from "./NavBar";
import playdateHero from "../images/playdateHero.jpg";
import coolSpeakerHero from "../images/coolSpeakerHero.jpg";
import trippyDesign from "../images/trippyDesign.jpg";
import colorfulSquares from "../images/colorfulSquares.png";
import coolRedArm from "../images/coolRedArm.png";

function DesignsPreview() {
  return (
    <div>
      <NavBar textColor={"#000000"} />
      <div className="grid grid-cols-6">
        <div
          className="w-full col-span-6"
          style={{
            height: "120vh",
            backgroundImage: `url(${playdateHero})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 39%",
            backgroundSize: "102%",
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
        <div className="col-span-3">
          <img className="w-full" src={coolRedArm} />
        </div>
        <div className="col-span-3">
          <img className="w-full" src={coolRedArm} />
        </div>
      </div>
    </div>
  );
}

export default DesignsPreview;
