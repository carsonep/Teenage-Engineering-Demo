import React from "react";
import NavBar from "./NavBar";
import ob4PageHeader from "../images/ob4PageHeader.png";
import ob4RedCarrier from "../images/ob4RedCarrier.jpg";
import ob4Animated from "../images/ob4Animated.jpg";
import ambientBall from "../images/ambientBall.jpg";
import metronomeBell from "../images/metronomeBell.jpg";
import karmaImage from "../images/karmaImage.jpg";
import ob4Hero from "../images/ob4Hero.png";
import op4Carrier from "../images/op4Carrier.png";

function Ob4Screen() {
  return (
    <div className="relative z-0">
      <NavBar className="relative inset-0 z-20" textColor={"#fff"} />
      <div
        className="-mt-14 md:-mt-14 lg:-mt-44 w-full"
        style={{
          backgroundImage: `url(${ob4PageHeader})`,
          backgroundSize: "101.1%",
          backgroundPosition: "50% 30%",
          backgroundRepeat: "no",
          width: "100%",
          height: 0,
          paddingTop: "120%",
        }}
      >
        <h1
          className="absolute flex justify-center w-full text-white"
          style={{ top: "3.5%", fontSize: "3.33vw" }}
        >
          the magic radio.
        </h1>
        <h2
          className="absolute flex font-light leading-none text-white"
          style={{
            top: "3.65%",
            left: "62.5%",
            fontSize: "1.9vw",
            width: "18%",
          }}
        >
          OB-4
        </h2>

        <div
          className="flex absolute justify-center leading-tight font-light z-50"
          style={{ color: "#b2b2ab", top: "22.75%" }}
        >
          <p style={{ width: "30%", fontSize: "1.8vw", marginRight: "2.5%" }}>
            introducing OB–4, the portable high fidelity loudspeaker with two
            4'' bass drivers and a pair of neodymium tweeters that deliver
            crystal clear, open natural sound with 38 watts per channel — that's
            around 100 decibels
          </p>

          <p style={{ width: "30%", fontSize: "1.8vw" }}>
            of incredible sounding stereo. listen using line input, bluetooth,
            FM radio and disk. the interface is minimal, with only the things
            you really need. yet if you look below the surface, there's a lot
            more than meets the eye.
          </p>
        </div>
      </div>

      <div className="h-screen bg-black">
        <iframe
          id="te-b9fcfe52-35be586a-2bf80289"
          // width="50vw"
          height="195.91836734693877%"
          scrolling="no"
          frameborder="no"
          allowtransparency="true"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
          sandbox="allow-same-origin allow-popups allow-scripts allow-top-navigation allow-presentation"
          className="w-screen"
          style={{ height: "100%" }}
          src="https://player.vimeo.com/video/462682237?background=1"
        ></iframe>
      </div>

      <div className="bg-black">
        <div className="grid grid-cols-4 text-white">
          <div className="row-span-1">
            <h2>natural sound</h2>
            <p style={{ fontSize: "18px" }}>
              four tailor-engineered speaker elements deliver pure quality sound
              and a stereo field that fills the entire room. a flow-optimised
              bass reflex duct delivers deep natural bass.
            </p>
          </div>
          <div>
            <h2>72 hrs listening</h2>
            <p>
              how about normal radio listening for a week without charging? the
              high capacity lipo battery delivers about 8 hours of noise at max
              volume, or an average of 40 hours on a single charge.
            </p>
          </div>
          <div>
            <h2>the wireless part</h2>
            <p>
              the OB–4 hardware platform supports both high-definition bluetooth
              classic and bluetooth low energy standards. works with ortho
              remote for wireless volume control.
            </p>
          </div>
          <div>
            <h2>smart antenna</h2>
            <p>
              we've spent years fiddling with the antenna so you won't have to.
              and for those tricky listening places, we've included a fine-tuned
              smart spiral antenna that neatly integrates in the handle.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ height: "1500px", backgroundImage: `url(${ob4Animated})` }}
      ></div>
      <div className="bg-black">
        <h1>turn your mind on with disk mode.</h1>
        <div className="flex  justify-center">
          <p className="w-1/4">
            the magic radio. OB–4 introducing OB–4, the portable high fidelity
            loudspeaker with two 4'' bass drivers and a pair of neodymium
            tweeters that deliver crystal clear, open natural sound with 38
            watts per channel — that's around 100 decibels
          </p>
          <p className="w-1/4">
            of incredible sounding stereo. listen using line input, bluetooth,
            FM radio and disk. the interface is minimal, with only the things
            you really need. yet if you look below the surface, there's a lot
            more than meets the eye.{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div
          style={{
            backgroundImage: `url(${ambientBall})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          {/* <img className="relative" src={ambientBall} /> */}
          <h1 className="absolute">ambient</h1>
          <p>zone out to a drone generated by snippets of a radio broadcast.</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${metronomeBell})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          {/* <img src={metronomeBell} /> */}
          <h1 className="absolute">metronome</h1>
          <p>high def stereo recording. 1 beat per minute, up to 800.</p>
        </div>
        <div
          style={{
            minHeight: "150vh",
            backgroundImage: `url(${karmaImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img src={karmaImage} /> */}
          <h1 className="absolute">karma</h1>
          <p>30 in 1 musical mantra box. your spiritual companion.</p>
        </div>
      </div>
      <div
        style={{
          height: "1500px",
          backgroundImage: `url(${ob4Hero})`,
          backgroundSize: "100%",
        }}
      >
        <h1 className="text-5xl font-base flex justify-center">
          the handle-stand
        </h1>
        <div className="flex  justify-center">
          <p className="w-1/4">
            designed to be played outdoors, in public spaces and at high volume;
            carried on one shoulder with speaker elements facing the head. note:
            it is assumed that passers-by share the same musical taste.
          </p>
          <p className="w-1/4">
            or why not give it a home in your kitchen? with any luck, the iconic
            handle makes it a breeze to carry anywhere, and can even be used as
            a stand for a more relaxed listening position.
          </p>
        </div>
      </div>
      <div className="text-black">
        <img src={op4Carrier} className="h-full" />
      </div>
      <div>
        <h1 className="text-5xl font-base flex justify-center">
          bill amberg edition.
        </h1>
        <div className="flex  justify-center">
          <p className="w-1/4">
            made in london by our friends at bill amberg studio. the OB–4
            leather bag is the elegant protection you need when you walk the
            street in that high fashion district in a metropolitan city
            somewhere. or, when you just want to round off the edges of OB–4 and
            feel the soft touch of genuine leather.
          </p>
          <p className="w-1/4">
            ultra durable cow hide is hand stitched along four edges for a
            perfectly tailored and acoustically transparent fit. the detachable
            strap can be adjusted to several lengths. each of these first
            edition bags are unique and hand marked with an edition number.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ob4Screen;
