import React, { Component } from 'react'
import bscpoologo from "../images/bcs_pool.svg"
import "./Homepage.scss"
class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="hero-section">
          <div className="container">
            <img src={bscpoologo} className="rotate" />
            <h2 className="text-center">The BSCPOOL<br />is the first decentralized IDO platform for the Binance Smart Chain Network.</h2>
            <h5>BSCPOOL will empower crypto currency projects with the ability to distribute tokens and raise liquidity.</h5>
            <div className="d-flex justify-content-center mt-4">
              <button className="button-primary">View All Projects</button>
              <button className="button-secondary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="about-us">
            <div className="container">
              fdfd
            </div>
        </div>
      </div>
    )
  }
}

export default Homepage
