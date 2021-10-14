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

function PocketOperatorScreen() {
  return (
    <div>
      <NavBar textColor={"#ffffff"} />
      <div
        className=""
        style={{
          backgroundImage: `url(${poMegaman})`,
          backgroundSize: "105%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      >
        <h1>introducing pocket operator capcom® series.</h1>
      </div>
      <div>
        <h1>a wall of sound in your pocket.</h1>
        <p>
          pocket operators are small, ultra portable music devices, with studio
          quality sound and the flexibility to make music on the go. affordable
          for everyone and compatible with all other music gear.
        </p>
        <p>for an impossibly cheap price from $49.</p>
        <img src={poBoxes} />
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${poDripBoxes})`,
          backgroundSize: "105%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
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
      <div>
        <h1>the pocket operator family.</h1>
        <p>
          all pocket operator models perfectly complement each other. from drum
          machine, bass and lead synthesizers to noise percussion, the various
          unique units allow you to start a pocket band. use them separately or
          connect them together, the choice is yours.
        </p>
        <ul>
          <li>user guides</li>
          <li>video tutorials</li>
          <li>workshops</li>
        </ul>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex">
          <div>
            <img src={poRhythm} />
          </div>
          <div>
            <p>PO-12 rhythm</p>
            <p>
              16 sound drum machine and sequencer, perfect for making beats.
              parameter locks and punch-in effects.
            </p>
            <ul>
              <li>real synthesised drum sounds</li>
              <li>sampled drum sounds</li>
              <li>16 punch-in effects</li>
              <li>16 pattern chaining</li>
              <li>step multiplier</li>
            </ul>
            <p>$69</p>
            <p>view in store</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={poSub} />
          </div>
          <div>
            <p>PO-14 sub</p>
            <p>
              deep bass line synthesizer with sequencer, parameter locks, play
              styles and punch-in effects.
            </p>
            <ul>
              <li>multiple real synthesizer engines</li>
              <li>15 sounds + micro drum</li>
              <li>16 punch-in effects</li>
              <li>16 punch-in bass oriented play styles</li>
              <li>16 pattern chaining</li>
            </ul>
            <p>$59</p>
            <p>view in store</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={poFactory} />
          </div>
          <div>
            <p>PO-16 factory</p>
            <p>
              lead synthesizer for keys melodies. sequencer with parameter
              locks, play styles and punch-in effects.
            </p>
            <ul>
              <li>multiple real synthesizer engines</li>
              <li>15 sounds + micro drum</li>
              <li>16 punch-in effects</li>
              <li>16 punch-in arpeggio and chord play styles</li>
              <li>16 pattern chaining</li>
            </ul>
            <p>$59</p>
            <p>view in store</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={poArcadeList} />
          </div>
          <div>
            <p>PO-20 arcade</p>
            <p>
              arcade synthesizer and sequencer, with parameter locks, chord
              control and punch-in effects.
            </p>
            <ul>
              <li>rapid beat making and chiptune improvisation</li>
              <li>synthesized arcade sounds</li>
              <li>128 chord chaining</li>
              <li>128 pattern chaining</li>
              <li>16 sounds</li>
              <li>16 punch-in effects</li>
              <li>step multiplier</li>
            </ul>
            <p>$69</p>
            <p>view in store</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={poOffice} />
          </div>
          <div>
            <p>PO-24 office</p>
            <p>
              noise percussion drum machine and sequencer, with parameter locks,
              solo functionality and punch-in effects.
            </p>
            <ul>
              <li>sampled vintage hardware and real synthesizer engines</li>
              <li>solo control</li>
              <li>128 pattern chaining</li>
              <li>16 sounds</li>
              <li>16 punch-in effects</li>
              <li>step multiplier</li>
            </ul>
            <p>$49</p>
            <p>view in store</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={poRobot} />
          </div>
          <div>
            <p>PO-28 robot</p>
            <p>
              live synthesizer and sequencer, with parameter locks, glide
              control and punch-in effects.
            </p>
            <ul>
              <li>
                real 8-bit synthesizer engines for making live and sequenced
                melodies and leads
              </li>
              <li>15 sounds + micro drum</li>
              <li>live play + sequencer combo</li>
              <li>128 pattern chaining</li>
              <li>step multiplier</li>
            </ul>
            <p>$69</p>
            <p>view in store</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={poTonic} />
          </div>
          <div>
            <p>PO-32 tonic</p>
            <p>
              drum and percussion synthesizer and sequencer with parameter
              locks, punch-in effects and unlimited sounds with microtonic vst
              through data transfer.
            </p>
            <ul>
              <li>real synthesizer engines</li>
              <li>unlimited sounds with microtonic vst</li>
              <li>step multiplier</li>
              <li>64 pattern chaining</li>
              <li>data transfer</li>
            </ul>
            <p>$99</p>
            <p>view in store</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={po33} />
          </div>
          <div>
            <p>PO-33 K.O!</p>
            <p>
              micro sampler with 40 seconds sample memory and built-in recording
              microphone.
            </p>
            <ul>
              <li>microphone for sampling</li>
              <li>8 melodic sample slots</li>
              <li>8 drum slots</li>
              <li>40 seconds sample memory</li>
              <li>16 effects</li>
              <li>step multiplier</li>
            </ul>
            <p>$99</p>
            <p>view in store</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={poSpeak} />
          </div>
          <div>
            <p>PO-35 speak</p>
            <p>
              vocal synthesizer and sequencer with built-in microphone for 8
              different voice character sampling.
            </p>
            <ul>
              <li>microphone for sampling</li>
              <li>120 seconds sample memory</li>
              <li>8 voice characters</li>
              <li>8 effects</li>
              <li>transpose and change scale</li>
              <li>replaceable drum sounds with microtonic (sold separately)</li>
            </ul>
            <p>$99</p>
            <p>view in store</p>
          </div>
        </div>
        <div className="flex">
          <div></div>
          <div>
            <p>all units feature:</p>

            <ul>
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
      <div>
        <h1>small device, big sound.</h1>
        <p>
          use the built-in speaker for instant sound, connect a pair of
          headphones for detailed personal listening, or hook up a speaker
          system and the club will go boom!
        </p>
        <p>listen to sound samples below.</p>
      </div>
      <div>
        <h1>clever design, high quality.</h1>
        <p>
          pocket operators are designed on a single multiple-layer circuit board
          using high quality components. they all share a compact and durable
          form factor.
        </p>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${poScreen})`,
          backgroundSize: "105%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      >
        <p>
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
        </ul>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${poHardware})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      >
        <ol>
          <li>BREAK AWAY HANGER</li>
          <li>3.5 MM AUDIO OUT / HEADPHONE SYNC OUT</li>
          <li>JTAG PROGRAMMING PORT</li>
          <li>SYNC IN / AUDIO IN</li>
          <li>LOCK TAB (PO-30 SERIES)</li>
          <li>BUILT-IN SPEAKER</li>
          <li>FOLDING WIRE STAND</li>
          <li>EXTERNAL SPEAKER SOLDERING POINTS</li>
        </ol>
      </div>
      <div>
        <h1>protect and synchronize</h1>
        <p>
          add the silicone pro case to protect your pocket operator and get
          anti-slip feet, neck strap, battery protection and pro feel buttons.
          use the SP-10 display protection to protect the LCD screen, and start
          a jam sync session with your friends using the MC-3 mini cables.
        </p>
        <p>buy accessories</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-2">
          <img src={poYellowCase} />
        </div>
        <div
          className="col-span-1"
          style={{
            backgroundImage: `url(${batteryProtection})`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div>
          <img src={poButtons} />
        </div>
        <div style={{ backgroundColor: "#4d4d4d" }}>
          <img src={miniSyncCables} />
        </div>
        <div style={{ backgroundColor: "#0f0e12" }}>
          <img src={displayProtection} />
        </div>
        <div className="col-span-2">
          <h1>available now. worldwide delivery.</h1>
          <p>visit store</p>
          <img src={poBoxes} />
        </div>
      </div>
    </div>
  );
}

export default PocketOperatorScreen;
