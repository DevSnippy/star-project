import React from "react"
import GetPic from "./components/pic";
import Sqr from "./components/blackSqr"
import NavBar from "./components/NavBar";
import footer from "./components/Footer";

export default function App() {
  return (
    <div>
  <NavBar/>
  <GetPic/>
  <Sqr/>
    <Footer/>
  </div> 
  )
}

