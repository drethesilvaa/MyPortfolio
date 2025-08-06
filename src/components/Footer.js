// import styled from "styled-components";

export default function _Footer() {
  // const Footer = styled.footer`
  // background: ${({ theme }) => theme.footer_bg};
  // }`;

  return (
    <footer className="pt-10 pb-10 main-textColor">
      {/* <div className="inline lg:hidden">
          <button
            className="dark_dayIcon"
            id="switchTheme"
            onClick={toggleonClick}
          >
            {themeName === "light" ? (
              <RiMoonClearLine></RiMoonClearLine>
            ) : (
              <RiSunLine></RiSunLine>
            )}
          </button>
        </div> */}

      <h4>Designed & Built by Andre Silva</h4>
      {/* <a
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
        </div> */}
    </footer>
  );
}
