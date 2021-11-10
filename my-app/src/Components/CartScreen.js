import React, { useState } from "react";
import NavBar from "./NavBar";
import {
  useGetBasketQuery,
  useUpdateBasketMutation,
} from "../features/api/apiSlice";
import LoadingSpinner from "./LoadingSpinner";
import { XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function CartScreen() {
  const { data, isFetching, isSuccess } = useGetBasketQuery("basket1");
  const [basketTotal, setBasketTotal] = useState(0);
  const [updateBasket, { isLoading }] = useUpdateBasketMutation();

  let content;

  if (isFetching) {
    content = <LoadingSpinner />;
  } else if (isSuccess) {
    content = data.items.map((cartItem, i) => (
      <div
        className="flex justify-center items-center bg-white my-6 px-60"
        style={{ height: "225px" }}
      >
        <div className="w-1/6 mr-10 text-4xl">
          <h1>{cartItem.productName}</h1>
          <p className="font-light text-2xl">in stock</p>
        </div>
        <img
          className=""
          style={{ height: "180px" }}
          src={`https://localhost:5001/${cartItem.pictureUrl}`}
        />
        <h1 className="mx-24">quantity: {cartItem.quantity}</h1>
        <h1 className="mr-40">${cartItem.price}</h1>
        <XIcon className="h-12 w-12 ml-8 text-black " />
      </div>
    ));
  }
  return (
    <div style={{ backgroundColor: "#e5e5e5" }}>
      <NavBar bgColor={"#000"} textColor={"#fff"} />
      <h1 className="flex justify-center items-center text-5xl my-20">
        shopping cart
      </h1>
      <div className="">{content}</div>
      <div className="pb-8 ">
        <div
          className="grid grid-cols-12 gap-2 "
          style={{ padding: "0px 4.6vw" }}
        >
          <div
            className="flex col-start-9 col-span-2"
            style={{ fontSize: "1.25vw" }}
          >
            <div className="flex flex-col text-right font-light pr-4">
              <span>subtotal</span>
              <span>estimated tax </span>
              <span>shipping </span>
              <span className="font-normal text-4xl">total </span>
            </div>
            <div className="flex flex-col font-light">
              <span>$479.00</span>
              <span>$0.00</span>
              <span>$0.00</span>
              <span className="font-normal text-4xl">$479</span>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-12 gap-2 mt-12"
          style={{ padding: "0px 4.6vw" }}
        >
          <button
            className="bg-white text-black col-span-4 col-start-3 text-4xl"
            style={{ height: "90px" }}
          >
            continue shopping
          </button>
          <button className="bg-black text-white col-span-4 text-4xl">
            <Link to="/store/checkout">checkout</Link>
          </button>
        </div>
        <div className="flex flex-col justify-center text-center font-light text-2xl pt-8">
          <span>shipping takes on average 1-5 days.</span>
          <span>1 year warranty and a 14 day return policy applies</span>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
