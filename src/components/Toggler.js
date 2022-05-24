import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
const Button = styled.button`
  display:none;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button id="switchTheme" onClick={toggleTheme}>
      Switch Theme
    </Button>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
