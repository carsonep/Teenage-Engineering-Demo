import React from "react";
import NavBar from "./NavBar";
import op1Accessories from "../images/op1Accesories.png";
import op1Antenna from "../images/op1Antenna.png";

function Op1Accessories() {
  return (
    <div>
      <NavBar bgColor={"#c8c8cd"} textColor={"#000"} />
      <div
        className="grid grid-cols-12 gap-4"
        style={{ padding: "5% 4.6vw", backgroundColor: "#c8c8cd" }}
      >
        <div className="col-span-2 font-light leading-tight">
          <h2 style={{ fontSize: "1.8vw" }} className="leading-none">
            OP-1 accessories
          </h2>
          <p style={{ fontSize: "1vw", paddingTop: "5%" }}>
            the OP-1 world is continuously evolving with new accessories and new
            os updates adding more effects and functions with every release.
            with OP-1‘s modular architecture, all this new functionality comes
            without adding any complexity to the user interface or resulting in
            over-clustered screens. your OP-1 will always be intuitive and
            simple to use.
          </p>
          <p style={{ fontSize: "1.33vw", paddingTop: "5%" }}>
            watch video here.
          </p>
        </div>

        <div
          className="col-span-7"
          style={{
            backgroundImage: `url(${op1Accessories})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundColor: "#e5e5e5",
            paddingTop: "100%",
          }}
        ></div>

        <div
          className="col-span-3"
          style={{
            backgroundImage: `url(${op1Antenna})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "275%",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundColor: "#7f7f7f",
            paddingTop: "238.5%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Op1Accessories;
