import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

function OrderCompletePage() {
  useEffect(() => {
    localStorage.removeItem("customerBasket");
  }, []);

  return (
    <div style={{ padding: "0 4.6vw", backgroundColor: "#e5e5e5" }}>
      <NavBar textColor={"#000"} />

      <div
        className="flex flex-col justify-center w-full text-center"
        style={{ height: "90vh" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl">
          your order is complete.
        </h1>
        <h2 className="font-light text-2xl md:text-3xl lg:text-4xl mt-8">
          your order will not be arriving because this is a demo application.
        </h2>

        <div className="w-full flex justify-center">
          <NavLink
            to="/store"
            className="bg-black flex justify-center items-center text-white h-16 lg:h-20 text-2xl lg:text-3xl w-full md:w-2/5 mt-8 lg:mt-16"
          >
            continue shopping
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default OrderCompletePage;
