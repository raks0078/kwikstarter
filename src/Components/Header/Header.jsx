import React, { Component } from "react"
import LockIcon from "@material-ui/icons/Lock"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent"
import "./Header.scss"
import { Link, NavLink } from "react-router-dom"
class Header extends Component {
  render() {
   
    return (
      <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="#">
              Kwikstarter
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav link-nav">
                <li class="nav-item">
                  <a href="javascript:void(0)">Pools</a>
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0)">Voting</a>
                </li>
                <li class="nav-item">
                  <NavLink to="/litepaper">Litepaper</NavLink>
                </li>
              </ul>
            </div>
            <ul class="navbar-nav navbar-nav-buttons">
                <li class="nav-item">
                  <button className="button-secondary button-round" onClick={this.props.themeToggler}>
                    <WbIncandescentIcon />
                  </button>
                </li>
                <li>
                  <button className="button-secondary">
                    <WhatshotIcon />
                    Projects
                  </button>
                </li>
                <li class="nav-item">
                  <button className="button-primary">
                    <LockIcon />
                    Connect Wallet
                  </button>
                </li>
              </ul>
              <button class="navbar-toggler button-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                </svg>
              </span>
            </button>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
