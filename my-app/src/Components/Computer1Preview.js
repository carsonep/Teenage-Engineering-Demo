import React from "react";
import NavBar from "./NavBar";
import computer1Hero from "../images/computer1Hero.jpg";
import computer1DeskSetup from "../images/computer1DeskSetup.jpg";
import computer1Evolution from "../images/computer1Evolution.jpg";
import computer1Teardown from "../images/computer1Teardown.png";
import computer1Dimensions from "../images/computer1Dimensions.svg";
import computer1Grid1 from "../images/computer1Grid1.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Computer1Preview() {
  return (
    <div className="relative z-0">
      <NavBar className="relative inset-0 z-20" textColor={"#cc996c"} />
      <div
        className="-mt-14 md:-mt-14 lg:-mt-44 w-full col-span-6"
        style={{
          backgroundImage: `url(${computer1Hero})`,
          backgroundSize: "100%",
          backgroundPosition: "50% 101.3%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      >
        <h1
          className="absolute flex w-full"
          style={{ top: "4.25%", left: "4.633%", fontSize: "3.33vw" }}
        >
          hey!
        </h1>
        <h2
          className="absolute flex font-light leading-none"
          style={{
            top: "5.5%",
            left: "4.633%",
            fontSize: "1.9vw",
            width: "18%",
          }}
        >
          no big deal. we have made a mini-ITX pc chassis that we call the
          computer–1.
        </h2>
        <h2
          className="absolute flex  font-light leading-tight"
          style={{
            top: "7.25%",
            left: "4.633%",
            fontSize: "1.9vw",
            width: "18%",
            color: "#ed614a",
          }}
        >
          <Link to="/products/computer-1">$195</Link>
        </h2>
      </div>

      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-12 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          a simple, no frills computer.
        </h1>

        <div className="flex justify-center leading-tight">
          <p style={{ width: "35%", fontSize: "1.8vw", marginRight: "2.5%" }}>
            years ago, when we started, we couldn't find a pc case for our own
            builds. so we made our own using a laser cutter, 6 mm high density
            board and spray paint. it was assembled and held together by simple
            wooden plugs. it worked ok for what it was designed for.
            unfortunately, the handles couldn't support{" "}
          </p>

          <p style={{ width: "35%", fontSize: "1.8vw" }}>
            the weight of the unit when moving it around. a couple of literal
            computer crashes later, we turned to a lighter and sturdier design
            using aluminium. we'll always continue to iterate on the design, but
            here we are. it's not a ground-breaking pc case, but we like it, and
            use it everyday. now we'd like to share it with you.
          </p>
        </div>

        <div className="flex w-full items-center flex-col mt-4 md:mt-14 pb-8 lg:pb-20 ">
          <p style={{ fontSize: "1.8333vw" }} className="">
            computer–1 available now!
          </p>
          <p style={{ fontSize: "1.8333vw" }} className="">
            visit store
          </p>
        </div>
        <p className="" style={{ fontSize: "1vw", marginBottom: "-5.5%" }}>
          NOTE: COMPUTER–1 IS A PC CASE ONLY, COMPUTER COMPONENTS ARE PURCHASED
          SEPARATELY.
        </p>
      </div>

      <div
        className=""
        style={{
          backgroundImage: `url(${computer1DeskSetup})`,
          backgroundSize: "100%",
          backgroundPosition: "50% 35%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "90%",
        }}
      ></div>

      <div
        className="flex flex-col justify-center items-center font-light leading-tight -mt-8 md:-mt-16 lg:-mt-36"
        style={{ fontSize: "1.8vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          a small desk footprint.
        </h1>

        <div className="flex justify-center leading-tight">
          <p style={{ width: "35%", fontSize: "1.8vw", marginRight: "2.5%" }}>
            computer–1 takes up minimum desk space, making more room for the
            projects you have at hand. while compact, it's capable of housing a
            wide range of components to fit your needs, whether you are a
            teenager or a banker.
          </p>

          <p style={{ width: "35%", fontSize: "1.8vw" }}>
            the lightweight aluminium, and chrome handles, make it easy to move
            your machine around whenever you need to. with its pure orange RAL
            2004 powder coated finish, it's a small, no frills tool for any
            desktop.
          </p>
        </div>
        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 "></div>
      </div>

      <div
        className=""
        style={{
          backgroundImage: `url(${computer1Evolution})`,
          backgroundSize: "100%",
          backgroundPosition: "50% 85%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "60%",
        }}
      ></div>

      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-12 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          build-it-yourself.
        </h1>

        <div
          className=""
          style={{
            backgroundImage: `url(${computer1Teardown})`,
            backgroundSize: "78.1%",
            backgroundPosition: "50% 40%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "65%",
          }}
        ></div>

        <div
          className="flex justify-center leading-tight"
          style={{ marginTop: "2.5%" }}
        >
          <p style={{ width: "35%", fontSize: "1.7vw", marginRight: "2.5%" }}>
            the build-it-yourself flat pack design is based on the same
            technique we use in our modular series. the powder coated 1 mm
            aluminium is flexible enough to bend into shape, and sturdy enough
            to keep your components secure.
          </p>

          <p style={{ width: "35%", fontSize: "1.7vw" }}>
            each kit comes with all of the parts* required to assemble the case.
            inside you'll find everything from the aluminum sheets to an
            illustrated build guide with instructions and bend angles. just
            remember: think twice, bend once!
          </p>
        </div>

        <div
          className=""
          style={{
            backgroundImage: `url(${computer1Dimensions})`,
            backgroundSize: "45.1%",
            backgroundPosition: "51.5% 40%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "65%",
          }}
        ></div>

        <div
          style={{ fontSize: "1.23vw" }}
          className="flex justify-center -mt-16 lg:-mt-64"
        >
          <ul
            className="w-1/3"
            style={{ marginRight: "5%", paddingLeft: "1%" }}
          >
            <li className="flex flex-col" style={{ paddingBottom: "10%" }}>
              <span className="font-normal">form factor</span>
              <span className="font-light">mini-ITX</span>
            </li>
            <li className="flex flex-col" style={{ paddingBottom: "10%" }}>
              <span className="font-normal">gpu</span>
              <span className="font-light">mini-ITX</span>
            </li>
            <li className="flex flex-col" style={{ paddingBottom: "10%" }}>
              <span className="font-normal">power supply</span>
              <span className="font-light">mini-ITX</span>
            </li>
            <li className="flex flex-col" style={{ paddingBottom: "10%" }}>
              <span className="font-normal">cpu cooler </span>
              <span className="font-light">height limit from motherboard </span>
              <span className="font-light">surface 120 mm</span>
            </li>
            <li className="flex flex-col" style={{ paddingBottom: "10%" }}>
              <span className="font-normal">material</span>
              <span className="font-light">powder coated aluminium</span>
            </li>

            <li className="flex flex-col " style={{ paddingBottom: "10%" }}>
              <span className="font-normal">color</span>
              <span className="font-light">pure orange RAL 2004</span>
            </li>
          </ul>

          <ul className="w-1/3" style={{ marginLeft: "8%", paddingLeft: "5%" }}>
            <li className="flex flex-col" style={{ paddingBottom: "10%" }}>
              <span className="font-normal">outer dimensions (mm)</span>
              <span className="font-light">W 170 D 190* H 322**</span>
            </li>
            <li
              className="flex flex-col"
              style={{ fontSize: ".833vw", paddingBottom: "10%" }}
            >
              <span className="font-light">
                *FRONT PANEL SWITCH PROTRUDES 10 MM, CABLING TYPICALLY NEEDS
                MINIMUM 50 MM SPACE AT THE BACK.
              </span>
              <span className="font-light" style={{ paddingTop: "5%" }}>
                **285 MM WITHOUT HANDLES.
              </span>
            </li>
            <li className="flex flex-col" style={{ paddingBottom: "10%" }}>
              <span className="font-normal"></span>
              <span className="font-light"></span>
            </li>
            <li className="flex flex-col" style={{ paddingBottom: "10%" }}>
              <span className="font-normal">inner dimensions (mm)</span>
              <span className="font-light">W 164 D 189 H 275.5</span>
            </li>
            <li className="flex flex-col" style={{ paddingBottom: "10%" }}>
              <span className="font-light">width from motherboard to case</span>
              <span className="font-light">147 mm </span>
            </li>

            <li className="flex flex-col" style={{ paddingBottom: "10%" }}>
              <span className="font-light">approximate width from </span>
              <span className="font-light">motherboard to case fan* 120</span>
              <span className="font-light">mm</span>
            </li>

            <li
              className="flex flex-col"
              style={{ fontSize: ".833vw", paddingBottom: "5%" }}
            >
              <span className="font-light">
                *DEPENDS ON CASE FAN THICKNESS.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 "></div>

        <div className="grid grid-cols-3" style={{ height: "90vh" }}>
          <div
            className="flex justify-center items-center"
            style={{ outline: "0.001em solid grey" }}
          >
            <img className="" alt="" src={computer1Grid1} />
          </div>
          <div
            className="flex justify-center items-center"
            style={{ outline: "0.001em solid grey" }}
          >
            <img className="" alt="" src={computer1Grid1} />
          </div>
          <div
            className="flex justify-center items-center"
            style={{ outline: "0.001em solid grey" }}
          >
            <img
              className=""
              alt=""
              style={{ width: "200%" }}
              src={computer1Grid1}
            />
          </div>
        </div>
      </div>

      <div
        className="col-span-6  flex justify-center items-center"
        style={{
          backgroundColor: "#f05a24",

          padding: "2.5%",
        }}
      >
        <h1 className=" text-white text-xl md:text-6xl">visit store.</h1>
      </div>
      <Footer textColor={"#a9a9a9"} bgColor={"#0f0e12"} />
    </div>
  );
}

export default Computer1Preview;
