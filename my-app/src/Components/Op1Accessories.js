import React from "react";
import NavBar from "./NavBar";
import op1Accessories from "../images/op1Accesories.png";
import op1Antenna from "../images/op1Antenna.png";
import blueCrank from "../images/blueCrank.png";
import op1Knobs from "../images/op1Knobs.png";
import orangeCrank from "../images/orangeCrank.png";
import op1KitBox from "../images/op1KitBox.png";
import op1Guide from "../images/op1Guide.jpg";

function Op1Accessories() {
  return (
    <div style={{ backgroundColor: "#c8c8cd" }}>
      <NavBar bgColor={"#c8c8cd"} textColor={"#000"} />
      <div className="grid grid-cols-12 gap-4" style={{ padding: "5% 4.6vw" }}>
        <div className="col-span-2 font-light leading-tight">
          <h2 style={{ fontSize: "1.8vw" }} className="leading-none">
            OP-1 accessories
          </h2>
          <p style={{ fontSize: "1vw", paddingTop: "5%" }}>
            the OP-1 world is continuously evolving with new accessories and new
            os updates adding more effects and functions with every release.
            with OP-1‘s modular architecture, all this new functionality comes
            without adding any complexity to the user interface or resulting in
            over-clustered screens. your OP-1 will always be intuitive and
            simple to use.
          </p>
          <p style={{ fontSize: "1.33vw", paddingTop: "5%" }}>
            watch video here.
          </p>
        </div>

        <div
          className="col-span-7 font-light"
          style={{
            backgroundImage: `url(${op1Accessories})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundColor: "#e5e5e5",
            paddingTop: "100%",
          }}
        >
          <h1 className="" style={{ paddingTop: "2%", fontSize: "1.8vw" }}>
            OP-1 accessory kit
          </h1>
          <p className="" style={{ fontSize: ".833vw" }}>
            includes fm antenna, crank, bender and brick shafts.
          </p>
          <p style={{ fontSize: "1.333vw", paddingTop: "1.5%" }}>$75</p>
        </div>

        <div
          className="col-span-3 font-light"
          style={{
            backgroundImage: `url(${op1Antenna})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "275%",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundColor: "#7f7f7f",
            paddingTop: "238.5%",
          }}
        >
          {" "}
          <h1 className="" style={{ paddingTop: "2%", fontSize: "1.8vw" }}>
            fm antenna
          </h1>
          <p
            className="leading-tight"
            style={{ paddingTop: "1.5%", fontSize: ".833vw", width: "75%" }}
          >
            3.5 mm plug-in radio antenna for better signal reception when indoor
            or in remote areas.
          </p>
        </div>

        <div
          className="col-start-3 col-span-3 font-light leading-tight"
          style={{
            backgroundImage: `url(${blueCrank})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 50%",
            paddingTop: "100%",
            backgroundColor: "#0071bb",
            marginTop: "46.5%",
          }}
        >
          <h1 className="" style={{ paddingTop: "2%", fontSize: "1.8vw" }}>
            crank
          </h1>
          <p className="" style={{ fontSize: ".833vw", paddingTop: "1.5%" }}>
            mount the crank accessory on OP-1‘s blue knob and press shift + rec.
            your OP-1 is now in “hand-crank-recording mode”. use the crank to
            create some real vintage old skool recordings. it’s also possible to
            crank counter clockwise, to record backwards. all in realtime. the
            crank also lets you use the endless sequencer as a hand cranked
            music box! just enter the notes and crank the crank! the crank LFO
            lets you crank any parameter.
          </p>
        </div>

        <div
          className="col-start-6 col-span-3 font-light leading-tight"
          style={{
            backgroundImage: `url(${orangeCrank})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundColor: "#e5e5e5",
            paddingTop: "100%",
            marginTop: "46.5%",
          }}
        >
          <h1 className="" style={{ paddingTop: "2%", fontSize: "1.8vw" }}>
            bender
          </h1>
          <p className="" style={{ fontSize: ".833vw", paddingTop: "1.5%" }}>
            bender mounts on the orange knob and comes with a rubberband that is
            attached around the blue knob for elasticity. by selecting the
            bender in the LFO browser, you may bend any parameter you like.
            everything from pitch to filter or syntesizer parameters.
          </p>
        </div>

        <div
          className="col-start-9 col-span-4 font-light leading-tight"
          style={{
            backgroundImage: `url(${op1Knobs})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundColor: "#b2b2b2",
            paddingTop: "74.5%",
            marginTop: "34.5%",
          }}
        >
          <h1 className="" style={{ paddingTop: "2%", fontSize: "1.8vw" }}>
            brick shaft
          </h1>
          <p className="" style={{ fontSize: ".833vw", paddingTop: "1.5%" }}>
            brick shafts are LEGO® compatible shafts that you put on any of the
            knobs. now you may mount any lego part. why not put on a big lego
            rubber wheel for that extra grip? or build your own motor driven
            programmable LFO together with LEGO® MINDSTORMS? the brick shaft
            comes in four colors and lets you experiment with any parameter. it
            supports any idea you may have that involves LEGO® bricks.
          </p>
        </div>

        <div
          className=" col-span-2 font-light leading-tight"
          style={{ marginTop: "120.5%" }}
        >
          <h2 style={{ fontSize: "1.8vw" }} className="leading-none">
            how to use the accessories
          </h2>
          <p style={{ fontSize: "1vw", paddingTop: "5%" }}>
            there is a printed manual included in the accessories packaging,
            with detailed instructions on how to use them with your OP-1.
          </p>
          <p style={{ fontSize: "1vw", paddingTop: "5%" }}>
            you can also find the instructions under our guides section.
          </p>
        </div>

        <div
          className="col-span-5 font-light"
          style={{
            backgroundImage: `url(${op1KitBox})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundColor: "#e5e5e5",
            paddingTop: "100%",
            marginTop: "46.5%",
          }}
        ></div>

        <div
          className="col-span-5 font-light"
          style={{
            backgroundImage: `url(${op1Guide})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 0,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundColor: "#e5e5e5",
            paddingTop: "100%",
            marginTop: "46.5%",
          }}
        ></div>
      </div>

      <div
        className="grid grid-cols-6 gap-4 font-light leading-tight"
        style={{ padding: "2.5% 4.6vw", backgroundColor: "#e5e5e5" }}
      >
        <div>
          <h2 style={{ paddingBottom: "10%", fontSize: "2vw" }}>manual</h2>
          <p style={{ fontSize: ".88vw" }}>
            here you'll find the latest downloadable version of OP-1 user manual
            and the OP-1 accessories manual. if you just have general interest
            in the OP-1, but still don't own one, reading these manuals is a
            good way to understand it's functions and features. the user manual
            is available online.
          </p>
        </div>
        <div>
          <h2 style={{ paddingBottom: "10%", fontSize: "2vw" }}>videos</h2>
          <p style={{ fontSize: ".88vw" }}>
            check out the latest tutorial videos and learn how to get the most
            out of your OP-1. tons of pro-tips and other useful information is
            shared by our very own OP-1 genius.
          </p>
        </div>
        <div>
          <h2 style={{ paddingBottom: "10%", fontSize: "2vw" }}>sounds</h2>
          <p style={{ fontSize: ".88vw" }}>
            share sounds and presets here. everything from synthesizer sounds to
            complete drum sample kits.
          </p>
        </div>
        <div>
          <h2 style={{ paddingBottom: "10%", fontSize: "2vw" }}>accessories</h2>
          <p style={{ fontSize: ".88vw" }}>
            expand your OP-1 with the OP-1 accessory kit. it comes with an FM
            antenna, a crank, a bender and LEGO™ compatible brick shafts.
          </p>
        </div>
        <div>
          <h2 style={{ paddingBottom: "10%", fontSize: "2vw" }}>os update</h2>
          <p style={{ fontSize: ".88vw" }}>
            updating your OP-1 is as easy as copying a file to an external usb
            disk. first download the latest os here. then connect your OP-1 to
            your computer with the usb cable.
          </p>
        </div>
        <div>
          <h2 style={{ paddingBottom: "10%", fontSize: "2vw" }}>buy now</h2>
          <p style={{ paddingBottom: "10%", fontSize: "2.13vw" }}>
            from $1 299
          </p>
          <p className="underline" style={{ fontSize: "1.33vw" }}>
            visit store
          </p>
        </div>
      </div>
    </div>
  );
}

export default Op1Accessories;
