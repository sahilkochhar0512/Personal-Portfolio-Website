import React from 'react';
import "./portfolio.scss";
import PortfolioList from "../portfoliolist/portfoliolist.jsx";
import {useState, useEffect} from "react";
import { webPortfolio, pythonPortfolio, mlPortfolio } from '../../data';

export default function Portfolio() {
  const [selected, setSelected]= useState("webapp");
  const[data, setData]= useState([]);
  const list=[
    {
      id: "webapp",
      title: "Web App",
    },
    {
      id: "pythonapp",
      title: "Python App",
    },
    {
      id: "mlapp",
      title: "ML App",
    },
  ];

  useEffect(() => {

    switch(selected){
      case "webapp":
        setData(webPortfolio);
        break;
      case "pythonapp":
        setData(pythonPortfolio);
        break;
      case "mlapp":
        setData(mlPortfolio);
        break;
      default: setData(webPortfolio);
    }

  },[selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
      {list.map(item => (
        <PortfolioList title={item.title} 
        active={selected===item.id} 
        setSelected={setSelected} 
        id={item.id}
        />
      ))}
        
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
          <img className="blogImg" src={d.img} alt="blog" />
          <h3>{d.title}</h3>
        </div>
        ))}
       
      </div>
    </div>
  )
}
