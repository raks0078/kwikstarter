import React from "react";
import "./ProjectCard.scss";
import kwikstarter from "../../assests/images/kwikstarter-transparent.png";

function ProjectCard() {
  return (
    <div className="projectCard">
      <div className="cardHeader">
        <div className="logo">
          <img src={kwikstarter} alt="kwikstater" />
        </div>
        <div className="headerInfo">
          <h1>Hold Finance</h1>
          <div className="links">
            <div className="socialLink">
              <i className="fab fa-medium-m"></i>
            </div>
            <div className="socialLink">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="socialLink">
              <i className="fab fa-telegram-plane"></i>
            </div>
            <div className="socialLink">
              <i className="fas fa-globe"></i>
            </div>
          </div>
          <div className="status">
            <div className="dot"></div>
            <h4>Opens in TBA</h4>
          </div>
          <h4 className="buds">BUSD</h4>
        </div>
      </div>
      <div className="cardInfo">
        <p>
          A full service #NFT & DeFi platform that tokenizes, launches and
          trades intellectual property rights from Arts and Inventions.
        </p>
        <a href="">
          <p>Learn More</p>
        </a>
        <div className="moreInfo">
          <div className="info">
            <p>Swap Rate</p>
            <h1>TBA</h1>
          </div>
          <div className="info">
            <p>Cap</p>
            <h1>TBA</h1>
          </div>
          <div className="info">
            <p>Access</p>
            <h1>Private</h1>
          </div>
        </div>
        <div className="progressBar">
          <p>Progress</p>
          <div className="bar"></div>
          <div className="percentage">
            <h4>0.00%</h4>
            <h4>0.0000/TBA</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
