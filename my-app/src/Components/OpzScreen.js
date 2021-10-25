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
    <div style={{ backgroundColor: "#e5e5e5" }}>
      <NavBar className="relative z-20" textColor={"#ffffff"} />

      <div
        className="-mt-14 md:-mt-14 lg:-mt-44"
        style={{
          backgroundImage: `url(${opzHeroLarge})`,
          backgroundSize: "105%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "65%",
        }}
      ></div>
      <div>
        <img src={opzSideView} />
        <div
          className="flex flex-col justify-center items-center font-light "
          style={{ fontSize: "1.833vw", padding: "0 5vw" }}
        >
          <h1
            style={{ fontSize: "3vw" }}
            className="md:pb-4 lg:pb-12 tracking-tight"
          >
            the next generation of portable instruments.
          </h1>
          <div className="grid gap-4 grid-cols-3 leading-none">
            <span
              className=""
              style={{ paddingTop: "3vh", paddingBottom: "5vh" }}
            >
              OP–Z is an advanced fully portable 16-track sequencer and
              synthesizer, with a range of both sample based and synthesis based
              sounds. it's the world's first stand-alone sequencer of its kind,
              that lets you sequence music, visuals, lights and more.
            </span>
            <span
              className=""
              style={{ paddingTop: "3vh", paddingBottom: "5vh" }}
            >
              OP–Z can be used completely stand alone and comes with an
              intuitive led lit interface. when you want next level real time
              visual feedback, use the screen you already have in your pocket*.
            </span>
            <span
              className=""
              style={{ paddingTop: "3vh", paddingBottom: "5vh" }}
            >
              hardware features include a usb-c host and device, wireless
              communication over ble, 4-pin 3.5 mm stereo headphone and
              line-out, accelerometer, user replaceable battery and built-in
              microphone.
            </span>
          </div>
          <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center" style={{ paddingBottom: "5vh" }}>
        <img src={opzGrid} className="w-2/3" />
      </div>
      <div
        className="flex flex-col justify-center items-center font-light "
        style={{ fontSize: "1.833vw", padding: "0 5vw" }}
      >
        <h1
          style={{ fontSize: "3vw" }}
          className="md:pb-4 lg:pb-10 tracking-tight"
        >
          component based step sequencing.
        </h1>
        <div className="grid grid-cols-3 gap-4 leading-none">
          <span
            className=""
            style={{ paddingTop: "3vh", paddingBottom: "5vh" }}
          >
            one of the basic concepts of the OP–Z is its ability to run each
            track totally independent from one another. tracks can run at
            various speeds, have different lengths and loop points. separate
            tracks can even jump-cut back and forth irregularly and randomly if
            you want. using this you can make a short sequence sound more or
            less different each time it is repeated in your composition.
          </span>
          <span
            className=""
            style={{ paddingTop: "3vh", paddingBottom: "5vh" }}
          >
            a composition is divided into tracks and each track is built from
            sequencer steps – just as you are used to, but on top of that we
            have added something truly unique we call step components that adds
            an extra dimension of instructions for each step. this new tool
            makes composing a track much more dynamic, deep and rich – a long
            needed addition to traditional sequencing.
          </span>
          <span
            className=""
            style={{ paddingTop: "3vh", paddingBottom: "5vh" }}
          >
            the tracks on the OP–Z is polymetric. meaning that each track has
            dynamic track length from 1 up to 144 steps. making it possible to
            work in high or low track resolution. you can choose to go
            completely off-grid or stay 100% quantized. thanks to the OP–Z real
            time melodic analysis you can at any time automatically transpose
            whole sequences in different scales across six octaves.
          </span>
        </div>{" "}
        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
          <div></div>
        </div>
      </div>
      <div
        style={{ fontSize: "1.833vw", padding: "0 5vw" }}
        className="grid gap-2 grid-cols-3 font-light leading-none"
      >
        <div style={{ paddingBottom: "5vh" }}>
          <h1 className="flex justify-center" style={{ paddingBottom: "2vh" }}>
            samples
          </h1>
          <span>
            OP–Z comes with 16 sample packs, each containing 24 samples. the
            basic configuration is divided into kicks, snares, percussion and
            effects, and you can easily add your own samples
          </span>
        </div>
        <div style={{ paddingBottom: "5vh" }}>
          <h1 className="flex justify-center" style={{ paddingBottom: "2vh" }}>
            sound engines
          </h1>
          <span>
            OP–Z comes with 12 synthesis based sound engines. more sound engines
            will be released continuously and made available through the
            configurator in the OP–Z app.
          </span>
        </div>
        <div style={{ paddingBottom: "5vh" }}>
          <h1 className="flex justify-center" style={{ paddingBottom: "2vh" }}>
            fx
          </h1>
          <span>
            OP–Z has two separate fx-buses, shared across all instrument tracks.
            the built-in fx are delay, reverb, bit-crush and distortion. future
            firmware upgrades will expand the OP–Z with even more fx.
          </span>
        </div>
        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
          <div></div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-12 md:pb-16 lg:pb-24 ">
        <img src={opzApp} className="w-3/4" />
      </div>
      <div
        className="flex flex-col justify-center items-center font-light "
        style={{ fontSize: "1.833vw", padding: "0 5vw" }}
      >
        <h1
          style={{ fontSize: "3vw" }}
          className="md:pb-4 lg:pb-10 tracking-tight"
        >
          bring your own screen.
        </h1>
        <div className="grid gap-4 grid-cols-3 leading-none">
          <span>
            connect OP–Z wirelessly to a mobile device. thanks to the extremely
            energy efficient ble technology your OP–Z will run and sync to your
            screen for hours and hours, without you having to charge the unit.
          </span>

          <span>
            with the OP–Z app you see the numbers and graphs behind the music
            you create in real time. at a glance, you know how your instruments
            are balanced in the mixer or just how much effect is applied to each
            instrument.
          </span>

          <span>
            the screen adds another dimension to your interaction with the OP–Z.
            unlocking multi touch features, you can adjust multiple mixer
            sliders at once or use the smooth touch pad to adjust effects or
            filters. perfect when performing live.
          </span>
        </div>
        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 ">
          <span style={{ fontSize: "1.8333vw" }}>watch video</span>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${opzFlat})`,
          backgroundSize: "184%",
          backgroundPosition: "4% 152%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "30%",
        }}
      ></div>
      <div
        className="flex flex-col justify-center items-center font-light tracking-tight"
        style={{ fontSize: "1.833vw", padding: "0 15vw" }}
      >
        <h1
          style={{ fontSize: "3vw" }}
          className="md:pb-4 lg:pb-10 tracking-tight"
        >
          pitch bend and microphone
        </h1>
        <div className="flex justify-center">
          <span className="w-2/4 px-4">
            on the front of the OP–Z you find the pitch bend in the form of a
            soft, pressure-sensitive, thumb button. the pitch bend adds an
            analogue touch to any instrument – perfect for that solo break.
          </span>
          <span className="w-2/4 md:px-4">
            lift the OP–Z to your mouth, and the accelerometer activated
            microphone will turn on. hold the function buttons to change the
            settings for the microphone.
          </span>
        </div>
        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
          <div></div>
        </div>
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${floatingOpz})`,
          backgroundSize: "180%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "17% 60%",
          width: "100%",
          height: 0,
          paddingTop: "100%",
        }}
      >
        <div
          className="absolute inset-x-0 bottom-0  lg:bottom-14 flex flex-col justify-center items-center font-light "
          style={{ fontSize: "1.833vw", padding: "0 5vw" }}
        >
          <h1
            style={{ fontSize: "3vw" }}
            className="md:pb-4 lg:pb-10 tracking-tight"
          >
            built for live performance.
          </h1>
          <div className="grid gap-4 grid-cols-3 leading-none">
            <span>
              on the back of your OP–Z you find the project, mixer, tempo and
              the screen buttons. while holding down one of these buttons you
              access some of the OP–Z main functionality. the project button
              lets you choose one of the 10 projects where you work on your
              songs. each project contains 16 patterns and each pattern contains
              8 instrument tracks.{" "}
            </span>
            <span>
              the mixer gives you access to a live mixer where you fine tune the
              balance of your current track. one-two-three-four – hold to change
              tempo, add a click or counting voice-over to your track. the
              screen button opens up the main menu if you have a screen
              connected. select menu item using the red dial. the screen button
              also activates the microphone.{" "}
            </span>
            <div className="flex flex-col">
              <span>press the mixer</span>
              <span>button to toggle</span>
              <span>between clean voice pass-</span>
              <span>through or the two real time</span>
              <span>OP–Z fx-buses.</span>
              <span>last but not least, keep an eye</span>
              <span>open for upcoming new hardware</span>
              <span>features using the expansion port.</span>
              <span>we have some really neat modules</span>
              <span>coming soon...</span>
            </div>
          </div>
          <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 ">
            <span style={{ fontSize: "1.8333vw" }}>watch video</span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center font-light "
        style={{ fontSize: "1.833vw", padding: "0 5vw" }}
      >
        <img src={opzPhotomatic} className="w-3/4" />

        <h1
          style={{ fontSize: "3vw" }}
          className="mt-4 md:mt-14 md:pb-4 lg:pb-10 tracking-tight"
        >
          photomatic.
        </h1>
        <div className="grid gap-4 grid-cols-3 leading-none">
          <span>
            snap a series of photos and sequence them to a beat. compose a song
            and create a completely synchronised music video 'a-la-minute'. the
            photomatic feature included in the OP–Z app is just pure instant
            fun.
          </span>
          <div>
            <span>
              when you want some quick and unique graphics, perfectly synched to
              your beats, open up photomatic.
            </span>

            <br />

            <span className="items-center">
              {" "}
              shoot away, add some filters and you have your instant music
              video.
            </span>
          </div>
          <div>
            <span>
              photomatic lets you add up to 10 sequences with 24 pictures each,
              all possible to edit with the colored dials.
            </span>

            <br />

            <span className="items-center">
              {" "}
              the sequences can be synched to any track while playing live.
            </span>
          </div>
          <div className="flex mt-8 pb-12 md:pb-16 lg:pb-24 ">
            <div></div>
          </div>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${knobTeardown})`,
          backgroundColor: "#0f0e12",
          backgroundSize: "32.9%",
          backgroundPosition: "50.3% 70%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "63%",
        }}
      ></div>
      <div
        className="text-white flex flex-col justify-center items-center font-light leading-none pb-36"
        style={{
          fontSize: "1.8333vw",
          backgroundColor: "#0f0e12",
          color: "#ded8d1",
        }}
      >
        <h1
          className="pb-6 md:pb-12"
          style={{ fontSize: "2.6vw", color: "#e5e5e5" }}
        >
          teenage engineered four-wheel drive.
        </h1>

        <span>
          using the four color coded endless dials you control everything from
          synth
        </span>
        <span>
          parameters, filters, effects and levels to the adsr shape of an
          instrument.
        </span>
        <span>
          the rgb led's give you instant feedback of values and functions.
        </span>
        <span>
          these encoders were specially engineered for the OP-Z to make it
          possible
        </span>
        <span>
          to keep the 10 mm height of the unit and to provide maximum
          resolution.
        </span>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${opzFront})`,

          backgroundSize: "167%",
          backgroundPosition: "114.5% 70%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "60%",
        }}
      ></div>
      <div
        className="flex flex-col justify-center items-center font-light "
        style={{ fontSize: "1.833vw", padding: "0 5vw" }}
      >
        <h1
          style={{ fontSize: "3vw" }}
          className="md:pb-4 lg:pb-10 tracking-tight"
        >
          punch-in fx.
        </h1>
        <div className="grid gap-4 grid-cols-3 leading-none">
          <span>
            punch-in fx is a concept inspired from our series of pocket
            operators, where you can add a layer of live performance effects,
            and either record them or just to enjoy in real-time.
          </span>
          <span>
            on OP–Z the punch-in fx is a separate programmable track just like
            any instrument. the punch-in fx is one of the unique features that
            makes the OP–Z stand out from a traditional sequencer.
          </span>
          <span>
            this makes the OP–Z a powerful live performance instrument,
            extending the possibilities of a pre-programmed track to endless
            variations.
          </span>
        </div>
        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 ">
          <span></span>
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
          backgroundColor: "#f4f5f7",
          backgroundSize: "85%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 100%",
          width: "100%",
          height: 0,
          paddingTop: "70%",
        }}
      >
        <h1>M-1</h1>
        <p>foldable headphones with detachable and built in microphones.</p>
        <p>read more</p>
      </div>
      <div>
        <img className="w-full" src={concertLazers} />
      </div>
      <div
        className="flex flex-col justify-center items-center font-light "
        style={{ fontSize: "1.833vw", padding: "0 5vw" }}
      >
        <h1
          style={{ fontSize: "3vw" }}
          className="mt-4 md:mt-14 md:pb-4 lg:pb-10 tracking-tight"
        >
          full unity® 3D integration.
        </h1>
        <div className="grid gap-4 grid-cols-3 leading-none">
          <span>
            OP–Z is tailor made for controlling rich 3D animations in real-time
            sync with your tunes and beats. create your own unique visuals using
            unity® – the world's most popular multi-platform game engine.
          </span>
          <span>
            by exposing the inner control data of the OP–Z and linking it to
            unity® users can create anything within unity®, customizing every
            single polygon in a performance and completing the live set with
            unique visuals.
          </span>
          <span>
            the weakest point of VJ-ing has always been the creation of content.
            don't have any ideas yet? download and explore 3D worlds already
            prepared for you, and learn more about videolab on github.
          </span>
        </div>

        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-24 ">
          <span style={{ fontSize: "1.8333vw" }} className="mr-4 md:mr-8">
            read more about the videolab here
          </span>
        </div>
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
      <div
        className="flex flex-col justify-center items-center font-light "
        style={{ fontSize: "1.833vw", padding: "0 5vw" }}
      >
        <h1
          style={{ fontSize: "3vw" }}
          className="mt-4 md:mt-14 md:pb-4 lg:pb-10 tracking-tight"
        >
          accessories.
        </h1>
        <div className="grid gap-4 grid-cols-3 leading-none">
          <span>
            OP–Z is perfect to bring along when traveling. so much that we felt
            the need to create a range of travel-cases protecting your OP–Z.
          </span>
          <span>
            ideal for when you head down to the park, take a road trip or go on
            tour. the softer pvc tarpaulin roll up protective case comes in
            asphalt grey
          </span>
          <span>
            and signal yellow (pictured above). we're also happy to introduce a
            new line of fresh color-coded cables in various lengths and
            configurations.
          </span>
        </div>
        <div className="flex mt-4 md:mt-14 pb-12 md:pb-12 lg:pb-20 ">
          <span style={{ fontSize: "1.8333vw" }} className="mr-4 md:mr-8">
            view accessories
          </span>
        </div>
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
