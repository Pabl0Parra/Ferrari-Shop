import React, { useState, useEffect } from "react";
import Video from "../assets/homepage-video.mp4";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-container">
      <video playsInline autoPlay loop src={Video} muted></video>
      <div></div>
      <h1 className="home-h1">WHAT CAN BE CONCEIVED CAN BE CREATED</h1>
      <Footer />
    </div>
  );
}

export default Home;
