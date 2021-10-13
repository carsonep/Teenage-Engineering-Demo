import React from "react";
import NavBar from "./NavBar";
import logo from "../images/logo.png";

const LoginScreen = () => {
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
            Sign In
          </h1>

          <form onSubmit={handleFormSubmit}>
            <div>
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
                Login
              </button>
            </div>
          </form>
          <p className="flex justify-center mt-4">
            Don't Have An Account? <a> Register Here!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
