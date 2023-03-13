import React, {useState} from 'react';
import "./works.scss";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";

export default function Works() {

  const [currentSlide, setCurrentSlide]=useState(0); //Initially first slide
  const data=[
    {
      id: "1",
      icon: "../assets/mobile.png",
      title:"Project 1",
      desc:"This is description of project 1",
      img:"../assets/ReactJS-banner.jpg"
    },
    {
      id: "2",
      icon: "../assets/globe.png",
      title:"Project 2",
      desc:"This is description of project 2",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg"
    },
    {
      id: "3",
      icon: "../assets/writing.png",
      title:"Project 3",
      desc:"This is description of project 3",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg"
    }
      
    
  ];

  const handleClick= (way) => {
    way==="left" ? setCurrentSlide(currentSlide >0 ? currentSlide-1 : 2) : 
    setCurrentSlide(currentSlide<data.length-1 ? currentSlide +1 : 0);
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="img" className="icon" /> 
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="img" />
            </div>
          </div>
        </div>
        ))}
        </div>
      <ChevronLeft  className="arrow left" onClick={() => handleClick("left") }/>
      <ChevronRight className="arrow right" onClick={() => handleClick("right") }/>
    </div>
  )
}
