import React from "react";
import NavBar from "./NavBar";
import logo from "../images/logo.png";

const RegisterScreen = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };
  return (
    <div>
      <NavBar textColor={"#000000"} />
      <div className="h-screen flex items-center bg-gray-bg1">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <img src={logo} />
          <h1 className="text-4xl font-medium text-primary mt-4 mb-8 text-center">
            Register
          </h1>

          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Username</label>
              <input
                type="name"
                className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="name"
                placeholder="Your Username"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
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
            Already Have an Account? <a> Sign In!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
