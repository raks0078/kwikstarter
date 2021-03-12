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
        <div className="container">
            <div className="about-us">
              <div className="heading">About Us</div>
              <div className="d-flex">
              <div className="circle-animation"></div>
              <div className="content">
                <div>
                  <h4>WHAT IS BSCPOOL?</h4>
                  <h5>The BSCPool is the first decentralized IDO platform for the Binance Smart Chain Network.</h5>
                  <small>BSCPool will empower crypto currency projects with the ability to distribute tokens and raise liquidity.</small>
                </div>
                <div>
                  <h4>WHY CHOOSE US?</h4>
                  <h5>BSCPool has found a solution to incentivize and reward all token holders in a way that is inclusive and with a low barrier to entry.</h5>
                  <small>The fundamental flaws of existing launchpads is that <b>acquiring enough tokens to participate in the ecosystem is prohibitive</b>, and even <b>if you do hold the tokens, you are not guaranteed an allocation spot</b>. They are based on a first come first serve basis where automated bots can fill the whitelist spots in a matter of seconds. <b>BSCPool is creating fair decentralized launches</b>.</small><br/>
                  <small className="mt-15">The hallmark of the BSCPool is a two-round system that makes <b>every tier level guaranteed an allocation</b>. There is no luck, and no lotteries, and no bots; only fair distributed rewards for all participants.</small>
                </div>
              </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Homepage
