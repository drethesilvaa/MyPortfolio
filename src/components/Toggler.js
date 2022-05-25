import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
const Button = styled.button`
  display:none;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button className="dark_dayIcon" id="switchTheme" onClick={toggleTheme}>
      {theme === "light" ? (
        <RiMoonClearLine></RiMoonClearLine>
      ) : (
        <RiSunLine></RiSunLine>
      )}
    </Button>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
