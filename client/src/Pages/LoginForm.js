import React, { useState } from "react";
import Nav from "../Components/Nav";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginHan(e) {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:1337/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const { token } = await res.json();
      if (res.ok) {
        alert("logged in");
        Cookies.set("token", token);
        navigate("/");
      }
    } catch (err) {
      alert("wrong");
    }
  }

  return (
    <div>
      <Nav />
      <div className="w-full max-w-xs">
        <form
          onSubmit={loginHan}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
              id="username"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="******************"
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <Link to="/registrationForm">
            <p className="text-red-500 text-xs italic">
              dont have an account? Do registration Here
            </p>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
