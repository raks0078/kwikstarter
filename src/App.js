import React, { useState } from "react"
import Particles from "react-particles-js"
import { Route, Switch } from "react-router-dom"
import { lightTheme, darkTheme, GlobalStyle } from "./themes"
import LightBg from "./images/world_map_light.png"
import DarkBg from "./images/world_map.png"
import Header from "./Components/Header/Header"
import Homepage from "./pages/Homepage"
import FeaturedPoolNext from "./pages/FeaturedPoolNext"
import styled, { ThemeProvider } from "styled-components"
import Footer from "./Components/Footer/Footer"
const StyledDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.sidebarBgColor};
`
const App = (props) => {
  const [theme, setTheme] = useState("light")
  const handleThemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledDiv>
        <div>
          <Particles
            id="particles-js"
            params={{
              particles: {
                number: {
                  value: 50,
                },
                color: {
                  value: theme === "dark" ? "#262C43" : "#cccccc",
                },
                shape: {
                  type: "circle",
                },
                opacity: {
                  value: 0.5,
                },
                size: {
                  value: 7,
                },
                lineLinked: {
                  distance: 0,
                  color: "#262C43",
                },
                move: {
                  speed: 4,
                },
              },
            }}
          />
          <div className="wrapper" style={{ backgroundImage: `url(${theme === "light" ? LightBg : DarkBg})` }}>
            <Header themeToggler={handleThemeToggle} theme={theme} />

            <Switch>
              <Route exact path="/" component={() => <Homepage theme={theme} />} />
              <Route exact path="/featured-pool-next" component={() => <FeaturedPoolNext theme={theme} />} />
            </Switch>
            <Footer />
          </div>
        </div>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
