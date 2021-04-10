import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  bodyBg: "#ffffff",
  bodyColor: "#010415",
  headerBorderBtm: "#e8e8e8",
  navBg: "#ffffff",
  navBoxShadow: "0px 1px 10px 0px rgba(255, 255, 255, 0.5);",
  navAColor: "#010415",
  linknavBorderLeft: "#e8e8e8",
  buttonSecondaryColor: "#010415",
  buttonSecondaryBorder: "#e8e8e8",
  buttonSecondaryHoverBg: "#f1f1f1",
  herosectionH5Color: "#707070;",
  blendBg: "rgba(242, 242, 242, .7)",
  aboutsmallColor: "#707070",
  singleLinkColor: "#010415",
  upcomingCardBorder: "#e8e8e8",
  upcomingSquareBoxBg: "#f1f1f1",
  upcomingSquareBoxBorder: "#ffffff",
  upcomingBlockLiBg: "#f1f1f1",
  upcomingBlockLiSpanBg: "#ffffff",
  featuredCardBg: "#ffffff",
  featuredCardBorder: "#ffffff",
  featuredSquareBg: "#f1f1f1",
  featuredSquareColor: "#010415",
  featuredTotalTextH3Color: "#010415",
  featuredProgressBarBg: "#f1f1f1",
  featuredBlockLiBg: "#f1f1f1",
  featuredBlockLiSpanBg: "#ffffff",
  featuredBlockLiSmallColor: "#010415",
  tieredHeadingH5Color: "#707070",
  tieredCardBg: "#f1f1f1",
  tieredSquareBoxBg: "#ffffff",
  tieredBlockLiBg: "#ffffff",
  tieredBlockLiSpanBg: "#f1f1f1",
  tieredWhitelistSpanBg: "#ffffff",
  tieredRoundTwoLiColor: "#707070",
  tieredRoundTwoSmallColor: "#707070",
  circleAnimationBeforeBorder: "rgba(242, 242, 242, .7)",
  footerBordertop: "#f1f1f1",
  footerBg: "#ffffff",
  footerBoxShadow: "0px -1px 10px 0px rgba(255, 255, 255, 0.5);",
  footerColor: "#010415",
  footerLiBorder: "#f1f1f1",
  featuredpoolnextInvestmentSpanBg: "#f1f1f1",
  featuredpoolnextAuditAColor: "#010415",
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
  buttonSecondaryBorder: "#262C43",
  buttonSecondaryHoverBg: "#262C43",
  herosectionH5Color: "#262c43;",
  blendBg: "rgba(38, 44, 67, 0.4)",
  aboutsmallColor: "#262c43",
  upcomingCardBorder: "#262c43",
  upcomingSquareBoxBg: "#262c43",
  upcomingSquareBoxBorder: "#010415",
  upcomingBlockLiBg: "#262c43",
  upcomingBlockLiSpanBg: "#010415",
  featuredCardBg: "#010415",
  featuredCardBorder: "#010415",
  featuredSquareBg: "#262c43",
  featuredSquareColor: "#ffffff",
  featuredTotalTextH3Color: "#ffffff",
  featuredProgressBarBg: "#ffffff",
  featuredBlockLiBg: "#262c43",
  featuredBlockLiSpanBg: "#010415",
  featuredBlockLiSmallColor: "#ffffff",
  singleLinkColor: "#ffffff",
  tieredHeadingH5Color: "#262c43",
  tieredCardBg: "#262c43",
  tieredSquareBoxBg: "#010415",
  tieredBlockLiBg: "#010415",
  tieredBlockLiSpanBg: "#262c43",
  tieredWhitelistSpanBg: "#010415",
  tieredRoundTwoLiColor: "#262c43",
  tieredRoundTwoSmallColor: "#262c43",
  circleAnimationBeforeBorder: "rgba(255, 255, 255, 0.1)",
  footerBordertop: "#15192A",
  footerBg: "#010415",
  footerBoxShadow: "0px -1px 10px 0px rgba(0, 0, 0, 0.5);",
  footerColor: "#ffffff",
  footerLiBorder: "#262C43",
  featuredpoolnextInvestmentSpanBg: "#262c43",
  featuredpoolnextAuditAColor: "#ffffff",
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
          border-color: ${(props) => props.theme.linknavBorderLeft};
        } 
        .button-secondary {
          color: ${(props) => props.theme.buttonSecondaryColor};
          border-color: ${(props) => props.theme.buttonSecondaryBorder};
        }
        .button-secondary:hover {
          background-color: ${(props) => props.theme.buttonSecondaryHoverBg};
        }
        .hero-section h5{
          color: ${(props) => props.theme.herosectionH5Color};
        }
        .about-us {
          background-color: ${(props) => props.theme.blendBg};
        }
        .about-us .content div small{
          color: ${(props) => props.theme.aboutsmallColor};
        }
        .upcoming-pools .card{
          border-color: ${(props) => props.theme.upcomingCardBorder};
        }
        .upcoming-pools .card .square-box{
          background-color: ${(props) => props.theme.upcomingSquareBoxBg};
        }
        .upcoming-pools .card .square-box img{
          border-color: ${(props) => props.theme.upcomingSquareBoxBorder};
        }
        .upcoming-pools .card .block ul li{
          background-color: ${(props) => props.theme.upcomingBlockLiBg};
        }
        .upcoming-pools .card .block ul li span{
          background-color: ${(props) => props.theme.upcomingBlockLiSpanBg};
        }
        .featured-pools {
          background-color: ${(props) => props.theme.blendBg};
        }
        .featured-pools .card{
          background-color: ${(props) => props.theme.featuredCardBg};
          border-color: ${(props) => props.theme.featuredCardBorder};
        }
        .featured-pools .single-link{
          color: ${(props) => props.theme.singleLinkColor};
        }
        .featured-pools .card .square-box{
          background-color: ${(props) => props.theme.featuredSquareBg};
          color: ${(props) => props.theme.featuredSquareColor};
        }
        .featured-pools .card .total-text h3{
          color: ${(props) => props.theme.featuredTotalTextH3Color};
        }
        .featured-pools .card .total-text .progress .progress-bar{
          background-color: ${(props) => props.theme.featuredProgressBarBg};
        }
        .featured-pools .card .block ul li{
          background-color: ${(props) => props.theme.featuredBlockLiBg};
        }
        .featured-pools .card .block ul li span{
          background-color: ${(props) => props.theme.featuredBlockLiSpanBg};
        }
        .featured-pools .card .block ul li small{
          color: ${(props) => props.theme.featuredBlockLiSmallColor};
        }
        .tiered-system .main-heading h5{
          color: ${(props) => props.theme.tieredHeadingH5Color};
        }
        .tiered-system .carousel .cards .card, 
        .litepaper .cards .card{
          background-color: ${(props) => props.theme.tieredCardBg};
        }
        .tiered-system .carousel .card-carousel .square-box{
          background-color: ${(props) => props.theme.tieredSquareBoxBg};
        }
        .tiered-system .carousel .card-carousel .whitelist-req span{
          background-color: ${(props) => props.theme.tieredSquareBoxBg};
        }
        .tiered-system .round-two{
          background-color: ${(props) => props.theme.blendBg};
        }
        .tiered-system .card .block ul li{
          background-color: ${(props) => props.theme.tieredBlockLiBg};
        }
        .tiered-system .card .block ul li span{
          background-color: ${(props) => props.theme.tieredWhitelistSpanBg};
        }
        .tiered-system .round-two .content div ul li{
          color: ${(props) => props.theme.tieredRoundTwoLiColor};
        }
        .homepage .tiered-system .round-two .content-full div small{
          color: ${(props) => props.theme.tieredRoundTwoSmallColor};
        }
        .circle-animation::before{
          border-color: ${(props) => props.theme.circleAnimationBeforeBorder} !important;
        }
        footer{
          border-color: ${(props) => props.theme.footerBordertop};
          background-color: ${(props) => props.theme.footerBg};
          box-shadow: ${(props) => props.theme.footerBoxShadow};
        }
        footer .container ul li{
          border-color: ${(props) => props.theme.footerLiBorder};
        }
        footer .container ul li a{
          color: ${(props) => props.theme.footerColor};
        }
        .featuredpoolnext .your-investment .investment-blocks span{
          background-color: ${(props) => props.theme.featuredpoolnextInvestmentSpanBg};
        }
        .featuredpoolnext .imp-links{
          background-color: ${(props) => props.theme.blendBg};
        }
        .featuredpoolnext .audit{
          background-color: ${(props) => props.theme.blendBg};
        }
        .featuredpoolnext .audit a{
          color: ${(props) => props.theme.featuredpoolnextAuditAColor};
        }
        .featuredpoolnext .disclaimer{
          background-color: ${(props) => props.theme.blendBg};
        }



`
