import React, { Component } from "react"
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
import banner_img from "../images/hero-section.png"
import image_round from "../images/about-us.png"
import medium_light from "../images/medium-light.svg"
import medium from "../images/medium.svg"
import { Link } from "react-router-dom"
import "./Homepage.scss"
class Homepage extends Component {
  render() {
    console.log("theme====", this.props.theme)
    return (
      <div className="homepage">
        <div className="hero-section">
          <div className="container">
            <div className="wrap-content">
              <h2>
              Kwikswap Protocol crew proudly announce Kwikstarter Launchpad and Incubator on Kwikstarter V1 
(Binance Smart Chain) , our V2 will be powered by Polkadot.
              </h2>
              <h5>Post Polkadot integration both iterations will function side by side to support Kwikstarter and DOT projects 
respectively.<br/>
The Kwikswap / Kwikstarter Dev team are currently working frantically coding and preparing to stand 
up an all new feature rich launchpad to assist in nurturing Start-ups and New Projects through 
fundraising stages all the way through to market.<br/>
KwikStarter goal is to assist everyday retail investors and contributors the chance to get in on the 
ground floor in projects that may otherwise be quickly snapped up by Venture Capital firms. We 
believe that everyone has an equal right to sharing the love.</h5>
              <div className="d-flex mt-4">
                <button className="button-primary">View All Projects</button>
                <button className="button-secondary">Learn More</button>
              </div>
            </div>
            <div className="wrap-img">
              <img src={banner_img} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-us">
            <div className="heading">About Us</div>
            <div className="d-flex">
              <div className="circle-animation sindalll ">
                <img src={image_round} />
              </div>
              <div className="content">
                <div>
                  <h4>What can you expect from Kwikstarter?</h4>
                  <h5>Kwikstarter is a vessel which allows for start-ups projects the ability to raise funds via LP’s. It also leverages 
off the Kwikswap audience to keep on supporting this projects through to Market Creation. The project 
onboarding workflow will be automated in future iterations to allow for Kwik Token holders to play an 
important role in fielding the right projects to launch on the Kwikstarter Launchpad. We believe that this 
unique feature is a real key difference that sets us apart from other launchpads out there in the Cryptosphere.</h5>
                  <small>At Kwikstarter, we will offer an onboarding experience like no other for projects and assist in the nurturing 
stages of their listing and continue to offer that support mechanism through to market creation on 
Kwikswap.</small>
                </div>
                <div>
                  <h4>What’s in it for KWIK Token holders?</h4>
                  <h5>KWIK Token holders will not only be able to take a role in the governance of Kwikswap DEX, but also play 
an integral part of fielding ONLY THE BEST projects onto the Kwikstarter Launchpad.</h5>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="content content-full">
                <div>
                  <h4>How to contribute to Projects that are launching on Kwikstarter…</h4>
                  <h5>Every Project will feature an allocation and will launch over two Sales Stages. To participate in the 
launchpad sales stages, contributors must hold a minimum of 1000 KWIK Tokens to be whitelisted.</h5>
                  <small>We will ensure that everyone that whitelists in the required time frame will receive a token allocation.</small>
                </div>
                <div>
                  <h4>How does a punter join Kwikstarter?</h4>
                  <h5>Firstly it is a requirement that prospective contributors hold KWIK Tokens. Another value add of holding 
KWIK Tokens is that holders/stokers appreciate a solid 12% APY staking reward that is paid monthly.</h5>
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
                  TBA
                </div>
                <div className="total-text">
                  <small>Total Raise</small>
                  <h3>TBA</h3>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Min Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Max Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                  </svg>
                  TBA
                </div>
              </div>
              <div className="card">
                <div className="square-box">
                  <img src={konomi} />
                  TBA
                </div>
                <div className="total-text">
                  <small>Total Raise</small>
                  <h3>TBA</h3>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Min Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Max Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                  </svg>
                  TBA
                </div>
              </div>
              <div className="card">
                <div className="square-box">
                  <img src={oddz} />
                  TBA
                </div>
                <div className="total-text">
                  <small>Total Raise</small>
                  <h3>TBA</h3>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Min Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Max Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                  </svg>
                  TBA
                </div>
              </div>
              <div className="card">
                <div className="square-box">
                  <img src={shyft} />
                  TBA
                </div>
                <div className="total-text">
                  <small>Total Raise</small>
                  <h3>TBA</h3>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Min Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Max Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                  </svg>
                  TBA
                </div>
              </div>
              <div className="card">
                <div className="square-box">
                  <img src={convergence} />
                  TBA
                </div>
                <div className="total-text">
                  <small>Total Raise</small>
                  <h3>TBA</h3>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Min Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Max Allocation</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                  </svg>
                  TBA
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="featured-pools">
            <div className="heading">Featured Pools</div>
            <div className="d-flex flex-wrap">
              <Link to="#" className="card">
                <div className="square-box">
                  <img src={chain} />
                  <span>
                  TBA
                    <small>TBA</small>
                  </span>
                </div>
                <div className="total-text">
                  <small>Ratio per 1 ETH</small>
                  <h3>TBA</h3>
                </div>
                <div className="total-text mt-1">
                  <small>Progress</small>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="counts d-flex justify-content-between">
                    <small>TBA</small>
                    <small>TBA</small>
                  </div>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Participants</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Maximum</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                  </svg>
                  TBA
                </div>
              </Link>
              <Link to="#" className="card">
                <div className="square-box">
                  <img src={chain} />
                  <span>
                  TBA
                    <small>TBA</small>
                  </span>
                </div>
                <div className="total-text">
                  <small>Ratio per 1 ETH</small>
                  <h3>TBA</h3>
                </div>
                <div className="total-text mt-1">
                  <small>Progress</small>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="counts d-flex justify-content-between">
                    <small>TBA</small>
                    <small>TBA</small>
                  </div>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Participants</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Maximum</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                  </svg>
                  TBA
                </div>
              </Link>
              <Link to="#" className="card">
                <div className="square-box">
                  <img src={ethernity} />
                  <span>
                  TBA
                    <small>TBA</small>
                  </span>
                </div>
                <div className="total-text">
                  <small>Ratio per 1 ETH</small>
                  <h3>TBA</h3>
                </div>
                <div className="total-text mt-1">
                  <small>Progress</small>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="counts d-flex justify-content-between">
                    <small>TBA</small>
                    <small>TBA</small>
                  </div>
                </div>
                <div className="d-flex block">
                  <ul>
                    <li>
                      <small>Participants</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Maximum</small>
                      <span>TBA</span>
                    </li>
                    <li>
                      <small>Access</small>
                      <span>TBA</span>
                    </li>
                  </ul>
                </div>
                <div className="time-limit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#010415"></circle>
                  </svg>
                  TBA
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
              <h2>Kwikstarter Member Tiers</h2>
              <h5>We have a series of tiered levels at Kwikstarter, each containing their own unique benefits as set 
out below:</h5>
            </div>
            <div class="heading">Round 1</div>
            <div className="carousel">
              <div class="container">
                <ul class="cards">
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Grasshopper</span>
                      </div>
                      <div className="total-text">
                        <small>KWIK Staked</small>
                        <h3>1,000</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>KWIK Staking Length</small>
                          </li>
                          <li>
                            <small>For launchpad event 
duration</small></li>
                          <li>
                            <small>Pool Weight</small>
                            <span>10</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex flex-column whitelist-req">
                        <small>Whitelist Requirement: 
Twitter</small>
                        <div className="d-flex flex-column">
                          <div className="d-flex mb-10">
                            <span>Like</span>
                            <span>Comment</span>
                          </div>
                          <div>
                            <span>Retweet</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Stake Now</button>
                    </div>
                  </li>
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Falcon One</span>
                      </div>
                      <div className="total-text">
                        <small>KWIK Staked</small>
                        <h3>2,000</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>KWIK Staking Length</small>
                          </li>
                          <li>
                            <small>For launchpad event 
duration</small>
                          </li>
                          <li>
                            <small>Pool Weight</small>
                            <span>30</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex flex-column whitelist-req">
                        <small>Whitelist Requirement: 
Twitter</small>
                        <div className="d-flex flex-column">
                          <div className="d-flex mb-10">
                            <span>Like</span>
                            <span>Comment</span>
                          </div>
                          <div>
                            <span>Retweet</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Stake Now</button>
                    </div>
                  </li>
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Dragon</span>
                      </div>
                      <div className="total-text">
                        <small>KWIK Staked</small>
                        <h3>5,000</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>KWIK Staking Length</small>
                          </li>
                          <li>
                            <small>For launchpad event 
duration</small>
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
                            <span>No Required</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Stake Now</button>
                    </div>
                  </li>
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Falcon Heavy</span>
                      </div>
                      <div className="total-text">
                        <small>KWIK Staked</small>
                        <h3>10,000</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>KWIK Staking Length</small>
                          </li>
                          <li>
                            <small>For launchpad event 
duration</small>
                          </li>
                          <li>
                            <small>Pool Weight</small>
                            <span>130</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex flex-column whitelist-req">
                        <small>Whitelist Requirement</small>
                        <div className="d-flex flex-column">
                          <div className="d-flex mb-10">
                            <span>No Required</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Stake Now</button>
                    </div>
                  </li>
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Starship</span>
                      </div>
                      <div className="total-text">
                        <small>KWIK Staked</small>
                        <h3>20,000</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>KWIK Staking Length</small>
                          </li>
                          <li>
                            <small>For launchpad event 
duration</small>
                          </li>
                          <li>
                            <small>Pool Weight</small>
                            <span>400</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex flex-column whitelist-req">
                        <small>Whitelist Requirement</small>
                        <div className="d-flex flex-column">
                          <div className="d-flex mb-10">
                            <span>No Required</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Stake Now</button>
                    </div>
                  </li>
                  <li class="card">
                    <div className="card-carousel">
                      <div className="square-box">
                        <span>Moon Base</span>
                      </div>
                      <div className="total-text">
                        <small>KWIK Staked</small>
                        <h3>Top 10 KWIK 
Holders</h3>
                      </div>
                      <div className="d-flex block">
                        <ul>
                          <li>
                            <small>KWIK Staking Length</small>
                          </li>
                          <li>
                            <small>For launchpad event 
duration</small>
                          </li>
                          <li>
                            <small>Pool Weight</small>
                            <span>Additional
Bonus LP</span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex flex-column whitelist-req">
                        <small>Whitelist Requirement</small>
                        <div className="d-flex flex-column">
                          <div className="d-flex mb-10">
                            <span>No Required</span>
                          </div>
                        </div>
                      </div>
                      <button className="time-limit">Stake Now</button>
                    </div>
                  </li>
                </ul>
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
              <div className="circle-animation-wrap">
                <div className="circle-animation medium-logo">
                  {this.props.theme === "dark" ? (
                    <React.Fragment>
                      <img src={medium} />
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <img src={medium_light} />
                    </React.Fragment>
                  )}
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
