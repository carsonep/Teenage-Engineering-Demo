import React from "react";
import NavBar from "./NavBar";
import Op1Header from "../images/Op1Header.jpg";
import { Link } from "react-router-dom";

function Op1Screen() {
  return (
    <div className="relative z-0">
      <NavBar className="relative inset-0 z-20" textColor={"#000"} />
      <div
        className="-mt-14 md:-mt-14 lg:-mt-44 w-full col-span-6"
        style={{
          backgroundImage: `url(${Op1Header})`,
          backgroundSize: "100%",
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "145%",
          backgroundColor: "#c9cdd2",
        }}
      >
        <p
          className="absolute flex  font-light leading-tight text-center"
          style={{
            top: "58%",
            left: "6.5%",
            fontSize: "1.866vw",
            width: "20%",
          }}
        >
          ’ might just be the most anticipated synthesizer in the history of
          mankind.’
        </p>
        <p
          className="absolute flex  font-light leading-tight text-center"
          style={{
            top: "64%",
            left: "19.5%",
            fontSize: "1.5vw",
            width: "20%",
          }}
        >
          –ENGADGET
        </p>
        <h2
          className="absolute flex  font-light leading-tight text-center"
          style={{
            top: "67%",
            left: "6.5%",
            fontSize: "1.866vw",
            width: "21%",
          }}
        >
          ’ it's slick, occasionally innovative and, above all, uncluttered.
          there's a real feeling of restraint, of limiting the tweakable
          parameters only to the essentials so that you're never diverted from
          what matters — making music’
        </h2>
        <p
          className="absolute flex  font-light leading-tight text-center"
          style={{
            top: "83.5%",
            left: "15.5%",
            fontSize: "1.5vw",
            width: "20%",
          }}
        >
          –SOUND ON SOUND
        </p>

        <h2
          className="absolute flex  font-light leading-tight text-center"
          style={{
            top: "72%",
            left: "30.5%",
            fontSize: "1.866vw",
            width: "21%",
          }}
        >
          ’ it’s been a long time since i’ve seen something as interesting,
          flexible and creative as this. after my tour in sweden, the whole team
          came back-stage and we jammed together. i chose this synth to show
          that any instrument, from no matter what time, can have a completely
          timeless value. i’m sure that musicians will still be using the OP-1
          in 50 years.
        </h2>
        <p
          className="absolute flex  font-light leading-tight text-center"
          style={{
            top: "98%",
            left: "37.5%",
            fontSize: "1.5vw",
            width: "20%",
          }}
        >
          –JEAN MICHEL JARRE
        </p>

        <p
          className="absolute flex  font-light leading-tight text-center"
          style={{
            top: "87%",
            left: "8.5%",
            fontSize: "1.866vw",
            width: "20%",
          }}
        >
          ’ this is simply great’
        </p>
        <p
          className="absolute flex  font-light leading-tight"
          style={{
            top: "90%",
            left: "15.5%",
            fontSize: "1.5vw",
            width: "12%",
          }}
        >
          –TRENT REZNOR, NINE INCH NAILS
        </p>

        <p
          className="absolute flex  font-light leading-tight text-center"
          style={{
            top: "94%",
            left: "6.5%",
            fontSize: "1.866vw",
            width: "20%",
          }}
        >
          ’ endless enjoyment out of this machine’
        </p>
        <p
          className="absolute flex  font-light leading-tight"
          style={{
            top: "98%",
            left: "15.5%",
            fontSize: "1.5vw",
            width: "12%",
          }}
        >
          –ELIJAH WOOD
        </p>
        {/*
        <h2
          style={{ color: "#ed614a" }}
          className="absolute flex  font-light leading-tight"
          style={{
            top: "35%",
            left: "4.633%",
            fontSize: "1.9vw",
            width: "18%",
          }}
        >
          <Link to="/products/computer-1">explore</Link>
        </h2>
      </div>
      <div
        className="col-span-6  flex justify-center items-center"
        style={{
          backgroundColor: "#f05a24",

          padding: "2.5%",
        }}
      >
        <h1 className=" text-white text-xl md:text-6xl">visit store.</h1> */}
      </div>
    </div>
  );
}

export default Op1Screen;
