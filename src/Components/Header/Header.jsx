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
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
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
              <ul class="navbar-nav">
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
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
