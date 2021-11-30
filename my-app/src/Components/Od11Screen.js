import React from "react";
import NavBar from "./NavBar";
import od11SwedishRoom from "../images/od11SwedishRoom.jpg";
import od11Chair from "../images/od11Chair.jpg";
import oldAndNewOd from "../images/oldAndNewOd.jpg";
import od11Raw from "../images/od11Raw.jpg";
import orthoRemoteLarge from "../images/orthoRemoteLarge.png";
import iPhoneOd11 from "../images/iPhoneOd11.png";
import samsungOd11 from "../images/samsungOd11.png";
import villaOd11 from "../images/villaOd11.jpg";

function Od11Screen() {
  return (
    <div className="relative">
      <NavBar textColor={"#cac9c4"} />
      <div
        className="-mt-14 md:-mt-14 lg:-mt-44 w-full"
        style={{
          backgroundImage: `url(${od11SwedishRoom})`,

          backgroundSize: "115%",
          backgroundPosition: "60% 0%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "93%",
        }}
      >
        <h1
          className="absolute w-full text-center"
          style={{
            top: "2%",

            fontSize: "3.33vw",
            color: "#ebebeb",
          }}
        >
          experience the warm and natural carlsson sound.
        </h1>
      </div>
      <div
        className="flex flex-col justify-center items-center font-light"
        style={{ fontSize: "1.8333vw" }}
      >
        <span>OD-11 the wireless stereo loudspeaker,</span>
        <span>
          made to play all your music, from any device, in wireless stereo.
        </span>
        <span>
          the unmistakably warm and relaxed carlsson sound has returned.
        </span>
        <span>now in red, black, blue, yellow, walnut and white.</span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
          <p style={{ fontSize: "1.8333vw" }} className="mr-8">
            from $999
          </p>
          <p style={{ fontSize: "1.8333vw" }}>visit store</p>
        </div>
      </div>
      <div
        className="grid grid-cols-2 h-48 flex items-center text-white "
        style={{
          backgroundColor: "#0f0e12",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <span>BEST IN TEST - LJUD & BILD</span>
          <span>* * * * *</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>LONDON DESIGN AWARD</span>
          <span>GOLD</span>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${od11Chair})`,

          backgroundSize: "contain",
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "75%",
        }}
      ></div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          play anything, anywhere.
        </h1>
        <span>OD-11 is compatible with all music services.</span>
        <span>
          stream your favourite music at home, bring it on your holiday
        </span>
        <span>
          and listen offline with cabin mode, or connect any instrument,
        </span>
        <span>
          turntable, gaming console or tv, for a rich sound experience.
        </span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
          <div></div>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${oldAndNewOd})`,

          backgroundSize: "108%",
          backgroundPosition: "32% 40%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "60%",
        }}
      ></div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-16 md:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12 w-1/2 text-center"
          style={{ fontSize: "3.333vw" }}
        >
          warm and natural sound in a timeless design.
        </h1>
        <span>the new OD-11 is a carefully re-engineered version of the</span>
        <span>
          original OD-11 ortho directional loudspeaker, made in 1974 by the
        </span>
        <span>
          swedish sound genius stig carlsson. the carlsson sound has returned,
        </span>
        <span>now upgraded using the latest technology.</span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
          <p style={{ fontSize: "1.8333vw" }}>read the carlsson story</p>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${od11Raw})`,

          backgroundSize: "139%",
          backgroundPosition: "44% 38%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "55%",
        }}
      ></div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-16 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-4 md:pb-8 w-1/2 text-center"
          style={{ fontSize: "3.333vw" }}
        >
          the latest technology at heart.
        </h1>
        <span>
          OD-11 features a 100 watt amplifier and a built-in computer.
        </span>
        <span>
          it delivers warm powerful sound using the latest wi-fi streaming
          technology,
        </span>
        <span>
          and will play all your music from any device. setup is simple and
          within
        </span>
        <span>minutes you will be enjoying streamed music.</span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
          <p style={{ fontSize: "1.8333vw" }}>inside the OD-11</p>
        </div>
      </div>
      <div
        className="col-span-6 h-72 flex flex-col justify-center items-center"
        style={{
          backgroundColor: "#0f0e12",
        }}
      >
        <h1 style={{ color: "#e5e5e5", fontSize: "3.333vw" }}>
          a music lover's dream-come-true.
        </h1>
        <h2
          className="font-light mt-4"
          style={{ color: "#a2b2b2", fontSize: "1.8333vw" }}
        >
          – THE WALL STREET JOURNAL
        </h2>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${orthoRemoteLarge})`,
          backgroundColor: "#e5e5e5",
          backgroundSize: "100%",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "75%",
        }}
      ></div>
      <div
        style={{ backgroundColor: "#e5e5e5", fontSize: "1.8333vw" }}
        className="flex flex-col justify-center items-center font-light leading-tight"
      >
        <h1
          className="font-normal pb-4 md:pb-8 w-1/2 text-center"
          style={{ fontSize: "3.333vw" }}
        >
          ortho remote.
        </h1>
        <span>ortho remote for OD-11 is the wireless volume knob</span>
        <span>with click-functions for play, pause and skip.</span>
        <span>
          it also works as a universal remote control using Bluetooth® 4.0 (low
          energy).
        </span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-36 ">
          <p style={{ fontSize: "1.8333vw" }}>explore ortho remote</p>
        </div>
      </div>
      <div className="flex justify-evenly" style={{ padding: "0 5vw" }}>
        <div
          className=""
          style={{
            backgroundImage: `url(${iPhoneOd11})`,
            backgroundSize: "91%",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "75%",
          }}
        ></div>
        <div
          className=""
          style={{
            backgroundImage: `url(${samsungOd11})`,
            backgroundSize: "83%",
            backgroundPosition: "50% 35%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "75%",
          }}
        ></div>
      </div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-4 md:pb-8 w-1/2 text-center"
          style={{ fontSize: "3.333vw" }}
        >
          orthoplay.
        </h1>
        <span>
          orthoplay is the free software remote control app for OD-11.
        </span>
        <span>
          available both as a dedicated app for iOS, android and windows
        </span>
        <span>and as a universal web application for any platform.</span>

        <div className="flex mt-8 md:mt-12 pb-12 md:pb-16 lg:pb-36 ">
          <p style={{ fontSize: "1.8333vw" }}>learn more about orthoplay</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div
          className=""
          style={{
            backgroundImage: `url(${villaOd11})`,
            backgroundSize: "cover",

            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "130%",
          }}
        ></div>
        <div
          style={{ backgroundColor: "#e5e5e5", fontSize: "1.8333vw" }}
          className="flex flex-col justify-center items-center font-light leading-tight"
        >
          <span>villa erskine is situated at the</span>
          <span>drottningholm island in stockholm.</span>
          <span>it is listed as a national heritage, among</span>
          <span>other famous buildings in sweden.</span>
        </div>
      </div>
      <div
        className="col-span-6 h-40 lg:h-72 flex flex-col justify-center items-center"
        style={{
          backgroundColor: "#0f0e12",
        }}
      >
        <h1 style={{ color: "#e5e5e5", fontSize: "3.333vw" }}>
          a 40-year-old minimalist classic reborn.
        </h1>
        <h2
          className="font-light mt-4"
          style={{ color: "#a2b2b2", fontSize: "1.8333vw" }}
        >
          – DESIGN MILK
        </h2>
      </div>
    </div>
  );
}

export default Od11Screen;
