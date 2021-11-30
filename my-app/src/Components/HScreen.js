import React from "react";
import NavBar from "./NavBar";
import hHeader from "../images/hHeader.jpg";
import hTable from "../images/hTable.jpg";
import hTable2 from "../images/hTable2.jpg";
import hTable3 from "../images/hTable3.jpg";
import hTable4 from "../images/hTable4.jpg";

function HScreen() {
  return (
    <div>
      <NavBar textColor={"#f05a24"} bgColor={"e5e5e5"} />
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${hHeader})`,

          backgroundSize: "110.1%",
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "73.35%",
        }}
      ></div>

      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-14 md:mt-14 lg:mt-20"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          introducing H.
        </h1>
        <span>
          in silicon valley they would call a device like the H a 'smart
          speaker'.
        </span>
        <span>
          our friends in beijing, who asked us to collaborate on the H,
        </span>
        <span>
          rather talk about it in terms like 'a colorful device for splendid
          moments' and
        </span>
        <span>
          'flexible operations for life guidance'. we think that's a quite
          humble way for them to
        </span>
        <span>talk about their world leading AI technology.</span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-20 ">
          <span style={{ fontSize: "1.33vw" }}> watch presentation film</span>
        </div>
      </div>

      <div
        className="w-full"
        style={{
          backgroundImage: `url(${hTable})`,

          backgroundSize: "110.1%",
          backgroundPosition: "50% 69.7%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "73.35%",
        }}
      ></div>

      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-14 md:mt-14 lg:mt-20"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          the friendly AI friend.
        </h1>
        <span>
          raven calls the technology inside the H warm science, and we agree
          with that.
        </span>
        <span>
          with H you can easily acquire information in a quick way at home.
        </span>
        <span>
          using the baidu knowledge graph you can ask H to assist you with just
        </span>
        <span>
          about anything. so, say hello to H, your slatted life companion.
        </span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-20 ">
          <span style={{ fontSize: "1.33vw" }}></span>
        </div>
      </div>
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${hTable2})`,

          backgroundSize: "110.1%",
          backgroundPosition: "50% 67.1%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      ></div>

      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-14 md:mt-14 lg:mt-20"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          interactive dot matrix display.
        </h1>
        <span>
          H and R share the same innovative, touch sensitive dot matrix display.
        </span>
        <span>
          the interface, the microphone and touch controls are simultaneously
        </span>
        <span>
          active and its integrated battery guarantees you free movement.
        </span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-20 ">
          <span style={{ fontSize: "1.33vw" }}></span>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div
          className="w-full"
          style={{
            backgroundImage: `url(${hTable3})`,

            backgroundSize: "110.1%",
            backgroundPosition: "50% 67.1%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "100%",
          }}
        ></div>
        <div
          className="w-full"
          style={{
            backgroundImage: `url(${hTable4})`,

            backgroundSize: "100%",
            backgroundPosition: "50% 65%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "100%",
          }}
        ></div>
      </div>

      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-14 md:mt-14 lg:mt-20"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          want to know more?
        </h1>
        <span>the H is exclusively available in china via raven. for now.</span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-20 ">
          <span style={{ fontSize: "1.33vw" }}>visit raven </span>
        </div>
      </div>

      <div
        className="col-span-6 h-40 lg:h-64 flex flex-col justify-center items-center"
        style={{
          backgroundColor: "#0f0e12",
        }}
      >
        <h1 style={{ color: "#e5e5e5", fontSize: "3.333vw" }}>raven</h1>
      </div>
    </div>
  );
}

export default HScreen;
