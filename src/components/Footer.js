import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { SocialIcon } from "react-social-icons";
// import styled from "styled-components";

export default function _Footer() {
  const socialIconsStyle = { height: 35, width: 35 };

  // const Footer = styled.footer`
  // background: ${({ theme }) => theme.footer_bg};
  // }`;

  return (
    <AnimatedOnScroll animationIn="fadeIn">
      <footer className="pt-72 pb-4 text-center text-white">
        <h4>Designed & Built by Andre Silva</h4>
        <a
          className="block pb-3 lg:hidden "
          href="mailto:andressilva03@gmail.com"
        >
          andressilva03@gmail.com
        </a>
        <div className="inline lg:hidden px-3 lg:my-6 ">
          <SocialIcon
            url="https://github.com/drethesilvaa"
            className="mr-4 nav-link-animation "
            target={"_blank"}
            fgColor="#fff"
            style={socialIconsStyle}
          ></SocialIcon>
          <SocialIcon
            url="https://www.linkedin.com/in/andréssilva/"
            className="mr-4 nav-link-animation"
            target={"_blank"}
            fgColor="#fff"
            style={socialIconsStyle}
          ></SocialIcon>
          <SocialIcon
            url="https://www.instagram.com/drethegallery/"
            className="mr-4 nav-link-animation"
            target={"_blank"}
            fgColor="#fff"
            style={socialIconsStyle}
          ></SocialIcon>
        </div>
      </footer>
    </AnimatedOnScroll>
  );
}
