import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  bodyBg: "#f9f9f9",
  bodyColor: "#010415",
  headerBorderBtm: "#f2f2f2",
  navBg: "#f9f9f9",
  navBoxShadow: "0px 1px 10px 0px rgba(255, 255, 255, 0.5);",
  navAColor: "#010415",
  linknavBorderLeft: "#010415",
  buttonSecondaryColor: "#010415",
  blendBg: "rgba(204, 204, 204, .4)",
  singleLinkColor: "#010415",
  circleAnimationBeforeBorder: "rgba(204, 204, 204, .1)",
  footerBordertop: "#f2f2f2",
  footerBg: "#f9f9f9",
  footerBoxShadow: "0px -1px 10px 0px rgba(255, 255, 255, 0.5);",
}

export const darkTheme = {
  bodyBg: "#010415",
  bodyColor: "#ffffff",
  headerBorderBtm: "#15192A",
  navBg: "#010415",
  navBoxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.5);",
  navAColor: "#ffffff",
  linknavBorderLeft: "#262C43",
  buttonSecondaryColor: "#ffffff",
  blendBg: "rgba(38, 44, 67, 0.4)",
  singleLinkColor: "#ffffff",
  circleAnimationBeforeBorder: "rgba(255, 255, 255, 0.1)",
  footerBordertop: "#15192A",
  footerBg: "#010415",
  footerBoxShadow: "0px -1px 10px 0px rgba(0, 0, 0, 0.5);",
}

export const GlobalStyle = createGlobalStyle`



        body {
            background-color: ${(props) => props.theme.bodyBg};
            color: ${(props) => props.theme.bodyColor};
        }
        header{
          border-color: ${(props) => props.theme.headerBorderBtm};
        }
        header nav{
          background-color: ${(props) => props.theme.navBg};
          box-shadow: ${(props) => props.theme.navBoxShadow};
        }
        header nav .container a{
          color: ${(props) => props.theme.navAColor};
        }
        .link-nav{
          border-color: ${(props) => props.theme.linknavBorderLeft} !important;
        } 
        .button-secondary {
          color: ${(props) => props.theme.buttonSecondaryColor};
        }
        .about-us {
          background-color: ${(props) => props.theme.blendBg};
        }
        .featured-pools {
          background-color: ${(props) => props.theme.blendBg};
        }
        .featured-pools .single-link{
          color: ${(props) => props.theme.singleLinkColor};
        }
        .tiered-system .round-two{
          background-color: ${(props) => props.theme.blendBg};
        }
        .circle-animation::before{
          border-color: ${(props) => props.theme.circleAnimationBeforeBorder} !important;
        }
        footer{
          border-color: ${(props) => props.theme.footerBordertop};
          background-color: ${(props) => props.theme.footerBg};
          box-shadow: ${(props) => props.theme.footerBoxShadow};
        }



`
