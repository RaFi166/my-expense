import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import Nav from "./Nav";

const Home = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   fetch("http://localhost:1337/api/", {
  //     headers: {
  //       Authorization: token,
  //     },
  //   })
  //     .then(() => console.log("successfull token"))
  //     .catch((err) => {
  //       console.log(err.message);
  //       navigate("/login");
  //     });
  // }, []);
  return (
    <div>
      <Nav />
      <Form />
    </div>
  );
};

export default Home;
