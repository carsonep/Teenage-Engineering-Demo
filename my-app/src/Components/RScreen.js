import React from 'react';
import NavBar from './NavBar';
import redArmHero from "../images/redArmHero.png";

function RScreen() {
    return (
        <div>
            <NavBar textColor={"#fff"} bgColor={"#000"} />
            <div
          className="w-full col-span-6"
          style={{
            backgroundImage: `url(${redArmHero})`,
            backgroundSize: "150%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 25%",
            width: "100%",
            height: 0,
            paddingTop: "90%",
            
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
          emotion revolution.
        </h1>
        <span>
        R is the worlds first emotional 6-axis life form.

        </span>
        <span>
        with unique possibilities to express emotions and react to a conversation

        </span>
        <span>
        driven by baidu's leading artificial intelligence technology.

        </span>
        <span>
        with six fully independent axes, loaded with sensors and microphones,

        </span>
        <span>and with the same loudspeaker design as the H built into the base,
</span>
        <span>the industry grade motor control will make it dance and express feelings
</span>
        <span>in a way you have never experienced before.
</span>
        <span>and maybe, just maybe it will be compatible with OP-Z. 
</span>

        <div className="flex mt-12 pb-12 md:pb-16 lg:pb-20 ">
          <span style={{ fontSize: "1.33vw" }}>watch documentary footage</span>
        </div>
      </div>

      <iframe style={{ width: "100vw", height: "1280px"}} src="https://www.youtube.com/embed/RyWTx9ExAjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


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
        <span>visit raven for more information about R.</span>

        <div className="flex mt-8 pb-12 md:pb-16 lg:pb-20 ">
          <span></span>
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
    )
}

export default RScreen
