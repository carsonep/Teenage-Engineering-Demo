import React from "react";
import NavBar from "./NavBar";
import poModularHeader from "../images/poModularHeader.jpg";
import cardBoardBg from "../images/cardBoardBg.jpg";
import poKit from "../images/poKit.jpg";
import poModularBoxes from "../images/poModularBoxes.png";
import poModular1 from "../images/poModular1.png";
import poModular2 from "../images/poModular2.png";
import poModular3 from "../images/poModular3.png";
import poModularSide from "../images/poModularSide.png";
import poModularHand from "../images/poModularHand.svg";
import playButton1 from "../images/playButton1.svg";
import rearHandleModular from "../images/rearHandleModular.png";
import poModularBreakdown from "../images/poModularBreakdown.svg";
import poBoxes2 from "../images/poBoxes2.png";
import pdfButton from "../images/pdfButton.svg";
import { NavLink } from "react-router-dom";
import "./styleComponents/Modular.css";

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

          width: "100%",
          height: 0,
          paddingTop: "110%",
        }}
      >
        <div
          className="absolute grid grid-cols-3 gap-4"
          style={{ padding: "0 4.6vw", top: "8%" }}
        >
          <div>
            <div
              className=""
              style={{
                backgroundColor: "#e5e5e5",
                height: "120%",
                backgroundImage: `url(${poModular1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "110%",
                backgroundPosition: "50% 50%",
              }}
            >
              <div
                className="h-1/8 bg-red-500 top-0 justify-center flex justify-center items-center"
                style={{ backgroundColor: "#701d2a", color: "#e5e5e5" }}
              >
                <h1>16</h1>
              </div>
            </div>
            <div
              className="flex justify-between items-center"
              style={{ paddingTop: "5%" }}
            >
              <div className=" leading-tight">
                <p style={{ fontSize: "2vw" }}>$239</p>
                <p className="font-light" style={{ fontSize: "1.33vw" }}>
                  free shipping
                </p>
              </div>
              <NavLink
                to="/store"
                className="flex justify-center items-center rounded-full"
                style={{
                  backgroundColor: "#701d2a",
                  color: `rgb(204, 153, 108)`,
                  height: "75%",
                  width: "11vw",
                }}
              >
                <p style={{ fontSize: "1.833vw" }}>buy now!</p>
              </NavLink>
            </div>

            <div
              className="font-light leading-tight"
              style={{ marginTop: "8%" }}
            >
              <span></span>
              <p style={{ fontSize: "1.8vw" }}>
                the POM-16 is a stand alone keyboard with individual tuneable
                keys and a programmable step sequencer.{" "}
              </p>
            </div>

            <div
              className="font-light leading-tight"
              style={{ marginTop: "8%" }}
            >
              <span></span>
              <p style={{ fontSize: "1.8vw" }}>
                note: the unit is designed to send cv, gate, midi, and po sync
                to control the 400 or other synthesizers. these signals do not
                make sounds.
              </p>
            </div>

            <div
              className="font-light leading-tight"
              style={{ marginTop: "8%" }}
            >
              <ul
                className="list-disc list-inside"
                style={{ fontSize: "1.833vw" }}
              >
                <li>powder coated aluminum chassis</li>
                <li>keyboard and sequencer</li>
                <li>stores up to 64 patterns</li>
                <li>battery power option</li>
              </ul>
            </div>
          </div>

          <div>
            <div
              className=""
              style={{
                backgroundColor: "#e5e5e5",
                height: "120%",
                backgroundImage: `url(${poModular2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "150%",
                backgroundPosition: "50% 50%",
              }}
            >
              <div
                className="h-1/8 bg-red-500 top-0 flex justify-center items-center"
                style={{ backgroundColor: "#a7272d", color: "#e5e5e5" }}
              >
                <h1>170</h1>
              </div>
            </div>
            <div
              className="flex justify-between items-center"
              style={{ paddingTop: "5%" }}
            >
              <div className=" leading-tight">
                <p style={{ fontSize: "2vw" }}>$479</p>
                <p className="font-light" style={{ fontSize: "1.33vw" }}>
                  free shipping
                </p>
              </div>
              <NavLink
                to="/store"
                className="flex justify-center items-center rounded-full"
                style={{
                  backgroundColor: "#a7272d",
                  color: `rgb(204, 153, 108)`,
                  height: "75%",
                  width: "11vw",
                }}
              >
                <p style={{ fontSize: "1.833vw" }}>buy now!</p>
              </NavLink>
            </div>

            <div
              className="font-light leading-tight"
              style={{ marginTop: "8%" }}
            >
              <span></span>
              <p style={{ fontSize: "1.8vw" }}>
                POM-170 is a home build analog monophonic synthesizer with
                built-in programmable sequencer. complete kit with powder coated
                chassis, keyboard, oscillator, filter, envelope, lfo, vca,
                speakerbox, power distro, powerpack, a screwdriver, 8 patch
                cables, and an illustrated build guide.
              </p>
            </div>

            <div
              className="font-light leading-tight"
              style={{ marginTop: "8%" }}
            >
              <ul
                className="list-disc list-inside"
                style={{ fontSize: "1.833vw" }}
              >
                <li>powder coated aluminum chassis</li>
                <li>keyboard and sequencer</li>
                <li>analog oscillator</li>
                <li>on-board speaker</li>
                <li>battery power option</li>
              </ul>
            </div>
          </div>

          <div>
            <div
              className=""
              style={{
                backgroundColor: "#e5e5e5",
                height: "120%",
                backgroundImage: `url(${poModular3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "140%",
                backgroundPosition: "56% 70%",
              }}
            >
              <div
                className="h-1/8 bg-red-500 top-0 flex justify-center items-center"
                style={{
                  backgroundColor: "#ffa00a",
                  color: "#e5e5e5",
                }}
              >
                <h1>16</h1>
              </div>
            </div>
            <div
              className="flex justify-between items-center"
              style={{ paddingTop: "5%" }}
            >
              <div className=" leading-tight">
                <p style={{ fontSize: "2vw" }}>$239</p>
                <p className="font-light" style={{ fontSize: "1.33vw" }}>
                  free shipping
                </p>
              </div>
              <NavLink
                to="/store"
                className="flex justify-center items-center rounded-full"
                style={{
                  backgroundColor: "#ffa00a",
                  color: `rgb(204, 153, 108)`,
                  height: "75%",
                  width: "11vw",
                }}
              >
                <p style={{ fontSize: "1.833vw" }}>buy now!</p>
              </NavLink>
            </div>

            <div
              className="font-light leading-tight"
              style={{ marginTop: "8%" }}
            >
              <span></span>
              <p style={{ fontSize: "1.8vw" }}>
                POM-400 is an analog synthesizer with 3 oscillators, noise,
                random generator, 2 envelopes, 2 vca’s, lfo, filter, mixer,
                speakerbox, power pack and a 1-16 step sequencer. complete kit
                with powder coated chassis, 16 modules, 15 patch cables,
                screwdriver, and an illustrated build guide.
              </p>
            </div>

            <div
              className="font-light leading-tight"
              style={{ marginTop: "8%" }}
            >
              <ul
                className="list-disc list-inside"
                style={{ fontSize: "1.833vw" }}
              >
                <li>powder coated aluminum chassis</li>
                <li>sequencer</li>
                <li>three oscillators</li>
                <li>on-board speaker</li>
                <li>battery power option</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" bg-red-500"
        style={{
          backgroundImage: `url(${poKit})`,

          backgroundSize: "cover",
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "65%",
        }}
      ></div>

      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(${cardBoardBg})`,
          width: "100%",
          height: 0,
          paddingTop: "100%",
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
            backgroundImage: `url(${poModularSide})`,
            backgroundSize: "85.3%",
            backgroundPosition: "56.3% 92%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "120%",
            top: "-45%",
          }}
        ></div>
        <div
          className="absolute left-0 z-10"
          style={{
            backgroundImage: `url(${poModularHand})`,
            backgroundSize: "50%",
            backgroundPosition: "-19.5% 88.5%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "120%",
            top: "-68%",
          }}
        ></div>
        <h1
          className="absolute flex justify-center w-full font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw", bottom: "30%" }}
        >
          pure analog.
        </h1>
        <div
          className="absolute flex w-full justify-around"
          style={{ fontSize: "3.333vw", bottom: "7.5%", padding: "0 15vw" }}
        >
          <div className="">
            <img
              className="flex justify-center  w-full h-1/2"
              src={playButton1}
            />
            <p className="font-light pt-4" style={{ fontSize: "1.833vw" }}>
              {" "}
              sequence and tweak
            </p>
          </div>
          <div className="">
            <img
              className="flex justify-center  w-full h-1/2"
              src={playButton1}
            />
            <p className="font-light pt-4" style={{ fontSize: "1.833vw" }}>
              {" "}
              sequence and tweak
            </p>
          </div>
          <div className="">
            <img
              className="flex justify-center  w-full h-1/2"
              src={playButton1}
            />
            <p className="font-light pt-4" style={{ fontSize: "1.833vw" }}>
              {" "}
              sequence and tweak
            </p>
          </div>
        </div>

        <div
          className="absolute flex flex-col text-center w-full bottom-0 font-light pb-8"
          style={{ fontSize: "1vw" }}
        >
          <span>DEMOS BY:</span>
          <span>JOSEPH PAILO, TOBIAS VON HOFSTEN & NEDAVINE</span>
        </div>
      </div>
      <div
        className=" "
        style={{
          backgroundImage: `url(${rearHandleModular})`,
          backgroundColor: "#e5e5e5",
          backgroundSize: "93.5%",
          backgroundPosition: "50% 65%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "80%",
        }}
      ></div>

      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(${cardBoardBg})`,
          width: "100%",
          height: 0,
          paddingTop: "120%",
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
          className="absolute flex flex-col text-center w-full font-light leading-tight"
          style={{ top: "10.5%", fontSize: "1.833vw" }}
        >
          <span>
            for all three systems, you have to do the final assembly yourself.
          </span>
          <span>here are all parts included to build the 170:</span>
        </div>

        <div
          className="absolute left-0 z-10"
          style={{
            backgroundImage: `url(${poModularBreakdown})`,
            backgroundSize: "90.3%",
            backgroundPosition: "50% 92%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "120%",
            top: "-32.5%",
          }}
        ></div>

        <div
          id="modular__title"
          className="absolute flex flex-col justify-center items-center"
          style={{ fontSize: "1.833vw", padding: "0 5vw" }}
        >
          <h1
            style={{ fontSize: "3.33vw" }}
            className="md:pb-4 lg:pb-10 tracking-tight "
          >
            think twice, bend once.
          </h1>
          <div className="grid grid-cols-3 gap-4 leading-tight font-light">
            <span
              className=""
              style={{ paddingTop: "3vh", paddingBottom: "5vh" }}
            >
              each kit comes with all of the parts needed to build the project.
              included in these flat packed synthesizers are everything from a
              powder coated
            </span>
            <span
              className=""
              style={{ paddingTop: "3vh", paddingBottom: "5vh" }}
            >
              aluminum chassis to an illustrated build guide with instructions
              and bend angles. when bending is complete, move on to mount the
              modules,
            </span>
            <span
              className=""
              style={{ paddingTop: "3vh", paddingBottom: "5vh" }}
            >
              snap the wire connectors and finalize your build with knobs and
              rubber feet. remember, think twice and double-check the angles
              before bending.
            </span>
          </div>{" "}
          <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
            <div></div>
          </div>
        </div>
        <div
          className="absolute w-full flex flex-col items-center"
          style={{ bottom: "2.5%" }}
        >
          <img src={pdfButton} style={{ width: "15%" }} />
          <span className="font-light" style={{ fontSize: "1.833vw" }}>
            download manual for the 16, 170 and 400 as a pdf.
          </span>
        </div>
      </div>

      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(${cardBoardBg})`,
          backgroundRepeat: "repeat",
          width: "100%",
          height: 0,
          paddingTop: "240%",
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
            backgroundImage: `url(${poBoxes2})`,
            backgroundSize: "98.1%",
            backgroundPosition: "50% 0%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "80%",
            top: "3.5%",
          }}
        ></div>

        <div
          className="absolute bottom-0 w-full flex flex-col text-center"
          style={{ bottom: "63.5%" }}
        >
          <h1
            style={{ fontSize: "3.33vw" }}
            className="md:pb-4 lg:pb-10 tracking-tight "
          >
            connect on a deeper level.
          </h1>

          <div
            className="flex flex-col font-light leading-tight"
            style={{ fontSize: "1.633vw" }}
          >
            <span>meet the modules, patch them together </span>
            <span>in endless combinations. </span>
          </div>
        </div>

        <div
          className="absolute  grid grid-cols-6 gap-2 md:gap-6 font-light leading-tight"
          style={{ padding: "0 4.6vw", fontSize: "1.333vw", bottom: "34.5%" }}
        >
          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{ backgroundColor: "#183f80", minHeight: "25%" }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>square</span>
            <span>square oscillator</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              rich in odd harmonics, the square wave oscillator is great for
              hollow basses and screaming leads. the pulse width modulation
              (pwm) input makes it possible to generate a faux two oscillator
              detune sound.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{ backgroundColor: "#183f80", minHeight: "25%" }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>saw</span>
            <span>sawtooth oscillator</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              containing both the odd and even harmonics, the sawtooth is great
              for string types of sound. the linear frequency modulation input
              (fm) easily brings you into the sci-fi domain.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{ backgroundColor: "#183f80", minHeight: "25%" }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>sine</span>
            <span>sine oscillator</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              with no overtones the pure sine wave is a jack of all trades. from
              pure bass to dub sirens, it's the army knife of a modular system.
              the linear frequency modulation input (fm) easily brings you into
              the sci-fi domain.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{ backgroundColor: "#183f80", minHeight: "25%" }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>filter</span>
            <span>low pass filter</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              shape your sound with the 24db/oct low pass filter. get lost in
              space while tweaking the frequency and resonance pots, capable of
              self-oscillation.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{ backgroundColor: "#183f80", minHeight: "25%" }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>env</span>
            <span>envelope</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              a classic. attack, decay, sustain and release. give your sonic
              creation the contour it deserves. triggered by any signal that
              crosses the two volt threshold.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{ backgroundColor: "#183f80", minHeight: "25%" }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>vca</span>
            <span>voltage control amplifier</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              automate your volume! feed it control voltage and your signal will
              adapt accordingly. best friends with the envelope for classic
              configurations, and your oscillator in wired configurations.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{
                backgroundColor: "#183f80",
                minHeight: "25%",
                maxHeight: "25%",
              }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>mixer</span>
            <span>3-channel mixer</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              a necessity in all modular systems. three inputs, one output with
              volume control over both the individual inputs as well as the
              master output.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{
                backgroundColor: "#183f80",
                minHeight: "25%",
                maxHeight: "25%",
              }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>noise</span>
            <span>2 x noise</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              the white noise contains noise equal over the whole spectrum. the
              saw output is a perfect companion for the sample and hold.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{ backgroundColor: "#183f80", minHeight: "25%" }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>rand</span>

            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              randomise your music with the sample and hold. any input is
              sampled and then presented at the outputs. rate can be controlled
              both externally and internally, but always needs an external
              signal to sample. experiment with both receptive and random
              sources as the sample input.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{ backgroundColor: "#183f80", minHeight: "25%" }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>lfo</span>
            <span>low frequency oscillator</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              generating both square as well as triangle waves, the low
              frequency oscillator is the perfect tool to spice up your patches.
              great in everything from automated filter sweeps to syncing the
              clocks.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{ backgroundColor: "#183f80", minHeight: "25%" }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>speaker</span>
            <span>amplifier+speaker bellow</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              cables goes in, sounds come out. show off your amazing patch to
              the rest of the world. let them hear it.
              <br />
              warning: never connect headphones directly to the outputs! you can
              damage your ears and your headphones.
            </span>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-full rounded-md md:rounded-lg"
              style={{ backgroundColor: "#183f80", minHeight: "25%" }}
            ></div>
            <span style={{ color: "#e5e5e5" }}>sequencer</span>
            <span>16-step sequencer</span>
            <span style={{ fontSize: "1.333vw", marginBottom: "60%" }}>
              sixteen steps of control. override the internal clock with the
              clock input. send clock out or po sync out. make it go backwards
              with the arrow input. jump to the first step, the second, fourth
              or eight step with the reset and binary.
            </span>
          </div>
        </div>
        <div
          className="absolute w-full flex flex-col items-center"
          style={{ bottom: "22.5%" }}
        >
          <img src={pdfButton} style={{ width: "15%" }} />
          <span className="font-light" style={{ fontSize: "1.833vw" }}>
            download the system dimensions guide
          </span>
          <span className="font-light" style={{ fontSize: "1.833vw" }}>
            to make your own conversion from 'pocket rack' to eurorack.
          </span>
        </div>
        <div
          className="absolute  w-full flex flex-col text-center"
          style={{ bottom: "3.5%" }}
        >
          <h1
            style={{ fontSize: "3.33vw" }}
            className="md:pb-4 lg:pb-10 tracking-tight "
          >
            get started with modular.
          </h1>

          <div
            className="grid grid-cols-2 gap-4"
            style={{ padding: "0 4.6vw", marginTop: "2%", height: "100%" }}
          >
            <div>
              <iframe
                width="100%"
                height="100%"
                scrolling="no"
                frameborder="no"
                allowtransparency="true"
                webkitallowfullscreen=""
                mozallowfullscreen=""
                allowfullscreen=""
                sandbox="allow-same-origin allow-popups allow-scripts allow-top-navigation allow-presentation"
                class="yt-embed uninitialized"
                src="https://www.youtube.com/embed/5CTRxUn-SJk?enablejsapi=1&amp;autoplay=0&amp;showinfo=0&amp;modestbranding=1&amp;rel=0"
                // style={{display: }}
              ></iframe>
            </div>
            <div className="bg-red-500">
              <iframe
                width="100%"
                height="100%"
                scrolling="no"
                frameborder="no"
                allowtransparency="true"
                webkitallowfullscreen=""
                mozallowfullscreen=""
                allowfullscreen=""
                sandbox="allow-same-origin allow-popups allow-scripts allow-top-navigation allow-presentation"
                class="yt-embed uninitialized"
                src="https://www.youtube.com/embed/PDQvvCCR8Vw?enablejsapi=1&amp;autoplay=0&amp;showinfo=0&amp;modestbranding=1&amp;rel=0"
                // style="display: none;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default poModularScreen;
