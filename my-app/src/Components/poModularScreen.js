import React from "react";
import NavBar from "./NavBar";
import poModularHeader from "../images/poModularHeader.jpg";
import cardBoardBg from "../images/cardBoardBg.jpg";
import poModularBoxes from "../images/poModularBoxes.png";
import poModular1 from "../images/poModular1.png";
import poModular2 from "../images/poModular2.png";
import poModular3 from "../images/poModular3.png";

function poModularScreen() {
  return (
    <div className="relative">
      <NavBar textColor={"#000"} bgColor={"#e5e5e5"} />
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${poModularHeader})`,
          backgroundSize: "100%",
          backgroundPosition: "56% -75%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
          marginTop: "-4%",
        }}
      >
        {/* <h1
          style={{}}
          className="absolute w-full text-center"
          style={{
            top: "2%",

            fontSize: "3.33vw",
            color: "#ebebeb",
          }}
        ></h1> */}
      </div>

      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(${cardBoardBg})`,
          backgroundSize: "100%",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "80%",
        }}
      >
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 362.46 29.6"
            id="te-a986d375-2b6d8725-39a53fe2"
            className="absolute top-0 left-0 z-10"
          >
            <g class="f">
              <path d="M227.19 7.59h5.01L243.05 0h-5.02zM217.6 7.59h5.01L233.46 0h-5.02zM208.01 7.59h5.01L223.87 0h-5.02zM121.4 11.31c1.05-1.89 2.94-3.26 5.16-3.61L137.55 0h-5.02L90.26 29.6h5.02l26.12-18.29zM236.47 7.81c1.09.27 2.08.77 2.91 1.47L252.64 0h-5.02l-11.15 7.81zM131.28 7.59h5.02L147.14 0h-5.01zM257.21 0l-16.16 11.31c.48.87.79 1.86.87 2.9L262.23 0h-5.02zM188.82 7.59h5.02L204.69 0h-5.02zM150.46 7.59h5.02L166.32 0h-5.01zM160.05 7.59h5.02L175.91 0h-5.01zM140.87 7.59h5.02L156.73 0h-5.01zM169.64 7.59h5.02L185.5 0h-5.01zM127.96 0h-5.02L80.67 29.6h5.01zM179.23 7.59h5.02L195.1 0h-5.02zM198.41 7.59h5.02L214.28 0h-5.02zM32.05 0h-5.01L0 18.93v3.51zM22.46 0h-5.02L0 12.21v3.52zM41.64 0h-5.01L0 25.65v3.51zM51.23 0h-5.01L3.94 29.6h5.02zM12.87 0H7.85L0 5.5v3.51zM0 2.3L3.28 0H0zM89.6 0h-5.02L42.3 29.6h5.02zM60.82 0h-5.01L13.53 29.6h5.02zM118.37 0h-5.02L71.08 29.6h5.01zM108.78 0h-5.02L61.49 29.6h5.01zM99.19 0h-5.02L51.9 29.6h5.01zM70.42 0H65.4L23.12 29.6h5.02zM80.01 0h-5.02L32.71 29.6h5.02zM362.46 17.12v-3.51L339.62 29.6h5.02zM319.78 0h-5.02l-42.28 29.6h5.02zM310.18 0h-5.01l-42.28 29.6h5.02zM329.37 0h-5.02l-42.28 29.6h5.02zM300.59 0h-5.01L253.3 29.6h5.02zM338.96 0h-5.02l-42.27 29.6h5.01zM291 0h-5.01l-42.28 29.6h5.02zM362.46 10.41V6.89L330.03 29.6h5.01zM281.41 0h-5.01l-42.28 29.6h5.02zM362.46 23.84v-3.52l-13.25 9.28h5.02zM348.55 0h-5.02l-42.27 29.6h5.01zM362.46 27.04l-3.66 2.56h3.66zM362.46 3.69V.18L320.44 29.6h5.01zM358.14 0h-5.02l-42.27 29.6h5.01zM163.67 22.01h-5.02L147.8 29.6h5.02zM154.07 22.01h-5.01l-10.85 7.59h5.02zM173.26 22.01h-5.02l-10.85 7.59h5.02zM121.3 18.09c-.46-.9-.74-1.9-.78-2.96L99.85 29.6h5.02l16.43-11.51zM144.48 22.01h-5.01l-10.85 7.59h5.02zM134.89 22.01h-5.01l-10.85 7.59h5.02zM125.71 21.72c-1.05-.3-2-.84-2.8-1.55l-13.47 9.43h5.02l11.25-7.88zM182.85 22.01h-5.02l-10.84 7.59H172zM271.82 0h-5.02l-25.55 17.89c-1.07 2.24-3.25 3.85-5.83 4.08l-10.89 7.63h5.02L271.82 0zM221.21 22.01h-5.02l-10.84 7.59h5.01zM230.8 22.01h-5.01l-10.85 7.59h5.02zM211.62 22.01h-5.02l-10.84 7.59h5.01zM192.44 22.01h-5.02l-10.84 7.59h5.01zM202.03 22.01h-5.02l-10.84 7.59h5.01z"></path>
            </g>
          </svg>
        </div>

        <div
          className="absolute left-0 z-10"
          style={{
            backgroundImage: `url(${poModularBoxes})`,
            backgroundSize: "127.3%",
            backgroundPosition: "46.3% 48%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "120%",
            top: "-10%",
          }}
        ></div>
      </div>

      <div
        className="relative w-full "
        style={{
          backgroundImage: `url(${cardBoardBg})`,
          backgroundSize: "100%",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "80%",
        }}
      >
        <div className="absolute top-0 grid grid-cols-3 gap-4">
          <div className="" style={{ backgroundColor: "#e5e5e5" }}>
            <div
              className="h-1/8 bg-red-500 top-0 justify-center"
              style={{ backgroundColor: "#701d2a", color: "#e5e5e5" }}
            >
              <h1>16</h1>
            </div>
            <img className="" src={poModular1} />
          </div>

          <div className="" style={{ backgroundColor: "#e5e5e5" }}>
            <div
              className="h-1/8 bg-red-500 top-0 justify-center"
              style={{ backgroundColor: "#701d2a", color: "#e5e5e5" }}
            >
              <h1>170</h1>
            </div>

            <img className="" src={poModular2} />
          </div>

          <div className="" style={{ backgroundColor: "#e5e5e5" }}>
            <div
              className="h-1/8 bg-red-500 top-0 justify-center"
              style={{ backgroundColor: "#701d2a", color: "#e5e5e5" }}
            >
              <h1>400</h1>
            </div>
            <img className="" src={poModular3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default poModularScreen;
