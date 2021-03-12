import React, { Component } from "react"
import Particles from "react-particles-js"
import { Route, Switch } from "react-router-dom"
import Header from "./Components/Header/Header"
import Homepage from "./pages/Homepage"

class App extends Component {
  render() {
    return (
      <div>
        <Particles
          id="particles-js"
          params={{
            particles: {
              number: {
                value: 50,
              },
              color: {
                value: "#262C43",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: 4,
              },
              lineLinked: {
                distance: 150,
                color: "#262C43",
              },
              move: {
                speed: 4,
              },
            },
          }}
        />
        <div className="wrapper">
          <Header />

          <Switch>
            <Route exact path="/" component={() => <Homepage />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
