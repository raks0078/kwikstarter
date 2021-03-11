import React, { Component } from "react"
import Particles from "react-particles-js"
import { Route, Switch } from "react-router-dom"
import Header from "./Components/Header/Header"

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
    
        <Header />
    
        <Switch>
          {/* <Route exact path="/" component={() => <Homepage/>} /> */}
       
        </Switch>

    </div>
      
    )
  }
}

export default App