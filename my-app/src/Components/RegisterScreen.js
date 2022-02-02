import React, { useState } from "react";

import { useCreateUserMutation } from "../features/api/apiSlice";

import NavBar from "./NavBar";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
// import LoadingSpinner from "../Components/LoadingSpinner";
import Footer from "./Footer";


const RegisterScreen = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { isLoading }] = useCreateUserMutation();

  const canSave = [displayName, email, password].every(Boolean) && !isLoading;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (canSave) {
      try {
        await createUser({ displayName, email, password }).unwrap();
        window.location = "/login";
        setDisplayName("");
        setEmail("");
        setPassword("");
      } catch (err) {
        console.error("Failed to post user", err);
      }
    }
  };
  return (
    <div>
      <NavBar textColor={"#000000"} />
      <div className="h-screen flex items-center bg-gray-bg1">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <img alt="" src={logo} />
          <h1 className="text-4xl font-medium text-primary mt-4 mb-8 text-center">
            Register
          </h1>

          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="text">Username</label>
              <input
                type="text"
                className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="name"
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your Username"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                className={`bg-black h-3/4 md:p-2 text-sm text-white w-full text-lg`}
              >
                Create Account
              </button>
            </div>
          </form>
          <p className="flex justify-center mt-4">
            Already Have an Account? <NavLink to="/login"> Sign In!</NavLink>
          </p>
        </div>
      </div>
      <Footer textColor={"#a9a9a9"} bgColor={"#0f0e12"} />
    </div>
  );
};

export default RegisterScreen;
