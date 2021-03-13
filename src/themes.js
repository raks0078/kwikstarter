import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#ffffff",
  fontColor: "#5a6169",
}

export const darkTheme = {
  body: "#f5f6f8",
  fontColor: "#5a6169",
}

export const GlobalStyle = createGlobalStyle`



        body {
            background-color: ${(props) => props.theme.body};
        }



`
