import React from "react";
import "./frontend.css";
import Firstsection from "../Pages/Firstsection";
import Navbar from "../Pages/Navbar";
import Secondsection from "../Pages/Secondsection";
import Thirdsection from "../Pages/Thirdsection";
import Footer from "../Pages/Footer";
import Fourthsection from "../Pages/Fourthsection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Frontend() {
  const notify = () =>
    toast("login succesfully", {
      toastId: "unique-random-text-xAu9C9-",
      position: toast.POSITION.TOP_CENTER,
      toastId: "007",
    });

  notify();
  return (
    <>
      <Navbar></Navbar>
      <Firstsection></Firstsection>
      <Secondsection></Secondsection>
      <Thirdsection></Thirdsection>
      <Fourthsection></Fourthsection>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default Frontend;
