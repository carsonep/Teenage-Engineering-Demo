import React from "react";
import NavBar from "./NavBar";
import poMegaman from "../images/poMegaman.jpg";
import poBoxes from "../images/poBoxes.png";
import poDripBoxes from "../images/poDripBoxes.jpg";
import poTonix from "../images/poTonix.jpg";
import poWithCase from "../images/poWithCase.jpg";
import poArcade from "../images/poArcade.png";
import poRhythm from "../images/poRhythm.png";
import poSub from "../images/poSub.png";
import poFactory from "../images/poFactory.png";
import poArcadeList from "../images/poArcadeList.png";
import poOffice from "../images/poOffice.png";
import poRobot from "../images/poRobot.png";
import poTonic from "../images/poTonic.png";
import po33 from "../images/po33.png";
import poSpeak from "../images/poSpeak.png";
import poScreen from "../images/poScreen.jpg";
import poHardware from "../images/poHardware.jpg";
import poYellowCase from "../images/poYellowCase.jpg";
import batteryProtection from "../images/batteryProtection.jpg";
import poButtons from "../images/poButtons.png";
import miniSyncCables from "../images/miniSyncCables.png";
import displayProtection from "../images/displayProtection.png";
import "./styleComponents/PocketOperator.css";

function PocketOperatorScreen() {
  return (
    <div>
      <NavBar textColor={"#ffffff"} />

      <div
        className="-mt-14 md:-mt-14 lg:-mt-44"
        style={{
          backgroundImage: `url(${poMegaman})`,
          backgroundSize: "107%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      >
        {/* <h1>introducing pocket operator capcom® series.</h1> */}
      </div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight -mt-48"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          a wall of sound in your pocket.
        </h1>

        <span>pocket operators are small, ultra portable music devices,</span>
        <span>
          with studio quality sound and the flexibility to make music on the go.
        </span>
        <span>
          affordable for everyone and compatible with all other music gear.
        </span>

        <span>
          <br />
        </span>
        <span>for an impossibly cheap price from $49.</span>

        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 ">
          <p style={{ fontSize: "1.8333vw" }} className="mr-4 md:mr-8">
            features
          </p>
          <p style={{ fontSize: "1.8333vw" }} className="mr-4 md:mr-8">
            sound samples{" "}
          </p>
          <p style={{ fontSize: "1.8333vw" }}>accessories</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${poBoxes})`,
            backgroundSize: "107%",
            backgroundPosition: "25% 55%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "30%",
          }}
        ></div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${poDripBoxes})`,
          backgroundSize: "214%",
          backgroundPosition: "47% 35%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "90%",
        }}
      >
        <div>
          <h1>pocket operator metal series.</h1>
          <p>they're not heavy but they're metal.</p>
        </div>
        <div>
          <p>from $99</p>
          <p>learn how to play</p>
        </div>
      </div>
      <div>
        <img src={poTonix} />
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img src={poWithCase} />
        </div>
        <div style={{ backgroundColor: "#c8c8c8" }}>
          <img src={poArcade} />
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-12 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          the pocket operator family.
        </h1>
        <span>all pocket operator models perfectly complement each other.</span>
        <span>
          from drum machine, bass and lead synthesizers to noise percussion,
        </span>
        <span>the various unique units allow you to start a pocket band.</span>
        <span>
          use them separately or connect them together, the choice is yours.
        </span>

        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 ">
          <p style={{ fontSize: "1.8333vw" }} className="mr-4 md:mr-8">
            user guides
          </p>
          <p style={{ fontSize: "1.8333vw" }} className="mr-4 md:mr-8">
            video tutorials
          </p>
          <p style={{ fontSize: "1.8333vw" }}>workshops</p>
        </div>
      </div>
      <div
        className="grid grid-cols-2"
        style={{
          backgroundColor: "#e5e5e5",
          fontSize: "1.8333vw",
          paddingTop: "7.5%",
          paddingLeft: "2.5%",
          paddingRight: "2.5%",
        }}
      >
        <div className="grid grid-cols-2">
          <div
            className=""
            style={{
              backgroundImage: `url(${poRhythm})`,
              backgroundSize: "90%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "0",
              paddingTop: "200%",
            }}
          ></div>
          <div className="flex flex-col leading-none font-light">
            <span>PO-12 rhythm</span>
            <span className="po__description">
              16 sound drum machine and sequencer, perfect for making beats.
              parameter locks and punch-in effects.
            </span>
            <ul className="po__list list-disc">
              <li>real synthesised drum sounds</li>
              <li>sampled drum sounds</li>
              <li>16 punch-in effects</li>
              <li>16 pattern chaining</li>
              <li>step multiplier</li>
            </ul>
            <span className="po__pricing-price">$69</span>
            <span>view in store</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2"
          style={{
            backgroundColor: "#e5e5e5",
            fontSize: "1.8333vw",
          }}
        >
          <div
            className=""
            style={{
              backgroundImage: `url(${poSub})`,
              backgroundSize: "90%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "0",
              paddingTop: "200%",
            }}
          ></div>

          <div className="flex flex-col leading-none font-light">
            <span>PO-14 sub</span>
            <span className="po__description">
              deep bass line synthesizer with sequencer, parameter locks, play
              styles and punch-in effects.
            </span>
            <ul className="po__list list-disc">
              <li>multiple real synthesizer engines</li>
              <li>15 sounds + micro drum</li>
              <li>16 punch-in effects</li>
              <li>16 punch-in bass oriented play styles</li>
              <li>16 pattern chaining</li>
            </ul>
            <span className="po__pricing-price">$59</span>
            <span>view in store</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2"
          style={{ backgroundColor: "#e5e5e5", fontSize: "1.8333vw" }}
        >
          <div
            className=""
            style={{
              backgroundImage: `url(${poFactory})`,
              backgroundSize: "90%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "0",
              paddingTop: "200%",
            }}
          ></div>

          <div className="flex flex-col leading-none font-light">
            <span>PO-16 factory</span>
            <span className="po__description">
              lead synthesizer for keys melodies. sequencer with parameter
              locks, play styles and punch-in effects.
            </span>
            <ul className="po__list list-disc">
              <li>multiple real synthesizer engines</li>
              <li>15 sounds + micro drum</li>
              <li>16 punch-in effects</li>
              <li>16 punch-in arpeggio and chord play styles</li>
              <li>16 pattern chaining</li>
            </ul>
            <span className="po__pricing-price">$59</span>
            <span>view in store</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2"
          style={{ backgroundColor: "#e5e5e5", fontSize: "1.8333vw" }}
        >
          <div
            className=""
            style={{
              backgroundImage: `url(${poArcadeList})`,
              backgroundSize: "90%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "0",
              paddingTop: "200%",
            }}
          ></div>
          <div className="flex flex-col leading-none font-light">
            <span>PO-20 arcade</span>
            <span className="po__description">
              arcade synthesizer and sequencer, with parameter locks, chord
              control and punch-in effects.
            </span>
            <ul className="po__list list-disc">
              <li>rapid beat making and chiptune improvisation</li>
              <li>synthesized arcade sounds</li>
              <li>128 chord chaining</li>
              <li>128 pattern chaining</li>
              <li>16 sounds</li>
              <li>16 punch-in effects</li>
              <li>step multiplier</li>
            </ul>
            <span className="po__pricing-price">$69</span>
            <span>view in store</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2"
          style={{ backgroundColor: "#e5e5e5", fontSize: "1.8333vw" }}
        >
          <div
            className=""
            style={{
              backgroundImage: `url(${poOffice})`,
              backgroundSize: "90%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "0",
              paddingTop: "200%",
            }}
          ></div>

          <div className="flex flex-col leading-none font-light">
            <span className="po__description">
              noise percussion drum machine and sequencer, with parameter locks,
              solo functionality and punch-in effects.
            </span>
            <ul className="po__list list-disc">
              <li>sampled vintage hardware and real synthesizer engines</li>
              <li>solo control</li>
              <li>128 pattern chaining</li>
              <li>16 sounds</li>
              <li>16 punch-in effects</li>
              <li>step multiplier</li>
            </ul>
            <span className="po__pricing-price">$49</span>
            <span>view in store</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2"
          style={{ backgroundColor: "#e5e5e5", fontSize: "1.8333vw" }}
        >
          <div
            className=""
            style={{
              backgroundImage: `url(${poRobot})`,
              backgroundSize: "90%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "0",
              paddingTop: "200%",
            }}
          ></div>
          <div className="flex flex-col leading-none font-light">
            <span>PO-28 robot</span>
            <span className="po__description">
              live synthesizer and sequencer, with parameter locks, glide
              control and punch-in effects.
            </span>
            <ul className="po__list list-disc">
              <li>
                real 8-bit synthesizer engines for making live and sequenced
                melodies and leads
              </li>
              <li>15 sounds + micro drum</li>
              <li>live play + sequencer combo</li>
              <li>128 pattern chaining</li>
              <li>step multiplier</li>
            </ul>
            <span className="po__pricing-price">$69</span>
            <span>view in store</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2"
          style={{ backgroundColor: "#e5e5e5", fontSize: "1.8333vw" }}
        >
          <div
            className=""
            style={{
              backgroundImage: `url(${poTonic})`,
              backgroundSize: "90%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "0",
              paddingTop: "200%",
            }}
          ></div>
          <div className="flex flex-col leading-none font-light">
            <span>PO-32 tonic</span>
            <span className="po__description">
              drum and percussion synthesizer and sequencer with parameter
              locks, punch-in effects and unlimited sounds with microtonic vst
              through data transfer.
            </span>
            <ul className="po__list list-disc">
              <li>real synthesizer engines</li>
              <li>unlimited sounds with microtonic vst</li>
              <li>step multiplier</li>
              <li>64 pattern chaining</li>
              <li>data transfer</li>
            </ul>
            <span className="po__pricing-price">$99</span>
            <span>view in store</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2"
          style={{ backgroundColor: "#e5e5e5", fontSize: "1.8333vw" }}
        >
          <div
            className=""
            style={{
              backgroundImage: `url(${po33})`,
              backgroundSize: "90%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "0",
              paddingTop: "200%",
            }}
          ></div>
          <div className="flex flex-col leading-none font-light">
            <span>PO-33 K.O!</span>
            <span className="po__description">
              micro sampler with 40 seconds sample memory and built-in recording
              microphone.
            </span>
            <ul className="po__list list-disc">
              <li>microphone for sampling</li>
              <li>8 melodic sample slots</li>
              <li>8 drum slots</li>
              <li>40 seconds sample memory</li>
              <li>16 effects</li>
              <li>step multiplier</li>
            </ul>
            <span className="po__pricing-price">$99</span>
            <span>view in store</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2"
          style={{ backgroundColor: "#e5e5e5", fontSize: "1.8333vw" }}
        >
          <div
            className=""
            style={{
              backgroundImage: `url(${poSpeak})`,
              backgroundSize: "90%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "0",
              paddingTop: "200%",
            }}
          ></div>
          <div className="flex flex-col leading-none font-light">
            <span>PO-35 speak</span>
            <span className="po__description">
              vocal synthesizer and sequencer with built-in microphone for 8
              different voice character sampling.
            </span>
            <ul className="po__list list-disc">
              <li>microphone for sampling</li>
              <li>120 seconds sample memory</li>
              <li>8 voice characters</li>
              <li>8 effects</li>
              <li>transpose and change scale</li>
              <li>replaceable drum sounds with microtonic (sold separately)</li>
            </ul>
            <span className="po__pricing-price">$99</span>
            <span>view in store</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2"
          style={{ backgroundColor: "#e5e5e5", fontSize: "1.8333vw" }}
        >
          <div></div>
          <div className="flex flex-col leading-none font-light">
            <span>all units feature:</span>

            <ul className="po__list list-disc">
              <li>16-step sequencer</li>
              <li>16 patterns</li>
              <li>parameter locks</li>
              <li>built-in speaker</li>
              <li>3.5mm audio I/O</li>
              <li>jam sync</li>
              <li>animated LCD display</li>
              <li>folding stand</li>
              <li>clock + alarm clock</li>
              <li>battery powered (2XAAA)</li>
              <li>1 month battery life</li>
              <li>2 year standby time</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-12 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          small device, big sound.
        </h1>
        <span>use the built-in speaker for instant sound,</span>
        <span>
          connect a pair of headphones for detailed personal listening,
        </span>

        <span>or hook up a speaker system and the club will go boom!</span>

        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 ">
          <span style={{ fontSize: "1.8333vw" }} className="mr-4 md:mr-8">
            listen to sound samples below.
          </span>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-12 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          clever design, high quality.
        </h1>
        <span>pocket operators are designed on a single multiple-layer </span>
        <span>circuit board using high quality components.</span>

        <span>they all share a compact and durable form factor.</span>

        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 ">
          <span
            style={{ fontSize: "1.8333vw" }}
            className="mr-4 md:mr-8"
          ></span>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${poScreen})`,
          backgroundSize: "101%",
          backgroundPosition: "-10% -8.7%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      >
        {/* <p>
          by placing all vital and sensitive components under the LCD display
          there's no need for an outer case. by saving this cost, high quality
          components could be used to guarantee the best possible sound and very
          low power consumption. the space under the display also doubles as a
          speaker box.
        </p>
        <ul>
          <li>silabs efm 32 gecko mcu</li>
          <li>cirrus logic dac</li>
          <li>knowles high quality speaker</li>
          <li>high quality crystal for solid clock.</li>
        </ul> */}
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${poHardware})`,
          backgroundSize: "85%",
          backgroundPosition: "center",
          backgroundColor: "#e5e5e5",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "85%",
        }}
      >
        {/* <ol>
          <li>BREAK AWAY HANGER</li>
          <li>3.5 MM AUDIO OUT / HEADPHONE SYNC OUT</li>
          <li>JTAG PROGRAMMING PORT</li>
          <li>SYNC IN / AUDIO IN</li>
          <li>LOCK TAB (PO-30 SERIES)</li>
          <li>BUILT-IN SPEAKER</li>
          <li>FOLDING WIRE STAND</li>
          <li>EXTERNAL SPEAKER SOLDERING POINTS</li>
        </ol> */}
      </div>
      <div
        className="flex flex-col justify-center items-center font-light leading-tight mt-12 md:mt-16 lg:mt-24"
        style={{ fontSize: "1.8333vw" }}
      >
        <h1
          className="font-normal pb-6 md:pb-12"
          style={{ fontSize: "3.333vw" }}
        >
          protect and synchronize
        </h1>
        <span>
          add the silicone pro case to protect your pocket operator and
        </span>
        <span>
          get anti-slip feet, neck strap, battery protection and pro feel
          buttons.
        </span>
        <span>
          use the SP-10 display protection to protect the LCD screen, and
        </span>
        <span>
          start a jam sync session with your friends using the MC-3 mini cables.
        </span>

        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 ">
          <p style={{ fontSize: "1.8333vw" }}>buy accessories</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div
          className="col-span-2"
          style={{
            backgroundImage: `url(${poYellowCase})`,
            backgroundSize: "101%",
            backgroundPosition: "50% 15%",
            backgroundColor: "#e5e5e5",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 0,
            paddingTop: "60%",
          }}
        ></div>
        <div
          className="col-span-1"
          style={{
            backgroundImage: `url(${batteryProtection})`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "105",
            width: "100%",
            height: 0,
            paddingTop: "100%",
          }}
        ></div>
        <div
          className="col-span-1"
          style={{
            backgroundImage: `url(${poButtons})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: 0,
            paddingTop: "100%",
          }}
        ></div>
        <div
          className="col-span-1"
          style={{
            backgroundColor: "#4d4d4d",
            backgroundImage: `url(${miniSyncCables})`,
            backgroundPosition: "65% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "150%",
            width: "100%",
            height: 0,
            paddingTop: "100%",
          }}
        ></div>
        <div
          className="col-span-1"
          style={{
            backgroundColor: "#0f0e12",
            backgroundImage: `url(${displayProtection})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "125%",
            width: "100%",
            height: 0,
            paddingTop: "100%",
          }}
        ></div>

        <div
          className="col-span-2 flex flex-col justify-center items-center font-light leading-tight pt-24"
          style={{ fontSize: "1.8333vw" }}
        >
          <h1 className="font-normal" style={{ fontSize: "3.333vw" }}>
            available now. worldwide delivery.
          </h1>

          <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 ">
            <p style={{ fontSize: "1.8333vw" }}>visit store</p>
          </div>
          <div
            style={{
              backgroundImage: `url(${poBoxes})`,
              backgroundSize: "120%",
              backgroundPosition: "40% 55%",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: 0,
              paddingTop: "30%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default PocketOperatorScreen;
