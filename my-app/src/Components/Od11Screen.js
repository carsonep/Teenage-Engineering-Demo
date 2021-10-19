import React from "react";
import NavBar from "./NavBar";
import od11SwedishRoom from "../images/od11SwedishRoom.jpg";
import od11Chair from "../images/od11Chair.jpg";

function Od11Screen() {
  return (
    <div>
      <NavBar textColor={"#cac9c4"} />
      <div
        className="-mt-44"
        style={{
          backgroundImage: `url(${od11SwedishRoom})`,

          backgroundSize: "115%",
          backgroundPosition: "60% 0%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "93%",
        }}
      ></div>
      <div className="flex flex-col justify-center items-center text-lg">
        <span>OD-11 the wireless stereo loudspeaker,</span>
        <span>
          made to play all your music, from any device, in wireless stereo.
        </span>
        <span>
          the unmistakably warm and relaxed carlsson sound has returned.
        </span>
        <span>now in red, black, blue, yellow, walnut and white.</span>

        <div className="flex text-xl mt-8 pb-16">
          <p className="mr-8">from $999</p>
          <p>visit store</p>
        </div>
      </div>
      <div
        className="grid grid-cols-2 h-48 flex items-center text-white "
        style={{
          backgroundColor: "#0f0e12",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <span>BEST IN TEST - LJUD & BILD</span>
          <span>* * * * *</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>LONDON DESIGN AWARD</span>
          <span>GOLD</span>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${od11Chair})`,

          backgroundSize: "contain",
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "75%",
        }}
      ></div>
      <div className="flex flex-col justify-center items-center text-lg">
        <h1>play anything, anywhere.</h1>
        <span>OD-11 is compatible with all music services.</span>
        <span>
          stream your favourite music at home, bring it on your holiday
        </span>
        <span>
          and listen offline with cabin mode, or connect any instrument,
        </span>
        <span>
          turntable, gaming console or tv, for a rich sound experience.
        </span>

        <div className="flex text-xl mt-8 pb-16">
          <div>
            <svg viewBox="0 0 200 200">
              <path
                d="M47 42.193v62.57h20.028l5.255-6.893H53.897V49.086h93.637V97.87H128.95l5.342 6.892h20.136v-62.57zM64.524 117.836h72.383l-36.48-47.106z"
                class="f"
              ></path>
              <defs>
                <path
                  id="ed7e859d82a5247b_a"
                  d="M47 42.193h107.428V157H47z"
                ></path>
              </defs>
              <clipPath id="ed7e859d82a5247b_b">
                <use overflow="visible"></use>
              </clipPath>
              <path
                clip-path="url(#ed7e859d82a5247b_b)"
                d="M78.802 151.493h-2.878l-1.574-4.953h-5.48l-1.5 4.953h-2.803l5.428-16.86h3.353l5.454 16.86zm-4.93-7.032l-1.423-4.402c-.15-.453-.438-1.51-.853-3.175h-.048c-.17.714-.437 1.776-.804 3.175l-1.4 4.403h4.527zM83.987 135.703c0 .487-.16.878-.48 1.18-.312.302-.72.446-1.225.446-.45 0-.83-.152-1.14-.46-.304-.31-.462-.7-.462-1.167 0-.466.162-.85.477-1.153.316-.295.71-.446 1.173-.446.47 0 .865.15 1.177.446.32.302.48.687.48 1.153m-.302 15.79H80.98V139.33h2.705v12.163zM93.515 141.71c-.268-.054-.55-.074-.85-.074-.95 0-1.688.356-2.203 1.077-.453.63-.676 1.432-.676 2.4v6.38H87.08v-8.334c0-1.4-.023-2.677-.07-3.83h2.35l.1 2.326h.076c.28-.796.734-1.44 1.35-1.92.602-.44 1.25-.653 1.953-.653.25 0 .473.014.675.048v2.58zM106.454 139.537c0 1.55-.463 2.792-1.38 3.725-1.18 1.22-2.896 1.823-5.16 1.823-.662 0-1.18-.04-1.547-.124v6.533h-2.7v-16.64c1.283-.234 2.752-.35 4.405-.35 2.134 0 3.74.46 4.828 1.38 1.033.897 1.554 2.118 1.554 3.654m-2.68.123c0-.988-.316-1.74-.948-2.262-.627-.53-1.512-.79-2.64-.79-.745 0-1.352.05-1.82.145v6.056c.385.102.907.15 1.572.15 1.194 0 2.134-.288 2.816-.87.68-.584 1.02-1.394 1.02-2.43"
                class="f"
              ></path>
              <path
                clip-path="url(#ed7e859d82a5247b_b)"
                d="M108.975 133.755h2.705v17.738h-2.705zM124.216 151.493h-2.43l-.198-1.4h-.072c-.837 1.12-2.024 1.674-3.556 1.674-1.152 0-2.075-.363-2.778-1.097-.635-.673-.95-1.496-.95-2.477 0-1.49.62-2.62 1.866-3.41 1.24-.782 2.988-1.164 5.24-1.144v-.227c0-1.605-.844-2.4-2.527-2.4-1.2 0-2.26.3-3.18.898l-.548-1.776c1.132-.7 2.528-1.05 4.177-1.05 3.186 0 4.78 1.674 4.78 5.027v4.48c0 1.215.06 2.19.176 2.903m-2.803-4.178v-1.88c-2.986-.048-4.478.77-4.478 2.456 0 .632.175 1.113.52 1.428.35.316.79.474 1.322.474.595 0 1.144-.186 1.65-.563.51-.378.818-.858.938-1.442.03-.13.048-.288.048-.473"
                class="f"
              ></path>
              <path
                clip-path="url(#ed7e859d82a5247b_b)"
                d="M137.15 139.33l-3.074 8.438c-1.472 3.986-2.847 6.55-4.13 7.703-.95.85-1.945 1.36-2.98 1.53l-.648-2.277c.618-.186 1.223-.5 1.823-.954.722-.548 1.288-1.262 1.706-2.126.134-.254.2-.432.2-.55 0-.115-.05-.308-.152-.575l-4.403-11.19h2.977l2.305 6.784c.216.618.457 1.414.728 2.402h.048c.15-.536.377-1.345.675-2.43l2.052-6.755h2.876z"
                class="f"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Od11Screen;
