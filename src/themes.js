import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#ffffff",
  fontColor: "#5a6169",
}

export const darkTheme = {
  body: "#010415",
  fontColor: "#ffffff",
}

export const GlobalStyle = createGlobalStyle`



        body {
            background-color: ${(props) => props.theme.body};
        }



`
