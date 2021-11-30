import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import {
  useCreateOrderMutation,
  useCreatePaymentMutation,
} from "../features/api/apiSlice";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./styleComponents/CheckoutForm.css";

const stripePromise = loadStripe(
  "pk_test_51JuhpXDjpVDL6NtP9Ow4NL2ltCutY319dsfaGpQRuwYnlfRbJGmsvsnme6WXdkDgH769uJG0amWCgOlsPHOHwo1u00mfLQBesr"
);

function CheckoutScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [basket, setBasket] = useState();
  const [basketTotal, setBasketTotal] = useState(0);

  const [order, { isLoading }] = useCreateOrderMutation();

  const [data] = useCreatePaymentMutation();
  let total = 0;

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await data("basket1").unwrap();

      if (response) {
        response.items.forEach((element) => {
          total += element.price;
        });
      }

      setBasketTotal(total.toFixed(2));
      setClientSecret(response.clientSecret);
      setBasket(response);
    }
    fetchMyAPI();
  }, [data]);

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const appearance = {
    theme: "none",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const canSave =
    [firstName, lastName, street, city, state, zipCode].every(Boolean) &&
    !isLoading;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        await order({
          basketId: "basket1",
          shipToAddress: {
            firstname: firstName,
            lastName: lastName,
            street: street,
            city: city,
            state: state,
            zipcode: zipCode,
          },
        }).unwrap();
      } catch (err) {
        console.error("Failed to post user", err);
      }
    }
  };

  const showPaymentDiv = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        document.getElementById("payment__div").style.display = "block";
      } catch (err) {
        console.error("Failed to post user", err);
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <NavBar bgColor={"#000"} textColor={"#fff"} />
      <h1 className="checkout__title flex justify-center items-center text-5xl py-16">
        checkout
      </h1>
      <div className="h-full my-6 checkout">
        <div className="checkout__div">
          <div className="flex items-center justify-between h-24">
            <div className="-mt-8" style={{ width: "4vw", height: "4vh" }}>
              <svg viewBox="0 0 100 100" class="w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke-width="4"
                  fill="#000"
                ></circle>
                <text
                  x="50"
                  y="64.5"
                  text-anchor="middle"
                  font-size="48"
                  stroke="none"
                  fontWeight="normal"
                  class="fill-current text-white"
                >
                  1
                </text>
              </svg>
            </div>
            <h1>shopping cart</h1>
            <p className="flex items-center">edit</p>
          </div>
          <div className="flex flex-col justify-between border-t-2 border-b-2 py-4 font-light pt-4 ">
            {/* {basket.items.map((e, i) => (
              <div className="flex justify-between">
                <p className="text-3xl">1 x {e.productName}</p>
                <p className="text-3xl">${e.price}</p>
              </div>
            ))} */}
          </div>
          <div className="font-light flex justify-between mt-2">
            <div className="p-4 md:p-0">
              <p style={{ fontSize: "2.63vw" }}>subtotal</p>
              <p style={{ fontSize: "2.63vw" }}>estimated tax</p>
              <p style={{ fontSize: "2.63vw" }}>shipping</p>
              <p className="font-normal" style={{ fontSize: "3.33vw" }}>
                total
              </p>
            </div>
            <div className="p-4 md:p-0">
              <p style={{ fontSize: "2.63vw" }}>${basketTotal}</p>
              <p style={{ fontSize: "2.63vw" }}>$0.00</p>
              <p style={{ fontSize: "2.63vw" }}>$0.00</p>
              <p className="font-normal mt-2" style={{ fontSize: "3.33vw" }}>
                ${basketTotal}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full my-6 checkout">
        <div className="checkout__div">
          <div className="flex items-center h-24">
            <div className="-mt-8" style={{ width: "4vw", height: "4vh" }}>
              <svg viewBox="0 0 100 100" class="w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke-width="4"
                  fill="#000"
                ></circle>
                <text
                  x="50"
                  y="64.5"
                  text-anchor="middle"
                  font-size="48"
                  stroke="none"
                  fontWeight="normal"
                  class="fill-current text-white"
                >
                  2
                </text>
              </svg>
            </div>
            <h1>user information</h1>
          </div>
          {currentUser ? (
            <div className="flex justify-between mt-4 pt-4 border-t-2">
              <div className="px-4 pb-4 md:px-0">
                <p className="text-3xl">username</p>
                <p className="text-3xl">email</p>
              </div>
              <div className="text-right px-4 md:px-0">
                <p className="text-3xl">{currentUser.displayName}</p>
                <p className="text-3xl">{currentUser.email}</p>
              </div>
            </div>
          ) : (
            <div
              className="flex justify-between mt-4 pt-4 border-t-2 "
              style={{ fontSize: "1.94vw" }}
            >
              <div>
                please{" "}
                <Link className="text-blue-400" to="/login">
                  log in
                </Link>{" "}
                to continue. if you do not have an account{" "}
                <Link className="text-blue-400" to="/register">
                  register here
                </Link>{" "}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="h-full my-6 checkout">
        <div className="checkout__div">
          <div className="flex items-start">
            <div style={{ width: "4vw", height: "4vh" }}>
              <svg viewBox="0 0 100 100" class="w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke-width="4"
                  fill="#000"
                ></circle>
                <text
                  x="50"
                  y="64.5"
                  text-anchor="middle"
                  font-size="48"
                  stroke="none"
                  fontWeight="normal"
                  class="fill-current text-white"
                >
                  3
                </text>
              </svg>
            </div>
            <h1 className="pt-2 ml-2">delivery address</h1>
          </div>
          <div className="mt-10 pt-4 border-t-2">
            <form
              onSubmit={handleFormSubmit}
              className="grid grid-cols-12 gap-4 flex justify-center"
            >
              <div className="col-span-12 md:col-span-6 px-4 md:px-0">
                <label htmlFor="text">first name*</label>
                <input
                  type="text"
                  className={`w-full p-4 text-primary outline-none  transition duration-150 ease-in-out mb-4`}
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="first name..."
                  required
                />
              </div>
              <div className="col-span-12 md:col-span-6 px-4 md:px-0">
                <label htmlFor="text">last name*</label>
                <input
                  type="text"
                  className={`w-full p-4 text-primary outline-none  transition duration-150 ease-in-out mb-4`}
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="last name..."
                  required
                />
              </div>
              <div className="col-span-12 md:col-span-6 px-4 md:px-0">
                <label htmlFor="address">address*</label>
                <input
                  type="text"
                  className={`w-full p-4 text-primary outline-none  transition duration-150 ease-in-out mb-4`}
                  id="address"
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="address..."
                  required
                />
              </div>

              <div className="col-span-12 md:col-span-6 px-4 md:px-0">
                <label htmlFor="city">city*</label>
                <input
                  type="text"
                  className={`w-full p-4 text-primary outline-none  transition duration-150 ease-in-out mb-4`}
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="city..."
                  required
                />
              </div>
              <div className="col-span-12 md:col-span-6 px-4 md:px-0">
                <label htmlFor="state">state*</label>
                <input
                  type="text"
                  className={`w-full p-4 text-primary outline-none  transition duration-150 ease-in-out mb-4`}
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                  placeholder="state..."
                  required
                />
              </div>
              <div className="col-span-12 md:col-span-6 px-4 md:px-0">
                <label htmlFor="zipcode">zipcode*</label>
                <input
                  type="text"
                  className={`w-full p-4 text-primary outline-none  transition duration-150 ease-in-out mb-4`}
                  id="zipcode"
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="zipcode..."
                  required
                />
              </div>

              <div className="flex justify-center items-center md:mt-6 col-span-12 h-32 px-4 md:px-0">
                <button
                  className={`bg-black h-3/4 md:p-2 text-sm text-white w-full text-4xl `}
                  onClick={showPaymentDiv}
                >
                  continue to payment
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full my-6 checkout__div">
          <div className="flex items-start">
            <div style={{ width: "4vw", height: "4vh" }}>
              <svg viewBox="0 0 100 100" class="w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke-width="4"
                  fill="#000"
                ></circle>
                <text
                  x="50"
                  y="64.5"
                  text-anchor="middle"
                  font-size="48"
                  stroke="none"
                  fontWeight="normal"
                  class="fill-current text-white"
                >
                  3
                </text>
              </svg>
            </div>
            <h1 className="pt-2 ml-2">delivery address</h1>
          </div>
          <div
            className="px-4 md:px-0 "
            style={{ display: "none" }}
            id="payment__div"
          >
            {clientSecret && order && (
              <Elements
                options={options}
                stripe={stripePromise}
                clientSecret={clientSecret}
              >
                <CheckoutForm style={{ width: "100%" }} />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutScreen;
