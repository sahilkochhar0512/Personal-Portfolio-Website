import React from 'react';
import "./intro.scss";
import {KeyboardArrowDown} from "@material-ui/icons";
import {init} from "ityped";
import {useEffect, useRef} from "react";
//useRef works like document.queryselector
export default function Intro() {
  const textRef= useRef();

  useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Web Developer", "Python Developer"],
      })
  },[])
  // We have empty array dependency in useEffect therefore it will work only once


  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/SK.png" alt="profilepic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sahil Kochhar</h1>
          <h3>I am a <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="keyIcon"/>
        </a>
      </div>
    </div>
  )
}
