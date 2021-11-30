import React from "react";
import NavBar from "./NavBar";
import ob4Hero from "../images/ob4Hero.png";
import opzHero from "../images/opzHero.jpg";
import redModularHero from "../images/redModularHero.png";
import pocketOperatorHero from "../images/pocketOperatorHero.png";
import op1Hero from "../images/op1Hero.png";
import orthoHero from "../images/orthoHero.png";
import od11Hero from "../images/od11Hero.png";
import op1Acc from "../images/op1Acc.jpg";
import cameraHero from "../images/cameraHero.png";
import computer1Hero from "../images/computer1Hero.jpg";
import "./styleComponents/ProductPreview.css";
import { Link, NavLink } from "react-router-dom";

function ProductsPreview() {
  return (
    <div className="product__preview">
      <NavBar textColor={"rgb(232,143,110)"} />
      <div className="grid grid-cols-6 gap-2 md:gap-0">
        <Link
          to="/products/computer-1"
          style={{ textDecoration: "none" }}
          className="md:-mt-14 lg:-mt-44 w-full col-span-6 rounded-2xl md:rounded-none mt-2 md:mt-0"
        >
          <div
            className="rounded-2xl md:rounded-none"
            style={{
              backgroundImage: `url(${computer1Hero})`,
              backgroundSize: "100%",
              backgroundPosition: "50% 101.3%",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: 0,
              paddingTop: "100%",
            }}
          ></div>
        </Link>

        <Link
          to="/products/ob-4"
          style={{ textDecoration: "none" }}
          className="md:-mt-14 lg:-mt-44 w-full col-span-6 rounded-2xl md:rounded-none mt-2 md:mt-0"
        >
          <div
            className="rounded-2xl md:rounded-none"
            style={{
              backgroundImage: `url(${ob4Hero})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 60%",
              width: "100%",
              height: 0,
              paddingTop: "70%",
            }}
          ></div>
        </Link>

        <NavLink
          to="/products/op-z"
          className="col-span-6 md:col-span-3 mt-2 md:mt-0"
        >
          <div>
            <img
              alt=""
              className="w-full rounded-2xl md:rounded-none"
              src={opzHero}
            />
          </div>
        </NavLink>

        <NavLink
          to="/products/po/modular"
          className="col-span-6 md:col-span-3 mt-2 md:mt-0"
        >
          <div
            className="rounded-2xl md:rounded-none"
            style={{
              backgroundImage: `url(${redModularHero})`,
              backgroundSize: "255%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "25% 25%",
              width: "100%",
              height: 0,
              paddingTop: "139.45%",
              backgroundColor: "#cb986c",
            }}
          ></div>
        </NavLink>

        <NavLink to="/products/po" className="col-span-6 mt-2 md:mt-0">
          <div
            className="rounded-2xl md:rounded-none"
            style={{ backgroundColor: "#e5e5e5" }}
          >
            <img alt="" src={pocketOperatorHero} />
          </div>
        </NavLink>

        <NavLink
          to="/products/op-1"
          className="col-span-6 md:col-span-2 mt-2 md:mt-0"
        >
          <div
            className="rounded-2xl md:rounded-none"
            style={{
              backgroundImage: `url(${op1Hero})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "25% 25%",
              width: "100%",
              height: 0,
              paddingTop: "102.2%",
              backgroundColor: "#b2b2b7",
            }}
          ></div>
        </NavLink>

        <NavLink
          to="/products/orthoremote"
          className="col-span-3 md:col-span-2 mt-2 md:mt-0"
        >
          <div
            className="h-full rounded-2xl md:rounded-none"
            style={{ backgroundColor: "#0f0e12" }}
          >
            <img alt="" className="" src={orthoHero} />
          </div>
        </NavLink>

        <NavLink
          to="/products/od-11"
          className="col-span-3 md:col-span-2 mt-2 md:mt-0"
        >
          <div className="">
            <img
              alt=""
              className="rounded-2xl md:rounded-none"
              src={od11Hero}
            />
          </div>
        </NavLink>

        <NavLink
          to="products/op-1/accessories"
          className="hidden md:block col-span-6 rounded-2xl md:rounded-none mt-2 md:mt-0"
        >
          <div className="hidden md:block rounded-2xl md:rounded-none">
            <img alt="" src={op1Acc} />
          </div>
        </NavLink>

        <NavLink to="/designs/I-1" className="col-span-6 mt-2 md:mt-0">
          <div
            className="rounded-2xl md:rounded-none mt-2"
            style={{
              backgroundColor: "#282828",
              backgroundSize: "72.9%",
            }}
          >
            <img alt="" src={cameraHero} className="object-contain" />
          </div>
        </NavLink>

        <NavLink
          to="/store"
          className="col-span-6 h-48 flex justify-center items-center rounded-2xl md:rounded-none mt-2 md:mt-0"
          style={{
            backgroundColor: "#0071bb",
          }}
        >
          <div className="rounded-2xl md:rounded-none">
            <h1 className="text-white text-2xl md:text-5xl">
              worldwide delivery. visit our store.
            </h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default ProductsPreview;
