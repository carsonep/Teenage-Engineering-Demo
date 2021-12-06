import React from "react";
import NavBar from "./NavBar";
import modularFace from "../images/modularFace.png";
import facePlatePile from "../images/facePlatePile.png";
import euroPower from "../images/euroPower.png";
import poKeyboard from "../images/poKeyboard.png";
import poInput from "../images/poInput.jpg";
import euroAdapter from "../images/euroAdapter.png";
import poHolder from "../images/poHolder.png";
import redModularHero from "../images/redModularHero.png";
import rearHandleModular from "../images/rearHandleModular.png";

function NowPage() {
  return (
    <div className="" style={{ backgroundColor: "#e5e5e5", padding: "0 4.6vw" }}>
      <NavBar textColor={"#000"} />
      <div className="flex flex-col w-full text-center mt-8 lg:mt-16 leading-tight pb-4 lg:pb-16 ">
        <h1 className="text-3xl lg:text-5xl">euro pocket rack</h1>
        <span className="text-xs lg:text-sm font-light mt-4">NOVEMBER 5, 2021</span>
        <span className="text-xs lg:text-sm font-light">POSTED BY TOBIAS VON HOFSTEN</span>
      </div>

      <div
        className="rounded-2xl "
        style={{
          backgroundImage: `url(${modularFace})`,
          backgroundSize: "150%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        width: "100%",
          height: 0,
          paddingTop: "100%",
          backgroundColor: "#b2b2b2",
        }}
      ></div>

      <div className="flex flex-col w-full lg:justify-center lg:items-center mt-8 leading-tight pb-4">
        <span className="text-sm lg:text-xl lg:w-1/2">the eurorack format</span>
        <p className="text-sm lg:text-xl lg:w-1/2 font-light mt-4 lg:mt-0">
          eurorack is a very common system format when it comes to modular
          synths. there are tons of modules and manufacturers on the market and
          the pocket operator modular series is eurorack compatible. this means
          any POM system can be used together with any other module, from any
          other brand. while the pocket rack format is slightly smaller than
          eurorack, you only need some minor tweaks to fit your pocket operator
          modules in your eurorack system.
        </p>
        <p className="text-sm lg:text-xl font-light lg:w-1/2 mt-4">
          here are a few ways to 'eurorackify' your pocket operator modulars and
          pocket operators, plus a bonus mod to really unlock and expand the
          capabilities of your POM-400.
        </p>
      </div>

<div className="w-full flex lg:justify-center lg:mt-8">
      <div
        className="rounded-2xl w-full lg:w-1/2"
        style={{
          backgroundImage: `url(${facePlatePile})`,
          backgroundSize: "70%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        //   width: "100%",
          height: 0,
          paddingTop: "60%",
          backgroundColor: "#b2b2b2",
        
        }}
      ></div></div>

      <div className="flex flex-col w-full lg:justify-center lg:items-center mt-8 leading-tight pb-4">
        <span className="text-sm lg:text-xl lg:w-1/2">eurorack front panels for POM</span>
        <p className="text-sm lg:text-xl lg:w-1/2 font-light mt-4 lg:mt-0">
          the two companies malm.audio and jklmnt have joined forces and created
          custom eurorack front panels for the complete range of modules
          available in the pocket operator modular POM-400 and POM-170. pick
          your favorite module and mount that in your existing eurorack system,
          or create a complete replica of an entire system. the various panels
          range from 6 hp width, up to 18 hp.
        </p>
      </div>

      <div className="w-full flex lg:justify-center lg:mt-8">
      <div
         className="rounded-2xl w-full lg:w-1/2"
        style={{
          backgroundImage: `url(${euroPower})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        //   width: "100%",
          height: 0,
          paddingTop: "60%",
          backgroundColor: "#b2b2b2",
        }}
      ></div></div>

      <div className="flex flex-col w-full lg:justify-center lg:items-center mt-8 leading-tight pb-4">
        <span className="text-sm lg:text-xl lg:w-1/2">power adapters</span>
        <p className="text-sm lg:text-xl lg:w-1/2 font-light mt-4 lg:mt-0">
          power adapters they've also made a convenient power adapter that
          easily converts the power connector from pocket rack to eurorack. no
          soldering is required and everything above is available through the
          oddvolt webstore.
        </p>
      </div>

      <div className="w-full flex lg:justify-center lg:mt-8">
      <div
        className="rounded-2xl w-full lg:w-1/2"
        style={{
          backgroundImage: `url(${poKeyboard})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        //   width: "100%",
          height: 0,
          paddingTop: "60%",
          backgroundColor: "#b2b2b2",
        }}
      ></div></div>

      <div className="flex flex-col w-full lg:justify-center lg:items-center mt-8 leading-tight pb-4">
        <span className="text-sm lg:text-xl lg:w-1/2">pokit for POM-16 by grayscale</span>
        <p className="text-sm lg:text-xl lg:w-1/2 font-light mt-4 lg:mt-0">
          power adapters the company grayscale makes modules and stylish
          eurorack front panels for a lot of products. their pokit is a eurorack
          conversion kit for the POM-16 keyboard. the front panel has a matte
          black finish and is 42 hp wide. the kit even comes with matching gray
          official knobs. this is a great option for enabling your system with
          the 4-channel sequencer, arpeggiator and keyboard that is the POM-16.
        </p>
      </div>

      <div className="w-full flex lg:justify-center lg:mt-8">
      <div
        className="rounded-2xl w-full lg:w-1/2"
        style={{
          backgroundImage: `url(${poInput})`,
          backgroundSize: "90%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        //   width: "100%",
          height: 0,
          paddingTop: "60%",
          backgroundColor: "#b2b2b2",
        }}
      ></div>
      </div>

      <div className="flex flex-col w-full lg:justify-center lg:items-center mt-8 leading-tight pb-4">
        <span className="text-sm lg:text-xl lg:w-1/2">bonus: POM-400 matrix kit</span>
        <p className="text-sm lg:text-xl lg:w-1/2 font-light mt-4 lg:mt-0">
          this is not exactly eurorack but an awesome project nonetheless.
          engineer david vondle has created a bolt-on kit to turn a POM-400 into
          a matrix synth, kind of like the ems synthi. so instead of just using
          cables to patch, you can use pins to connect columns and rows,
          corresponding to inputs and outputs. here's the system in action.
        </p>
      </div>

      <div className="w-full flex lg:justify-center lg:mt-8">
        <iframe
          width="100%"
          height="25vh"
          scrolling="no"
          frameborder="no"
          allowtransparency="true"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
          sandbox="allow-same-origin allow-popups allow-scripts allow-top-navigation allow-presentation"
          class="yt-embed uninitialized"
          src="https://www.youtube.com/embed/PYvNU1I5hUw?enablejsapi=1&amp;autoplay=0&amp;showinfo=0&amp;modestbranding=1&amp;rel=0"
          className="rounded-2xl w-full lg:w-1/2"
        ></iframe>
      </div>

      <div className="flex flex-col w-full lg:justify-center lg:items-center mt-8 leading-tight pb-4">
        <span className="text-sm lg:text-xl lg:w-1/2">bonus: POM-400 matrix kit</span>
        <p className="text-sm lg:text-xl lg:w-1/2 font-light mt-4 lg:mt-0">
          there is no soldering required and once mounted you can use the full
          system as you usually would, with the added flexibility of the matrix.
          truly amazing work. if you really want to unlock your POM-400 but not
          divide it into separate modules then this is definitely worth checking
          out. for more details and to place an order go to
          http://matrix.vondle.com
        </p>
      </div>

      <div style={{ borderBottom: "1px solid #b2b2b2" }}></div>

      <div className="flex flex-col w-full lg:justify-center lg:items-center mt-8 leading-tight pb-4">
        <span className="text-sm lg:text-xl lg:w-1/2">pocket operators and eurorack</span>
        <p className="text-sm lg:text-xl lg:w-1/2 font-light mt-4 lg:mt-0">
          the usually hand-held regular pocket operators can also be used in a
          eurorack system. this could for instance be a great way to create a
          portable and powerful grab-and-go live performance instrument, or to
          have pocket operators tightly and neatly integrated into your studio
          setup. here are two examples of how to mount pocket operators in a
          eurorack case.
        </p>
      </div>

      <div className="w-full flex lg:justify-center lg:mt-8">
      <div
        className="rounded-2xl w-full lg:w-1/2"
        style={{
          backgroundImage: `url(${euroAdapter})`,
          backgroundSize: "90%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          height: 0,
          paddingTop: "60%",
          backgroundColor: "#b2b2b2",
        }}
      ></div></div>

      <div className="flex flex-col w-full lg:justify-center lg:items-center mt-8 leading-tight pb-4">
        <span className="text-sm lg:text-xl lg:w-1/2">pocket operators and eurorack</span>
        <p className="text-sm lg:text-xl lg:w-1/2 font-light mt-4 lg:mt-0">
          the usually hand-held regular pocket operators can also be used in a
          eurorack system. this could for instance be a great way to create a
          portable and powerful grab-and-go live performance instrument, or to
          have pocket operators tightly and neatly integrated into your studio
          setup. here are two examples of how to mount pocket operators in a
          eurorack case.
        </p>
      </div>

      <div className="w-full flex lg:justify-center lg:mt-8">
      <div
        className="rounded-2xl w-full lg:w-1/2"
        style={{
          backgroundImage: `url(${poHolder})`,
          backgroundSize: "90%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        //   width: "100%",
          height: 0,
          paddingTop: "60%",
          backgroundColor: "#b2b2b2",
        }}
      ></div></div>

<div className="flex flex-col w-full lg:justify-center lg:items-center mt-8 leading-tight pb-4">
        <span className="text-sm lg:text-xl lg:w-1/2">3D printed holders</span>
        <p className="text-sm lg:text-xl lg:w-1/2 font-light mt-4 lg:mt-0">
        spillerphoto is another german company making accessories for the pocket operators, among other things. the euroten and eurotenduo are 3D printed pocket operator holders, for simple solder-free eurorack mounting of one or more units. buy them pre-printed or get the .stl files and 3D print yourself. visit their website for more information.
        </p>
      </div>

      <div className="flex flex-col w-full lg:justify-center lg:items-center mt-8 leading-tight pb-4">
        <span className="text-sm lg:text-xl lg:w-1/2">conclusion</span>
        <p className="text-sm lg:text-xl lg:w-1/2 font-light mt-4 lg:mt-0">
        there, a small selection of modular mods and tools for extended eurorack compatibility. let us know if you've made any modifications yourself or if you have any other favorites. don't have your own pocket operator modular yet? check them out below.
        </p>
      </div>

      <div className="w-full flex lg:justify-center lg:mt-8 pb-16">
      <div className="flex rounded-2xl w-full lg:w-1/2">
          <div
        className="rounded-2xl md:w-1/2 w-full"
        style={{
          backgroundImage: `url(${rearHandleModular})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        
          height: 0,
          paddingTop: "50%",
          backgroundColor: "#b2b2b2",
        }}
      ></div><div
      className="rounded-2xl md:w-1/2 w-full ml-2"
      style={{
        backgroundImage: `url(${redModularHero})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        
        height: 0,
        paddingTop: "50%",
        backgroundColor: "#b2b2b2",
      }}
    ></div></div>

    
    </div><div style={{ borderBottom: "1px solid #b2b2b2" }}></div>
    </div>
  );
}

export default NowPage;
