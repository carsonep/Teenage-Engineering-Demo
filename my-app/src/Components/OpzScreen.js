import React from "react";
import NavBar from "./NavBar";
import opzHeroLarge from "../images/opzHeroLarge.jpg";
import opzSideView from "../images/opzSideView.png";
import opzGrid from "../images/opzGrid.png";
import opzApp from "../images/opzApp.png";
import opzFlat from "../images/opzFlat.png";
import floatingOpz from "../images/floatingOpz.png";
import opzPhotomatic from "../images/opzPhotomatic.gif";
import knobTeardown from "../images/knobTeardown.png";
import opzFront from "../images/opzFront.png";
import opLab from "../images/opLab.png";
import rumble from "../images/rumble.png";
import m1Headphones from "../images/m1Headphones.jpg";
import concertLazers from "../images/concertLazers.png";
import opzBundle from "../images/opzBundle.png";

function OpzScreen() {
  return (
    <div>
      <NavBar className="relative z-20" textColor={"#ffffff"} />
      <div
        className=""
        style={{
          backgroundImage: `url(${opzHeroLarge})`,
          backgroundSize: "105%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      ></div>
      <div>
        <img src={opzSideView} />
        <div>
          <h1>the next generation of portable instruments.</h1>
          <div className="grid grid-cols-3">
            <p>
              OP–Z is an advanced fully portable 16-track sequencer and
              synthesizer, with a range of both sample based and synthesis based
              sounds. it's the world's first stand-alone sequencer of its kind,
              that lets you sequence music, visuals, lights and more.
            </p>
            <p>
              OP–Z can be used completely stand alone and comes with an
              intuitive led lit interface. when you want next level real time
              visual feedback, use the screen you already have in your pocket*.
            </p>
            <p>
              hardware features include a usb-c host and device, wireless
              communication over ble, 4-pin 3.5 mm stereo headphone and
              line-out, accelerometer, user replaceable battery and built-in
              microphone.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={opzGrid} className="w-2/3" />
      </div>
      <div>
        <h1>component based step sequencing.</h1>
        <div className="grid grid-cols-3">
          <p>
            one of the basic concepts of the OP–Z is its ability to run each
            track totally independent from one another. tracks can run at
            various speeds, have different lengths and loop points. separate
            tracks can even jump-cut back and forth irregularly and randomly if
            you want. using this you can make a short sequence sound more or
            less different each time it is repeated in your composition.
          </p>
          <p>
            a composition is divided into tracks and each track is built from
            sequencer steps – just as you are used to, but on top of that we
            have added something truly unique we call step components that adds
            an extra dimension of instructions for each step. this new tool
            makes composing a track much more dynamic, deep and rich – a long
            needed addition to traditional sequencing.
          </p>
          <p>
            the tracks on the OP–Z is polymetric. meaning that each track has
            dynamic track length from 1 up to 144 steps. making it possible to
            work in high or low track resolution. you can choose to go
            completely off-grid or stay 100% quantized. thanks to the OP–Z real
            time melodic analysis you can at any time automatically transpose
            whole sequences in different scales across six octaves.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <h1>samples</h1>
          <p>
            OP–Z comes with 16 sample packs, each containing 24 samples. the
            basic configuration is divided into kicks, snares, percussion and
            effects, and you can easily add your own samples
          </p>
        </div>
        <div>
          <h1>sound engines</h1>
          <p>
            OP–Z comes with 12 synthesis based sound engines. more sound engines
            will be released continuously and made available through the
            configurator in the OP–Z app.
          </p>
        </div>
        <div>
          <h1>fx</h1>
          <p>
            OP–Z has two separate fx-buses, shared across all instrument tracks.
            the built-in fx are delay, reverb, bit-crush and distortion. future
            firmware upgrades will expand the OP–Z with even more fx.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={opzApp} className="w-3/4" />
      </div>
      <div>
        <h1>bring your own screen.</h1>
        <div className="grid grid-cols-3">
          <p>
            OP–Z comes with 16 sample packs, each containing 24 samples. the
            basic configuration is divided into kicks, snares, percussion and
            effects, and you can easily add your own samples
          </p>

          <p>
            OP–Z comes with 12 synthesis based sound engines. more sound engines
            will be released continuously and made available through the
            configurator in the OP–Z app.
          </p>

          <p>
            OP–Z has two separate fx-buses, shared across all instrument tracks.
            the built-in fx are delay, reverb, bit-crush and distortion. future
            firmware upgrades will expand the OP–Z with even more fx.
          </p>
        </div>
        <p>watch video</p>
      </div>
      <div>
        <img src={opzFlat} />
      </div>
      <div>
        <h1>pitch bend and microphone</h1>
        <div>
          <p>
            on the front of the OP–Z you find the pitch bend in the form of a
            soft, pressure-sensitive, thumb button. the pitch bend adds an
            analogue touch to any instrument – perfect for that solo break.
          </p>
          <p>
            lift the OP–Z to your mouth, and the accelerometer activated
            microphone will turn on. hold the function buttons to change the
            settings for the microphone.
          </p>
        </div>
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${floatingOpz})`,
          backgroundSize: "105%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      >
        <div className="absolute inset-x-0 bottom-0">
          <h1>built for live performance.</h1>
          <div className="grid grid-cols-3">
            <p>
              on the back of your OP–Z you find the project, mixer, tempo and
              the screen buttons. while holding down one of these buttons you
              access some of the OP–Z main functionality. the project button
              lets you choose one of the 10 projects where you work on your
              songs. each project contains 16 patterns and each pattern contains
              8 instrument tracks.{" "}
            </p>
            <p>
              the mixer gives you access to a live mixer where you fine tune the
              balance of your current track. one-two-three-four – hold to change
              tempo, add a click or counting voice-over to your track. the
              screen button opens up the main menu if you have a screen
              connected. select menu item using the red dial. the screen button
              also activates the microphone.{" "}
            </p>
            <p>
              press the mixer button to toggle between clean voice pass- through
              or the two real time OP–Z fx-buses. last but not least, keep an
              eye open for upcoming new hardware features using the expansion
              port. we have some really neat modules coming soon...
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={opzPhotomatic} className="w-3/4" />

        <h1>photomatic.</h1>
        <div className="grid grid-cols-3">
          <p>
            OP–Z is an advanced fully portable 16-track sequencer and
            synthesizer, with a range of both sample based and synthesis based
            sounds. it's the world's first stand-alone sequencer of its kind,
            that lets you sequence music, visuals, lights and more.
          </p>
          <p>
            OP–Z can be used completely stand alone and comes with an intuitive
            led lit interface. when you want next level real time visual
            feedback, use the screen you already have in your pocket*.
          </p>
          <p>
            hardware features include a usb-c host and device, wireless
            communication over ble, 4-pin 3.5 mm stereo headphone and line-out,
            accelerometer, user replaceable battery and built-in microphone.
          </p>
        </div>
      </div>
      <div className="text-white" style={{ backgroundColor: "#0f0e12" }}>
        <img src={knobTeardown} />
        <h1>teenage engineered four-wheel drive.</h1>
        <p>
          using the four color coded endless dials you control everything from
          synth parameters, filters, effects and levels to the adsr shape of an
          instrument. the rgb led's give you instant feedback of values and
          functions. these encoders were specially engineered for the OP-Z to
          make it possible to keep the 10 mm height of the unit and to provide
          maximum resolution.
        </p>
      </div>
      <div>
        <img src={opzFlat} />
      </div>
      <div>
        <h1>punch-in fx.</h1>
        <div className="grid grid-cols-3">
          <p>
            punch-in fx is a concept inspired from our series of pocket
            operators, where you can add a layer of live performance effects,
            and either record them or just to enjoy in real-time.
          </p>
          <p>
            on OP–Z the punch-in fx is a separate programmable track just like
            any instrument. the punch-in fx is one of the unique features that
            makes the OP–Z stand out from a traditional sequencer.
          </p>
          <p>
            this makes the OP–Z a powerful live performance instrument,
            extending the possibilities of a pre-programmed track to endless
            variations.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div style={{ backgroundColor: "#0f0e12" }}>
          <img src={opLab} />
        </div>
        <div style={{ backgroundColor: "#b2b2b2" }}>
          <img src={rumble} />
        </div>
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${m1Headphones})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      >
        <h1>M-1</h1>
        <p>foldable headphones with detachable and built in microphones.</p>
        <p>read more</p>
      </div>
      <div>
        <img className="w-full" src={concertLazers} />
      </div>
      <div>
        <h1>full unity® 3D integration.</h1>
        <div className="grid grid-cols-3">
          <p>
            OP–Z is tailor made for controlling rich 3D animations in real-time
            sync with your tunes and beats. create your own unique visuals using
            unity® – the world's most popular multi-platform game engine.
          </p>
          <p>
            by exposing the inner control data of the OP–Z and linking it to
            unity® users can create anything within unity®, customizing every
            single polygon in a performance and completing the live set with
            unique visuals.
          </p>
          <p>
            the weakest point of VJ-ing has always been the creation of content.
            don't have any ideas yet? download and explore 3D worlds already
            prepared for you, and learn more about videolab on github.
          </p>
        </div>
        <p>read more about videolab here</p>
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${opzBundle})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: 0,
          paddingTop: "75%",
        }}
      ></div>
      <div>
        <h1>accessories.</h1>
        <div className="grid grid-cols-3">
          <p>
            OP–Z is perfect to bring along when traveling. so much that we felt
            the need to create a range of travel-cases protecting your OP–Z.
          </p>
          <p>
            ideal for when you head down to the park, take a road trip or go on
            tour. the softer pvc tarpaulin roll up protective case comes in
            asphalt grey
          </p>
          <p>
            and signal yellow (pictured above). we're also happy to introduce a
            new line of fresh color-coded cables in various lengths and
            configurations.
          </p>
        </div>
        <p>view accessories</p>
      </div>
      <div
        className="h-64 flex flex-col justify-center items-center"
        style={{
          backgroundColor: "#0f0e12",
        }}
      >
        <h1 className=" text-white text-2xl md:text-5xl">
          so much fun in so little space.
        </h1>
        <h2 className=" text-white text-2xl md:text-4xl">
          – ALESSANDRO CORTINI / NIN
        </h2>
      </div>
    </div>
  );
}

export default OpzScreen;
