import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*:not([class*="animated"]):not(.wrapper):not(.fadeInUp){
    transition: all 0.50s linear;
}

  body {
    background: ${({ theme }) => theme.body};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    overflow-x: hidden;
  }
  
header{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }

  .main-titleColor{
    color: ${({ theme }) => theme.mainTitleColor};
  }

  .main-textColor{
    color: ${({ theme }) => theme.mainTextColor};
  }
  
  
  .cursive{
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
  
  .prose img{
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  }
  .wrapper {
    height: 400px;
    position: fixed;
    right: 20px;
    bottom: 0;
  }
  
  .line {
    position: absolute;
      right: 15px;
      height: 110px;
      bottom: 0;
      width: 1px;
  }
  
  .wordwrapper {
    text-align: center;
      height: 70%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin-top: -50px;
      z-index: 30;
      writing-mode: vertical-rl;
      text-orientation: mixed;
  }
  
  .word {
    letter-spacing: 1px;
    padding: 3px;
  }

  .dark_dayIcon{
    display: block;
    position: absolute;
    bottom: -30px;
    right: 0;
  }

  .dark_dayIcon svg{
    width: 35px;
    height: 35px;
    color: ${({ theme }) => theme.themeIcon};
  }

  
  @media screen and (max-width:1023px){

    .wrapper{
        visibility: hidden;
    }


    .dark_dayIcon{
        display: inline-block;
        position: relative;
        bottom: 0;
        right: 0;
      }
  }
  
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.mainLinkColor};
  }
  
  a:hover {
    color: ${({ theme }) => theme.mainLinkHover};
  }

  .bg-1da1f2{
    background-color:#1da1f2;
  }
  
  .home-name{
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
  
  }

  
  @media screen and (max-width: 991px) {
    .home-name{
    }
    
  }
  
  .bg-dark{
    background-color: black !important;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  
  .aboutsection p{
      margin-bottom: 1rem;
  }
  
  .row .project {
    text-align: right;
    transition: transform 500ms ease-in-out 25ms;
  }

  .row .project:nth-child(n+4) {
    margin-top:20px;
  }

  @media screen and (max-width: 991px) {
    .row .project:nth-child(n+3) {
      margin-top:20px;
    }
    
  }
  @media screen and (max-width: 767px) {
    .row .project:nth-child(n+2) {
      margin-top:20px;
    }
    
  }
  
  // .row .project:not(:first-child){
  //   margin-top: 80px;
  // }
  
  .row .project:hover {
    transform:translate3d(0px, -10px, 0px);
  }
  
  // .row .project:nth-child(even) {
  //   text-align: left;
  // }
  
  
  
  // .project-content{
  //   padding: 40px;
  // }
  
  .project-tech-list{
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
  
  }
  
  .project-description{
    position: relative;
      padding: 25px;
      background-color: ${({ theme }) => theme.projectDescriptionBg};
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      margin: 20px 0;
      display: inline-block;
      text-align:left;
  }
  
  .project-image {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    opacity: 0.12;
    height: 100%;
    z-index: -1;
    overflow: hidden;
      background-size: cover;
      background-position: center;
      text-align: left;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .project .animated{
      border: 1px solid #ffffff4d;
      height:100%;
    }

  
  .project-image:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    z-index: -1;
    transform: scale(1.2);
    filter:blur(10px);
    -moz-filter: blur(10px);
    -webkit-filter: blur(10px);
    -o-filter: blur(10px);
    transition: all 2s linear;
    -moz-transition: all 2s linear;
    -webkit-transition: all 2s linear;
    -o-transition: all 2s linear;
  }
  
  .project-image img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .galleryOpen{
    padding: 13px 10.5px;
    display: inline;
    color: white;
    background: #A7171A;
    border-radius: 50%;
    cursor:pointer;
  }
  
  // .project:nth-child(even) .project-image {
  //   right: 0;
  // }

  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }


  `;
