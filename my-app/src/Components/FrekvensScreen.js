import React from "react";
import NavBar from "./NavBar";
import FrekvensHeader from "../images/FrekvensHeader.jpg";
import frekvensClear from "../images/frekvensClear.jpg";
import frekvens1 from "../images/frekvens1.jpg";
import frekvens2 from "../images/frekvens2.jpg";
import frekvens3 from "../images/frekvens3.jpg";

function FrekvensScreen() {
  return (
    <div>
      <NavBar textColor={"#fff"} />
      <div
        className="-mt-14 md:-mt-14 lg:-mt-44 w-full col-span-6"
        style={{
          backgroundImage: `url(${FrekvensHeader})`,
          backgroundSize: "110%",
          backgroundPosition: "41.5% 2%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      ></div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight -mt-16 md:-mt-20 lg:-mt-56"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1 className="font-normal" style={{ fontSize: "3.333vw" }}>
          meet frekvens.
        </h1>
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          the ultimate house party collection.
        </h1>
        <span>
          frekvens, meaning 'frequency', is a portable modular system inspired
          by
        </span>
        <span>
          the energy and ambiance of a club. stack each module to create a full
          sound
        </span>
        <span>
          system. attach the LED's and spotlights to complete your experience.
        </span>

        <div className="flex mt-8 pb-4 md:pb-8 lg:pb-24 ">
          <div></div>
        </div>
      </div>

      <div
        className="relative"
        style={{
          backgroundImage: `url(${frekvensClear})`,

          backgroundSize: "110%",
          backgroundPosition: "44% 0%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "75%",
        }}
      >
        <h1
          className="absolute flex w-1/5 leading-tight tracking-tight"
          style={{
            top: "47.5%",
            left: "4.633%",
            fontSize: "3.33vw",
            color: "#e5e5e5",
          }}
        >
          light & sound in sync.
        </h1>
        <p
          className="absolute flex w-1/5 leading-tight font-light tracking-tight"
          style={{
            top: "60.5%",
            left: "4.633%",
            fontSize: "1.9vw",
            color: "#e5e5e5",
          }}
        >
          the frekvens LED's and spotlights reacts in time to the sound you're
          playing.
        </p>
      </div>

      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-12 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1 className="font-normal" style={{ fontSize: "3.333vw" }}>
          a modular system
        </h1>
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          with no boundaries.
        </h1>
        <span>the individual speakers, lights and accessories can be</span>
        <span>built into various configurations unique to your space.</span>
        <span>your imagination is the only limitation.</span>

        <div className="flex mt-8 pb-4 md:pb-8 lg:pb-24 ">
          <div></div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div
          className="col-span-1 "
          style={{
            backgroundImage: `url(${frekvens1})`,
            backgroundPosition: "45% 0%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: "100%",
          }}
        ></div>
        <div
          className="col-span-1 "
          style={{
            backgroundImage: `url(${frekvens2})`,
            backgroundPosition: "45% 0%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: "100%",
          }}
        ></div>
        <div
          className="col-span-1 "
          style={{
            backgroundImage: `url(${frekvens3})`,
            backgroundPosition: "45% 0%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default FrekvensScreen;
