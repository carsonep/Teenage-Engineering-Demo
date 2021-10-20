import React from "react";
import NavBar from "./NavBar";

import i1Side from "../images/i1Side.jpg";
import i1Back from "../images/i1Back.png";
import i1App from "../images/i1App.jpg";
import i1Header from "../images/i1Header.jpg";
import poloroid1 from "../images/poloroid1.jpg";
import poloroid2 from "../images/poloroid2.jpg";
import poloroid3 from "../images/poloroid3.jpg";
import poloroid4 from "../images/poloroid4.jpg";

function I1Preview() {
  return (
    <div className="relative">
      <NavBar textColor={"#d59911"} />
      <div
        className="-mt-44"
        style={{
          backgroundImage: `url(${i1Header})`,

          backgroundSize: "103%",
          backgroundPosition: "45% 45%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "58%",
        }}
      ></div>

      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-8 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12 w-1/2 text-center"
          style={{ fontSize: "3.333vw" }}
        >
          the original instant camera. reinvented.
        </h1>
        <span>the I-1 is the first new camera system in over twenty years</span>
        <span>
          for the original Polaroid® instant photo format. it's an easy to use
        </span>
        <span>
          point and shoot instant camera, with a variety of unique and
        </span>
        <span>
          innovative features designed to take your photography further.
        </span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
          <div></div>
        </div>
      </div>

      <div
        className="col-span-6 h-36 md:h-56 flex flex-col justify-center items-center font-light"
        style={{
          backgroundColor: "#0f0e12",
        }}
      >
        <h1 style={{ color: "#e5e5e5", fontSize: "2.333vw" }}>
          DESIGN OF THE YEAR - STUFF MAGAZINE
        </h1>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${i1Side})`,

          backgroundSize: "165%",
          backgroundPosition: "60% 15%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "65%",
        }}
      ></div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-8 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-16 lg:pb-24 w-2/5 text-center"
          style={{ fontSize: "3.333vw" }}
        >
          beautifully engineered. easy to use.
        </h1>
        <span>
          the I-1 gives instant photographers new levels of manual control
        </span>
        <span>
          through its bluetooth app. it has a ring flash that provides soft,
          diffused
        </span>
        <span>
          light, and an autofocus system that makes it perfect for portraits.
        </span>
        <span>this is an analog camera truly made for the digital age.</span>

        <div className="flex mt-0 pb-12 md:pb-16 lg:pb-24 ">
          <div></div>
        </div>
      </div>

      <div
        className="grid grid-cols-4 gap-4 p-8 md:p-12 lg:p-24"
        style={{
          backgroundColor: "#0f0e12",
        }}
      >
        <div className="flex justify-center items-center">
          <img className="" src={poloroid1} />
        </div>
        <div className="flex justify-center items-center">
          <img className="" src={poloroid2} />
        </div>
        <div className="flex justify-center items-center">
          <img className="" src={poloroid3} />
        </div>
        <div className="flex justify-center items-center">
          <img className="" src={poloroid4} />
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-8 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-16 lg:pb-24 text-center"
          style={{ fontSize: "3.333vw" }}
        >
          real photos in your palm.
        </h1>
        <span>the I-1 makes real photos, that you can pin to the wall or</span>
        <span>
          give to a friend. photos with a life after the shutter clicks.
        </span>
        <span>
          it uses the impossible I-type instant films, which is optimised for
          I-type
        </span>
        <span>cameras. you can also use the I-1 with any 600 type film.</span>

        <div className="flex mt-8 md:mt-14 pb-12 md:pb-12 lg:pb-36 ">
          <p style={{ fontSize: "1.8333vw" }} className="mr-8">
            600-type film pack $19
          </p>
          <p style={{ fontSize: "1.8333vw" }}>visit store</p>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${i1App})`,

          backgroundSize: "120%",
          backgroundPosition: "45% 68%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "60%",
        }}
      ></div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-8 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-16 lg:pb-24 w-2/5 text-center"
          style={{ fontSize: "3.333vw" }}
        >
          an app to take your photography further.
        </h1>
        <span>
          the optional I-1 app for iOS lets you do even more with your camera.
        </span>
        <span>
          access useful additional features, add creative effects to your images
        </span>
        <span>and experiment with manual controls.</span>

        <div className="flex mt-8 md:mt-12 pb-12 md:pb-16 lg:pb-36 ">
          <p style={{ fontSize: "1.8333vw" }} className="mr-8">
            download the app
          </p>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${i1Back})`,
          backgroundColor: "#0f0e12",
          backgroundSize: "80%",
          backgroundPosition: "65% center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "65%",
        }}
      ></div>
      <div
        className="col-span-6 h-28 lg:h-48 flex flex-col justify-center items-center"
        style={{
          backgroundColor: "#fab413",
        }}
      >
        <h1 style={{ fontSize: "1.333vw" }} className="font-light">
          DESIGNED BY TEENAGE ENGINEERING FOR IMPOSSIBLE.
        </h1>
      </div>
    </div>
  );
}

export default I1Preview;
