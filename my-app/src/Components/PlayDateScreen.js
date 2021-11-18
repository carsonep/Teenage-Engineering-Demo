import React from "react";
import NavBar from "./NavBar";
import playdateHero from "../images/playdateHero.jpg";

function PlayDateScreen() {
  return (
    <div>
      <NavBar textColor={"#000"} />
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
    </div>
  );
}

export default PlayDateScreen;
