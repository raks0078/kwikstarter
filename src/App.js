import React, { useState } from "react"
import Particles from "react-particles-js"
import { Route, Switch } from "react-router-dom"
import { lightTheme, darkTheme, GlobalStyle } from "./themes"

import Header from "./Components/Header/Header"
import Homepage from "./pages/Homepage"
import FeaturedPoolNext from "./pages/FeaturedPoolNext"
import styled, { ThemeProvider } from "styled-components"
const StyledDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.sidebarBgColor};
`
const App = (props) => {
  const [theme, setTheme] = useState("dark")
  const handleThemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledDiv>
        <div>
          {/* <Particles
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
          /> */}
          <div className="wrapper">
            <Header themeToggler={handleThemeToggle} theme={theme} />

            <Switch>
              <Route exact path="/" component={() => <Homepage />} theme={theme} />
              <Route exact path="/featured-pool-next" component={() => <FeaturedPoolNext />} theme={theme} />
            </Switch>
          </div>
        </div>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
