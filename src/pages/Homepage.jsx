import React, { Component } from "react"
import bscpoologo from "../images/bcs_pool.svg"
import blockchain from "../images/blockchain-cuties.jpg"
import konomi from "../images/konomi-network.jpg"
import oddz from "../images/oddz-finance.png"
import shyft from "../images/shyft-network.jpg"
import convergence from "../images/convergence-finance.jpg"
import chain from "../images/chain-guardiance.png"
import ethernity from "../images/ethernity.jpg"
import EmailIcon from "@material-ui/icons/Email"
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic"
import TelegramIcon from "@material-ui/icons/Telegram"
import LanguageIcon from "@material-ui/icons/Language"
import heroImage from "../images/bscpool-heroimg.gif"
import { Link } from "react-router-dom"
import "./Homepage.scss"
class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="hero-section">
          <div className="container">
            <div className="wrap-content">
              {/* <img src={bscpoologo} className="rotate" /> */}
              <h2>
                The BSCPOOL
                <br />
                is the first decentralized IDO platform for the Binance Smart Chain Network.
              </h2>
              <h5>BSCPOOL will empower crypto currency projects with the ability to distribute tokens and raise liquidity.</h5>
              <div className="d-flex mt-4">
                <button className="button-primary">View All Projects</button>
                <button className="button-secondary">Learn More</button>
              </div>
            </div>
            <div className="wrap-img">
              {/* <img src={heroImage} /> */}
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
                  <small>
                    The fundamental flaws of existing launchpads is that <b>acquiring enough tokens to participate in the ecosystem is prohibitive</b>, and even <b>if you do hold the tokens, you are not guaranteed an allocation spot</b>. They are based on a first come first serve basis where automated bots can fill the whitelist spots in a matter of seconds. <b>BSCPool is creating fair decentralized launches</b>.
                  </small>
                  <br />
                  <small className="mt-15">
                    The hallmark of the BSCPool is a two-round system that makes <b>every tier level guaranteed an allocation</b>. There is no luck, and no lotteries, and no bots; only fair distributed rewards for all participants.
                  </small>
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
              <Link to="/featured-pool-next" className="card">
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
                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
              </Link>
              <Link to="/featured-pool-next" className="card">
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
                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
              </Link>
              <Link to="/featured-pool-next" className="card">
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
                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
              </Link>
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
              <h2>BSC Pool Tier package system</h2>
              <h5>PHASE-A (Contains 7 Tiers and staking requirement)</h5>
            </div>
            <div class="heading">Round 1</div>
            <div className="carousel">
              <div class="container">
                <ul class="cards">
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Groot</span>
                      </div>
                      <div className="total-text">
                        <small>Required BPOOL tokens</small>
                        <h3>500</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>Duration</small>
                            <span>5 days</span>
                          </li>
                          <li>
                            <small>Guaranteed Allocation</small>
                            <span>Yes</span>
                          </li>
                          <li>
                            <small>Pool Weight</small>
                            <span>5</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex flex-column whitelist-req">
                        <small>Whitelist Requirement: Join telegram, channel and twitter</small>
                        <div className="d-flex flex-column">
                          <div className="d-flex mb-10">
                            <span>Like</span>
                            <span>Comment</span>
                          </div>
                          <div>
                            <span>Retweet by tagging two friends</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Learn More</button>
                    </div>
                  </li>
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Falcon</span>
                      </div>
                      <div className="total-text">
                        <small>Required BPOOL tokens</small>
                        <h3>1500</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>Duration</small>
                            <span>5 days</span>
                          </li>
                          <li>
                            <small>Guaranteed Allocation</small>
                            <span>Yes</span>
                          </li>
                          <li>
                            <small>Pool Weight</small>
                            <span>15</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex flex-column whitelist-req">
                        <small>Whitelist Requirement: Join telegram, channel and twitter</small>
                        <div className="d-flex flex-column">
                          <div className="d-flex mb-10">
                            <span>Like</span>
                            <span>Comment</span>
                          </div>
                          <div>
                            <span>Retweet by tagging two friends</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Learn More</button>
                    </div>
                  </li>
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Captain America</span>
                      </div>
                      <div className="total-text">
                        <small>Required BPOOL tokens</small>
                        <h3>3000</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>Duration</small>
                            <span>5 days</span>
                          </li>
                          <li>
                            <small>Guaranteed Allocation</small>
                            <span>Yes</span>
                          </li>
                          <li>
                            <small>Pool Weight</small>
                            <span>30</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex flex-column whitelist-req">
                        <small>Whitelist Requirement</small>
                        <div className="d-flex flex-column">
                          <div className="d-flex mb-10">
                            <span>None</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Learn More</button>
                    </div>
                  </li>
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Iron Man</span>
                      </div>
                      <div className="total-text">
                        <small>Required BPOOL tokens</small>
                        <h3>6000</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>Duration</small>
                            <span>5 days</span>
                          </li>
                          <li>
                            <small>Guaranteed Allocation</small>
                            <span>Yes</span>
                          </li>
                          <li>
                            <small>Pool Weight</small>
                            <span>60</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex flex-column whitelist-req">
                        <small>Whitelist Requirement</small>
                        <div className="d-flex flex-column">
                          <div className="d-flex mb-10">
                            <span>None</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Learn More</button>
                    </div>
                  </li>
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Captain Marvel</span>
                      </div>
                      <div className="total-text">
                        <small>Required BPOOL tokens</small>
                        <h3>12000</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>Duration</small>
                            <span>10 days</span>
                          </li>
                          <li>
                            <small>Guaranteed Allocation</small>
                            <span>Yes</span>
                          </li>
                          <li>
                            <small>Pool Weight</small>
                            <span>120</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex flex-column whitelist-req">
                        <small>Whitelist Requirement</small>
                        <div className="d-flex flex-column">
                          <div className="d-flex mb-10">
                            <span>None</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Learn More</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="heading">Round 2</div>
            <div className="round-two">
              <div className="d-flex">
                <div className="content">
                  <div>
                    <h4>WHAT WILL HAPPEN TO THE UNSOLD TOKENS?</h4>
                    <h5>
                      Not every individual will fulfill their full allocation. Users will have 23 hours to claim their <b>Round 1</b> allocation, after which the tiered system will transition to the <b>Round 2</b> FCFS (first come, first serve) model. All the unsold tokens are moved into another contract where users can purchase additional allocation from the outstanding supply up to a new maximum. Users will gain access to the FCFS round based on their tier:
                    </h5>
                    <ul>
                      <li>Platinum can claim the new allocation immediately</li>
                      <li>Gold can claim the new allocation after 15 minutes</li>
                      <li>Silver can claim the new allocation after 30 minutes</li>
                      <li>Bronze can claim the new allocation after 45 minutes</li>
                    </ul>
                  </div>
                  <div>
                    <h4>ARE THERE ANY OTHER BENEFITS TO HOLDING THE $BSCPOOL TOKEN?</h4>
                    <h5>
                      Absolutely. In fact, for every launch that is featured on our platform a <b>percentage of the total supply</b> will be airdropped to $BSCPOOL holders.
                    </h5>
                  </div>
                </div>
                {/* <div className="circle-animation"></div> */}
              </div>
              <div className="d-flex">
                <div className="content-full">
                  <div>
                    <h4>$BSCPOOL COMMITTEE FOR PLATINUM MEMBERS</h4>
                    <h5>Achieving platinum status will not only allow investors the highest allocation for pre-sale opportunities, but also additional benefits. For this elite tier, a governance committee will be created where users can help source projects, vet projects coming into the launchpad, and finally vote on upcoming changes to $BSCPOOL.</h5>
                  </div>
                  <div>
                    <h4>WE WILL BE COLLECTING BOTH DATA AND FEEDBACK ON THE IDO STRUCTURE IN ORDER TO OPTIMIZE THE SYSTEM OVER TIME AS WELL AS TAKING INTO CONSIDERATION COMMUNITY FEEDBACK AND POTENTIAL DAO PROPOSALS.</h4>
                    <h5>Our system is a predictable and provably fair system giving our users the proper incentives to accumulate and hold tokens and support each and every project launched. Over time, we will tweak weights, add new tiers and change other parameters as necessary to keep the system functional, competitive and rewarding for all community members.</h5>
                    <small>$BSCPOOL is the next evolution of blockchain launchpads solving the fundamental flaws that plague existing launchpads. This platform benefits all holders of the token and allows for fair launches giving traders of all sizes the opportunity to invest in the best upcoming Binance Smart Chain projects.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="contact">
            <div class="heading">Contact</div>
            <div className="d-flex justify-content-center">
              <div className="circle-animation-wrap">
                <div className="circle-animation">
                  <EmailIcon />
                </div>
              </div>
              <div className="circle-animation-wrap">
                <div className="circle-animation">
                  <HeadsetMicIcon />
                </div>
              </div>
              <div className="circle-animation-wrap">
                <div className="circle-animation">
                  <TelegramIcon />
                </div>
              </div>
              <div className="circle-animation-wrap">
                <div className="circle-animation">
                  <LanguageIcon />
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
