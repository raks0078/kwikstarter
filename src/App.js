import React, { Component } from "react"
import Particles from "react-particles-js"
export default class App extends Component {
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
                value: "#ccc",
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
              },
              move: {
                speed: 4,
              },
            },
          }}
        />
      </div>
    )
  }
}
