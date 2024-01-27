import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

const Login = () => {
  const [showPassword, setShowPassword] = useState({
    password: true,
    cpassword: false,
  });
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  let name;
  let value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    // console.log(value);
    setUser({ ...user, [name]: value });
  };

  const userLogin = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log("from login", data);
    if (res.status === 401) {
      window.alert("invalid email");
    } else if (res.status === 400) {
      window.alert("incorrect password");
    } else {
      window.alert("login successfully");
      navigate("/");
    }
  };

  // const handleInputs = (e) => {
  //   name = e.target.name;
  //   console.log(name);
  //   value = e.target.value;
  //   console.log(value);
  //   setUser({ ...user, [name]: value });
  // };

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section
        className="py-24 md:py-32 bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Sign in to your account
              </h3>
              <p className="text-lg text-coolGray-500 font-medium">
                Welcome Back
              </p>
            </div>
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-coolGray-800 font-medium">
                  Email
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Password
                </label>

                <div className="flex justify-between items-center appearance-none w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  <input
                    className="outline-none w-[100%] h-[100%]"
                    placeholder="************"
                    name="password"
                    type={showPassword.password ? "password" : "text"}
                    value={user.password}
                    onChange={handleInput}
                  />
                  <div
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        password: !showPassword.password,
                      })
                    }
                  >
                    {showPassword.password ? (
                      <RemoveRedEyeIcon fontSize="smaller" />
                    ) : (
                      <VisibilityOffIcon fontSize="smaller" />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between mb-6"></div>
              <button
                onClick={userLogin}
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
              >
                Sign In
              </button>
              <p className="text-center">
                <span className="text-xs font-medium">
                  Don’t have an account?
                </span>
                <Link to="/register">
                  <button className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline">
                    Sign up
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Login;
