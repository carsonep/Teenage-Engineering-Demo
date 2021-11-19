import React from "react";
import NavBar from "./NavBar";
import orthoRemoteHeader from "../images/orthoRemoteHeader.jpg";
import orthoRemote from "../images/orthoRemote.png";
import od11Small from "../images/od11Small.png";
import carlsson from "../images/carlsson.png";
import od11SideTriangle from "../images/od11SideTriangle.jpg";
import smallOrthoRemote from "../images/smallOrthoRemote.svg";
import orthoPlay from "../images/orthoPlay.png";

function OrthoRemotePreview() {
  return (
    <div style={{ backgroundColor: "#000000" }}>
      <NavBar textColor={"#ffffff"} />
      <div
        style={{
          backgroundImage: `url(${orthoRemoteHeader})`,
          backgroundColor: "#000000",
          backgroundSize: "76.1%",
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "67%",
        }}
      ></div>
      <div className="flex justify-center">
        <h1 className="py-2" style={{ color: "#b2b2b2", fontSize: "3.33vw" }}>
          ortho remote
        </h1>
      </div>
      <div
        className="flex justify-center leading-tight font-light"
        style={{ marginTop: "2.5%" }}
      >
        <p
          style={{
            fontSize: "18px",
            color: "#8ab2a1",
            width: "30%",
            fontSize: "1.8vw",
            marginRight: "1%",
          }}
        >
          ortho remote is the wireless remote control designed for OD-11 and
          OB–4. with ortho remote you adjust the volume, skip track and pause
          your music from any room, at up to 20 meters distance.
        </p>
        <p
          style={{
            fontSize: "18px",
            color: "#8ab2a1",
            width: "30%",
            fontSize: "1.8vw",
          }}
        >
          ortho remote has a magnetic back so you can stick it to any magnetic
          metal surface, like a fridge. the non-slip bottom makes it rest steady
          on any surface. experience real 1-click music.
        </p>
      </div>
      <div className="text-white flex flex-col items-center mt-16 leading-tight">
        <p style={{ fontSize: "1.833vw" }} className="font-light">
          ortho remote from $89
        </p>
        <p style={{ fontSize: "1.833vw" }} className="font-light">
          visit store
        </p>
      </div>
      <div className="flex justify-center" style={{ marginTop: "2%" }}>
        <div
          style={{
            backgroundImage: `url(${orthoRemote})`,
            backgroundSize: "51%",
            backgroundPosition: "48.7% 55%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "40%",
          }}
        ></div>
      </div>
      <div
        className="text-white flex justify-center"
        style={{ paddingBottom: "10%" }}
      >
        <p style={{ fontSize: "1.833vw" }} className="font-light">
          matte black
        </p>
      </div>
      <div
        className="flex flex-col md:grid md:gap-4 md:grid-cols-5 text-white"
        style={{ padding: "0 12vw", color: "#e5e5e5" }}
      >
        <div
          className="pb-0 md:pb-32 font-light leading-tight"
          style={{ textSizeAdjust: "none" }}
        >
          <p style={{ fontSize: "1.83vw" }}>over 2 year battery life</p>
          <p className="mt-4" style={{ fontSize: ".9vw" }}>
            ortho remote uses Bluetooth® 4 low energy to communicate with OD-11
            and OB–4. this in combination with 2 X AAA batteries makes it last
            over two years without the need to change batteries.
          </p>
        </div>

        <div className="pb-0 md:pb-32 font-light leading-tight">
          <p style={{ fontSize: "1.83vw" }} className="mt-4">
            1-click music
          </p>
          <p className="mt-4" style={{ fontSize: ".9vw" }}>
            ortho remote is created to simplify your music listening experience.
            pair ortho remote with your OD-11 and all it takes is 1 click for
            your favorite music to start playing. simply tap to start playing,
            turn the knob to adjust volume, double tap to skip track, and tap
            again while playing to pause. it's as easy as that. no software or
            drivers needed.
          </p>
        </div>

        <div className="pb-0 md:pb-32 font-light leading-tight">
          <p style={{ fontSize: "1.83vw" }} className="mt-4">
            MIDI controller
          </p>
          <p className="mt-4" style={{ fontSize: ".9vw" }}>
            the ortho remote can be used as a wireless midi controller, to
            control logic, garage band or any other BLE-MIDI compatible software
            or devices.
          </p>
        </div>

        <div className="pb-0 md:pb-32 font-light leading-tight">
          <p style={{ fontSize: "1.83vw" }} className="mt-4">
            works with iOS and android too
          </p>
          <p className="mt-4" style={{ fontSize: ".9vw" }}>
            ortho remote follows the universal Bluetooth® standard for HID –
            human interface devices. this makes it work seamlessly with any
            music player on iOS, mac OS X and android.
          </p>
        </div>

        <div className="mt-4 md:mt-0 pb-16 md:pb-0 font-light leading-tight">
          <p style={{ fontSize: "1.83vw" }} className="mt-4">
            technical specs
          </p>
          <p className="mt-4" style={{ fontSize: ".9vw" }}>
            dimensions in mm: 68 X 23 (W X H) dimensions in inch: 2.67 X
            0.88inch (W X H) weight: 104g / 0.23lbs
          </p>
        </div>
      </div>
      <div
        className="grid gap-4 grid-cols-2 md:gap-4 md:grid-cols-5"
        style={{ padding: "3.133vh 12vw", backgroundColor: "#e5e5e5" }}
      >
        <div>
          <div
            className=""
            style={{
              backgroundImage: `url(${od11Small})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "135%",
              height: 0,
              width: "100%",
              backgroundPosition: "50% 50%",
              paddingTop: "100%",
            }}
          ></div>
          <p
            className="flex justify-center mt-4 font-light"
            style={{ fontSize: "1.83vw" }}
          >
            OD-11 overview
          </p>
        </div>
        <div className="">
          <div
            className="bg-red-500"
            style={{
              backgroundImage: `url(${carlsson})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: 0,
              width: "100%",
              backgroundPosition: "25% 2%",
              paddingTop: "100%",
            }}
          ></div>
          <p
            className="flex justify-center mt-4 font-light"
            style={{ fontSize: "1.83vw" }}
          >
            carlsson story
          </p>
        </div>
        <div className="">
          <div
            className=""
            style={{
              backgroundImage: `url(${od11SideTriangle})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "168%",
              height: 0,
              width: "100%",
              backgroundPosition: "45% 34%",
              paddingTop: "100%",
            }}
          ></div>
          <p
            className="flex justify-center mt-4 font-light"
            style={{ fontSize: "1.83vw" }}
          >
            technology
          </p>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${smallOrthoRemote})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: 0,
              width: "100%",
              backgroundPosition: "45% 34%",
              paddingTop: "100%",
            }}
          ></div>
          <p
            className="flex justify-center mt-4 font-light"
            style={{ fontSize: "1.83vw" }}
          >
            ortho remote
          </p>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${orthoPlay})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",

              height: 0,
              width: "100%",
              backgroundPosition: "45% 34%",
              paddingTop: "100%",
            }}
          ></div>
          <p
            className="flex justify-center mt-4 font-light"
            style={{ fontSize: "1.83vw" }}
          >
            orthoplay
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrthoRemotePreview;
