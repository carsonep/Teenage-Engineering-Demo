import React from "react";
import NavBar from "./NavBar";

function CheckoutScreen() {
  return (
    <div style={{ backgroundColor: "#e5e5e5" }}>
      <NavBar bgColor={"#000"} textColor={"#fff"} />
      {/* <h1 className="flex justify-center items-center text-5xl ">
        checkout
      </h1> */}
      <div className="h-full my-6">
        <div className="bg-white" style={{ padding: "16px 20vw" }}>
          <div className="flex items-center justify-between ">
            <h1>shopping cart</h1>
            <p>edit</p>
          </div>
          <div className="flex justify-between border-t-2 border-b-2 py-4 font-light">
            <p className="text-3xl">1 x pocket operator modular 170</p>
            <p className="text-3xl">$479</p>
          </div>
          <div className="font-light flex justify-between mt-2">
            <div>
              <p className="text-3xl">subtotal</p>
              <p className="text-3xl">estimated tax</p>
              <p className="text-3xl">shipping</p>
              <p className="font-normal text-4xl">total</p>
            </div>
            <div className="text-right">
              <p className="text-3xl">$479.00</p>
              <p className="text-3xl">$0.00</p>
              <p className="text-3xl">$0.00</p>
              <p className="font-normal text-4xl mt-2">$479.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full my-6">
        <div className="bg-white" style={{ padding: "16px 20vw" }}>
          <div className="flex items-center justify-between ">
            <h1>customer information</h1>
          </div>
          <div className="flex justify-between border-t-2 border-b-2 py-4 font-light">
            <p className="text-3xl">1 x pocket operator modular 170</p>
            <p className="text-3xl">$479</p>
          </div>
          <div className="font-light flex justify-between mt-2">
            <div>
              <p className="text-3xl">subtotal</p>
              <p className="text-3xl">estimated tax</p>
              <p className="text-3xl">shipping</p>
              <p className="font-normal text-4xl">total</p>
            </div>
            <div className="text-right">
              <p className="text-3xl">$479.00</p>
              <p className="text-3xl">$0.00</p>
              <p className="text-3xl">$0.00</p>
              <p className="font-normal text-4xl mt-2">$479.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutScreen;
