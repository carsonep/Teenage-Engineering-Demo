import React from "react";
import print1 from "../images/3dPrints1.jpg";
import NavBar from "./NavBar";

function threeDFrekvensPage() {
  return (
    <div>
      <NavBar textColor={"#000"} />
      <div className="grid grid-cols-4 gap-4" style={{ padding: "0 4.6vw" }}>
        <div
          className=""
          style={{
            backgroundImage: `url(${print1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 60%",

            paddingTop: "115%",
          }}
        ></div>

        <div
          className=""
          style={{
            backgroundImage: `url(${print1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 60%",

            paddingTop: "115%",
          }}
        ></div>

        <div
          className=""
          style={{
            backgroundImage: `url(${print1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 60%",

            paddingTop: "115%",
          }}
        ></div>

        <div
          className=""
          style={{
            backgroundImage: `url(${print1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 60%",

            paddingTop: "115%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default threeDFrekvensPage;
