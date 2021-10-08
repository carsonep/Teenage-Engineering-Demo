import React from "react";
import JapaneseSvg from "./JapaneseSvg";
import "./styleComponents/NavBar.css";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  let dt = new Date();

  return (
    <nav
      className={
        "md:mt-2 w-full fixed lg:relative" +
        (navbarOpen ? " bg-black" : " bg-transparent")
      }
      style={{ padding: "0px 4.6vw" }}
    >
      <div
        className="tracking-wide lg:relative leading-none font-normal"
        style={{ fontFamily: "Univers TE20 Thin" }}
      >
        <div className="flex lg:justify-between relative flex-nowrap items-start">
          <button
            className={
              "cursor-pointer mr-12 fixed text-xl block lg:hidden outline-none focus:outline-none" +
              (navbarOpen ? " text-white" : "text-black")
            }
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
          <div
            className={
              "lg:flex py-8 lg:py-0 flex-col lg:flex-row flex-grow lg:items-center" +
              (navbarOpen
                ? " flex h-screen w-full text-white leading-tight"
                : " hidden")
            }
          >
            <div
              style={{ margin: "-0.15vw 0px 0.458333vw", paddingRight: "5.3%" }}
            >
              <h1>
                <a className="text-left">
                  teenage <br />
                  engineering
                </a>
              </h1>
              <br />
              <span
                className="text-left hidden lg:block"
                style={{ fontSize: ".916667vw" }}
              >
                {dt.getFullYear()} {monthNames[dt.getUTCMonth()]}
              </span>
            </div>
            <div className="flex lg:py-0 flex-col lg:flex-row align-left flex-1 lg:justify-around">
              <div className="flex lg:justify-evenly flex-nowrap">
                <div className="mr-1">
                  <h2
                    className="flex justify-start"
                    style={{ paddingRight: "10px" }}
                  >
                    <a>products</a>
                  </h2>
                  <br />
                  <p>wireless audio</p>
                  <p>synthesizers</p>
                  <p>designs</p>
                </div>
              </div>
              <div className="flex pr-4 lg:py-0">
                <div className="lg:pr-4">
                  <svg
                    style={{ width: "3.9vw" }}
                    className="mt-2 hidden lg:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="37 9.5 38.5 61.5"
                  >
                    <path
                      stroke="none"
                      fill="#0F0E12"
                      stroke-width="0.5"
                      stroke-miterlimit="10"
                      d=" M48.8,10h20l5,5h-30L48.8,10z M75,30H42.5v40H75V30z M68.7,16.3v12.5H75V16.3H68.7z M42.5,16.3 v12.5h6.2V16.3H42.5z"
                    ></path>
                    <g opacity="0.8">
                      <text
                        data-cy="cart-icon"
                        fill="#fff"
                        stroke="none"
                        x="58.75"
                        y="57.5"
                        font-size="23"
                        text-anchor="middle"
                      ></text>
                    </g>
                  </svg>
                </div>
                <div className="flex mr-8 lg:py-0">
                  <div>
                    <h2>
                      <a>store</a>
                    </h2>
                    <br />
                    <p>view cart</p>
                    <p>checkout</p>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <div className="lg:pr-4">
                  <a>
                    <svg
                      style={{ width: "5.2vw" }}
                      className="mt-2 hidden lg:block"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="24 9 52 62"
                    >
                      <g transform="translate(-0.25 -0.5)">
                        <path
                          fill="#0F0E12"
                          stroke="none"
                          d="M75,70H25V10h50V70z M70,15H30v37.5h40V15z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div>
                  <div className="justify-evenly flex-nowrap ">
                    <div className="">
                      <h2 className="flex justify-start ">
                        <a>now</a>
                      </h2>
                      <br />
                      <p>newsletter</p>
                      <p>instagram</p>
                      <p>ems</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex lg:py-0" style={{ marginRight: "2%" }}>
                <div className="lg:pr-4">
                  <div>
                    <svg
                      className="pr-2 mt-2 hidden lg:block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="12.5 9.5 63.5 29"
                      style={{ width: "6.8vw" }}
                    >
                      <g id="box" transform="translate(1.5 0) scale(0.98)">
                        <path
                          fill="#0F0E12"
                          stroke="none"
                          d="M 47.5 10 H 74.5 v 27 H 48 V 10 Z M 20.878 37 h 26 V 10 h -27 V 37 Z"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden lg:block"
                      viewBox="10.5 -1 65 41"
                      style={{ width: "6.8vw" }}
                    >
                      <path
                        fill="#0F0E12"
                        stroke="none"
                        d="M63.558,24.204 c-1.192,0.199-1.887,1.291-1.787,2.383c0.199,1.192,1.291,1.887,2.383,1.787c1.192-0.199,1.887-1.291,1.787-2.383 C65.742,24.799,64.65,24.005,63.558,24.204z M69.162,14.01c0.199,1.192,1.291,1.887,2.383,1.787 c1.192-0.199,1.887-1.291,1.787-2.383c-0.199-1.192-1.291-1.887-2.383-1.787C69.757,11.726,68.963,12.819,69.162,14.01z M67.014,10.254c0.695,0.894,2.085,0.993,2.979,0.298s0.993-2.085,0.298-2.979c-0.695-0.894-2.085-0.993-2.979-0.298 C66.419,7.97,66.22,9.36,67.014,10.254z M63.166,8.201c1.092,0.397,2.284-0.099,2.681-1.192c0.397-1.092-0.099-2.284-1.192-2.681 c-1.092-0.397-2.284,0.099-2.681,1.192C61.577,6.613,62.074,7.804,63.166,8.201z M58.858,8.296 c1.192-0.199,1.887-1.291,1.787-2.383c-0.199-1.192-1.291-1.887-2.383-1.787c-1.192,0.199-1.887,1.291-1.787,2.383 C56.673,7.701,57.765,8.495,58.858,8.296z M55.211,10.551c0.894-0.695,0.993-2.085,0.298-2.979 c-0.695-0.894-2.085-0.993-2.979-0.298c-0.894,0.695-0.993,2.085-0.298,2.979C53.027,11.147,54.318,11.246,55.211,10.551z M53.159,14.292c0.397-1.092-0.099-2.284-1.192-2.681c-1.092-0.397-2.284,0.099-2.681,1.192c-0.397,1.092,0.099,2.284,1.192,2.681 C51.471,15.88,52.762,15.384,53.159,14.292z M53.254,18.6c-0.199-1.192-1.291-1.887-2.383-1.787 c-1.192,0.199-1.887,1.291-1.787,2.383s1.291,1.887,2.383,1.787C52.658,20.785,53.453,19.692,53.254,18.6z M55.403,22.246 c-0.695-0.894-2.085-0.993-2.979-0.298c-0.894,0.695-0.993,2.085-0.298,2.979c0.695,0.894,2.085,0.993,2.979,0.298 C56.098,24.53,56.197,23.14,55.403,22.246z M59.249,24.299c-1.092-0.397-2.284,0.099-2.681,1.192 c-0.397,1.092,0.099,2.284,1.192,2.681c1.092,0.397,2.284-0.099,2.681-1.192C60.838,25.987,60.342,24.696,59.249,24.299z M71.027,25.959c-1.986,1.986-4.524,3.42-7.503,3.862c-7.503,1.214-14.564-3.862-15.888-11.364 c-1.324-7.503,3.862-14.564,11.364-15.777s14.564,3.862,15.888,11.364c0.552,3.531-0.221,6.951-2.096,9.709l-0.441-0.331 c-0.221-0.11-0.441-0.11-0.662-0.11c-0.221,0.11-0.552,0.221-0.772,0.221c-1.324,0.221-2.648-0.441-3.2-1.545 c-0.11-0.221-0.331-0.331-0.552-0.221c-0.221,0.11-0.441,0.441-0.331,0.662C67.497,24.304,69.041,25.628,71.027,25.959z M63.294,15.952c-0.199-1.192-1.291-1.887-2.383-1.787c-1.192,0.199-1.887,1.291-1.787,2.383c0.199,1.192,1.291,1.887,2.383,1.787 C62.698,18.137,63.493,17.044,63.294,15.952z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h2>account</h2>
                  <br />
                  <p>sign in</p>
                  <p>register</p>
                </div>
              </div>
              <div
                className="flex leading-normal -mt-4 lg
              :-ml-8"
                style={{ width: "10%" }}
              >
                <JapaneseSvg />
              </div>{" "}
            </div>
          </div>
          <div
            class=""
            style={{ height: "160px", width: "15%", overflow: "visible" }}
          >
            <div
              class=""
              style={{
                width: "60%",
                height: "20%",
              }}
            >
              <div class="svg">
                <svg
                  xmlns="http:​/​/​www.w3.org/​2000/​svg"
                  viewBox="20 0 80 40"
                  style={{ overflow: "visible" }}
                >
                  <path
                    class="fill"
                    d="M132.706,69.979H98.218L80.924,39.99L98.218,10h34.488L150,39.99L132.706,69.979z M103.816,33.192c-3.699,6.398-1.499,14.595,4.898,18.294c6.398,3.699,14.595,1.499,18.294-4.898 c3.699-6.398,1.499-14.595-4.898-18.294S107.515,26.794,103.816,33.192 M36.439,29.993l6.498,3.699l-5.298,9.197l-6.498-3.699 L17.946,62.082l19.393,11.196l10.596-18.294L71.127,68.38c5.098,2.899,11.496,1.2,14.395-3.899 c2.899-5.098,1.2-11.496-3.899-14.395L58.532,36.591l10.496-18.294L49.635,7.101L36.439,29.993z"
                  ></path>
                  <path
                    class="line"
                    fill="none"
                    stroke-width="0.5"
                    stroke-miterlimit="10"
                    d="M132.706,69.979H98.218 L80.924,39.99L98.218,10h34.488L150,39.99L132.706,69.979z M103.816,33.192c-3.699,6.398-1.499,14.595,4.898,18.294 c6.398,3.699,14.595,1.499,18.294-4.898c3.699-6.398,1.499-14.595-4.898-18.294S107.515,26.794,103.816,33.192 M36.439,29.993 l6.498,3.699l-5.298,9.197l-6.498-3.699L17.946,62.082l19.393,11.196l10.596-18.294L71.127,68.38 c5.098,2.899,11.496,1.2,14.395-3.899c2.899-5.098,1.2-11.496-3.899-14.395L58.532,36.591l10.496-18.294L49.635,7.101 L36.439,29.993z"
                  ></path>
                  <path
                    class="allfill"
                    d="M143.102,15.298c-1.499,0-2.699-1.3-2.699-2.699c0-1.499,1.2-2.699,2.699-2.699 s2.699,1.2,2.699,2.699S144.602,15.298,143.102,15.298z M143.102,10.2c-1.3,0-2.399,1-2.399,2.399c0,1.3,1,2.399,2.399,2.399 c1.3,0,2.399-1.1,2.399-2.399C145.402,11.3,144.402,10.2,143.102,10.2z M143.902,13.999c-0.1-0.1-0.1-0.3-0.1-0.5 c0-0.5-0.2-0.7-0.8-0.7h-0.6v1.2h-0.4V11.1h1c0.7,0,1.2,0.2,1.2,0.8c0,0.4-0.2,0.6-0.5,0.7c0.4,0.2,0.5,0.4,0.5,0.9 c0,0.2,0,0.4,0.1,0.5H143.902z M143.202,11.499h-0.8v1h0.7c0.4,0,0.8-0.1,0.8-0.5C143.902,11.699,143.702,11.499,143.202,11.499z"
                  ></path>
                </svg>
                ​
              </div>
            </div>
            ​
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
