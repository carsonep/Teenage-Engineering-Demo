import React from "react";
import NavBar from "./NavBar";
import homeScreenImg from "../images/homeScreenImg.jpg";

function HomePage() {
  return (
    <div className="relative z-0">
      <NavBar className="relative inset-0 z-20" textColor={"#cc996c"} />
      <div
        className="-mt-44"
        style={{
          backgroundImage: `url(${homeScreenImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "90%",
        }}
      >
        <h1 className="absolute top-32 flex w-full justify-center">
          pocket operator
        </h1>
        <h1
          style={{ color: "#cc996c" }}
          className="absolute top-40 flex w-full justify-center"
        >
          modular モジュラー
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
