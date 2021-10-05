import React from "react";

function NavBar() {
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
    <nav className="mr-14 ml-14 mt-1 bg-pink-200">
      <div
        className="box-content text-l leading-none"
        style={{ fontFamily: "Univers TE20 Thin", padding: "0px 1.1vw" }}
      >
        <div className="flex justify-between flex-nowrap items-start">
          <div className="ml-2  p-1.25 bg-red-500 pr-24">
            <h1 className="flex justify-start justify-start text-4xl">
              <a className="text-left">
                teenage <br />
                engineering
              </a>
            </h1>
            <br />
            <span className="text-left">
              {dt.getFullYear()} {monthNames[dt.getUTCMonth()]}
            </span>
          </div>
          <div className="flex flex-1 justify-around bg-red-200">
            <div className="flex justify-evenly flex-nowrap">
              <div className="p-1.25">
                <h2 className="flex justify-start text-4xl mt-1">
                  <a>products</a>
                </h2>
                <br />
                <p className="flex justify-start">wireless audio</p>
                <p className="flex justify-start">synthesizers</p>
                <p className="flex justify-start">designs</p>
              </div>
            </div>
            <div className="flex pr-4">
              <div className="pr-4">
                <svg
                  style={{ width: "3.9vw" }}
                  className="mt-4"
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
              <div className="flex justify-evenly flex-nowrap mr-8">
                <div className="mt-1">
                  <h2 className="flex justify-start text-4xl">
                    <a>store</a>
                  </h2>
                  <br />
                  <p className="flex justify-start">view cart</p>
                  <p className="flex justify-start">checkout</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="pr-4">
                <a>
                  <svg
                    style={{ width: "5.2vw" }}
                    className="mt-4"
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
                <div className="flex justify-evenly flex-nowrap">
                  <div>
                    <h2 className="flex justify-start text-4xl">
                      <a>now</a>
                    </h2>
                    <br />
                    <p className="flex justify-start">newsletter</p>
                    <p className="flex justify-start">instagram</p>
                    <p className="flex justify-start">ems</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="pr-4">
                <div>
                  <svg
                    className="pr-2 mt-3"
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
                <h2 className="text-4xl">account</h2>
                <br />
                <p>sign in</p>
                <p>register</p>
              </div>
            </div>
            <div
              className="flex items-center tracking-tight bg-red-500"
              style={{ fontSize: "60%" }}
            >
              <span className="flex flex-col">
                <span>代工学は未来の製品と</span>
                <span>コミュニケーションを生</span>
                <span>み出すスタジオです。</span>
                <span>私たちのミッションは</span>
                <span>先端工学を用いて上質で</span>
                <span>機能的なデザインの</span>
                <span>製品を作り出すことです。</span>
                <span>是非、新たなスタイルで</span>
                <span>音楽をお楽しみください。</span>
              </span>
            </div>{" "}
          </div>
          <div
            class="bg-red-500"
            style={{ height: "160px", width: "15%", overflow: "visible" }}
          >
            <div
              class=""
              style={{
                width: "60%",
                height: "80px",
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
