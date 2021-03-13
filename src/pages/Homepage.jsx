import React, { Component } from 'react'
import bscpoologo from "../images/bcs_pool.svg"
import blockchain from "../images/blockchain-cuties.jpg"
import konomi from "../images/konomi-network.jpg"
import oddz from "../images/oddz-finance.png"
import shyft from "../images/shyft-network.jpg"
import convergence from "../images/convergence-finance.jpg"
import chain from "../images/chain-guardiance.png"
import ethernity from "../images/ethernity.jpg"
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
              {/* <div className="circle-animation"></div> */}
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
        <div className="container">
          <div className="upcoming-pools">
            <div className="heading">Upcoming Pools</div>
            <div className="d-flex flex-wrap mt-5">
              <div className="card">
                <div className="square-box">
                  <img src={blockchain} />
                  Blockchain Cuties
                </div>
                <div className="total-text">
                  <small>Total Raise</small>
                  <h3>$440K</h3>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Min Allocation</small>
                      <span>0</span>
                    </li>
                    <li>
                      <small>Max Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>Private</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                </svg>
                  In 2 days
                </div>
              </div>
              <div className="card">
                <div className="square-box">
                  <img src={konomi} />
                  Konomi Network
                </div>
                <div className="total-text">
                  <small>Total Raise</small>
                  <h3>$200K</h3>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Min Allocation</small>
                      <span>0</span>
                    </li>
                    <li>
                      <small>Max Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>Private</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                </svg>
                  In 3 days
                </div>
              </div>
              <div className="card">
                <div className="square-box">
                  <img src={oddz} />
                  Oddz Finance
                </div>
                <div className="total-text">
                  <small>Total Raise</small>
                  <h3>$150K</h3>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Min Allocation</small>
                      <span>0</span>
                    </li>
                    <li>
                      <small>Max Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>Private</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                </svg>
                  In 5 days
                </div>
              </div>
              <div className="card">
                <div className="square-box">
                  <img src={shyft} />
                  Shyft Network
                </div>
                <div className="total-text">
                  <small>Total Raise</small>
                  <h3>TBA</h3>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Min Allocation</small>
                      <span>0</span>
                    </li>
                    <li>
                      <small>Max Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>Private</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                </svg>
                  In 11 days
                </div>
              </div>
              <div className="card">
                <div className="square-box">
                  <img src={convergence} />
                  Convergence Finance
                </div>
                <div className="total-text">
                  <small>Total Raise</small>
                  <h3>TBA</h3>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Min Allocation</small>
                      <span>0</span>
                    </li>
                    <li>
                      <small>Max Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>Private</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                </svg>
                  In 12 days
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="featured-pools">
            <div className="heading">Featured Pools</div>
            <div className="d-flex flex-wrap">
              <div className="card">
                <div className="square-box">
                  <img src={chain} />
                  <span>
                    ChainGuardians POLS
                    <small>CGG/ETH</small>
                  </span>
                </div>
                <div className="total-text">
                  <small>Ratio per 1 ETH</small>
                  <h3>14925.37 CGG</h3>
                </div>
                <div className="total-text mt-1">
                  <small>Progress</small>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="counts d-flex justify-content-between">
                    <small>100% (Min.51%)</small>
                    <small>965966/966000</small>
                  </div>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Participants</small>
                      <span>332</span>
                    </li>
                    <li>
                      <small>Maximum</small>
                      <span>0.197 ETH</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>Private</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                </svg>
                Filled
                </div>
              </div>
              <div className="card">
                <div className="square-box">
                  <img src={chain} />
                  <span>
                    ChainGuardians Public
                    <small>CGG/ETH</small>
                  </span>
                </div>
                <div className="total-text">
                  <small>Ratio per 1 ETH</small>
                  <h3>14925.37 CGG</h3>
                </div>
                <div className="total-text mt-1">
                  <small>Progress</small>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="counts d-flex justify-content-between">
                    <small>100% (Min.50%)</small>
                    <small>833999/834000</small>
                  </div>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Participants</small>
                      <span>289</span>
                    </li>
                    <li>
                      <small>Maximum</small>
                      <span>0.197 ETH</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>Private</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                </svg>
                Filled
                </div>
              </div>
              <div className="card">
                <div className="square-box">
                  <img src={ethernity} />
                  <span>
                  Ethernity POLS
                    <small>ERN/ETH</small>
                  </span>
                </div>
                <div className="total-text">
                  <small>Ratio per 1 ETH</small>
                  <h3>6024.1 ERN</h3>
                </div>
                <div className="total-text mt-1">
                  <small>Progress</small>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="counts d-flex justify-content-between">
                    <small>100% (Min.51%)</small>
                    <small>545453/545454</small>
                  </div>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Participants</small>
                      <span>472</span>
                    </li>
                    <li>
                      <small>Maximum</small>
                      <span>0.195 ETH</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>Private</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                </svg>
                Filled
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <a class="single-link" href="javascript:void(0)">
                View All Pools
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tiered-system">
            <div className="main-heading">
              <h2>The BSCPOOL Tiered System</h2>
              <h5>BSCPool will showcase a fixed tier system based on the number of tokens held.</h5>
            </div>
            <div class="heading">Round 1</div>
            <div className="carousel">
              <div class="container">
                <input type="radio" name="slider" id="item-1" checked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <div class="cards">
                  <label class="card" for="item-1" id="song-1">
                  <div className="card-carousel">
                <div className="square-box">
                  <img src={chain} />
                  <span>
                    ChainGuardians POLS
                    <small>CGG/ETH</small>
                  </span>
                </div>
                <div className="total-text">
                  <small>Ratio per 1 ETH</small>
                  <h3>14925.37 CGG</h3>
                </div>
                <div className="total-text mt-1">
                  <small>Progress</small>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="counts d-flex justify-content-between">
                    <small>100% (Min.51%)</small>
                    <small>965966/966000</small>
                  </div>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Participants</small>
                      <span>332</span>
                    </li>
                    <li>
                      <small>Maximum</small>
                      <span>0.197 ETH</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>Private</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                </svg>
                Filled
                </div>
              </div>
                  </label>
                  <label class="card" for="item-2" id="song-2">
                    <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song" />
                  </label>
                  <label class="card" for="item-3" id="song-3">
                    <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song" />
                  </label>
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
