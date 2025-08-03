import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";
import { ThemeProvider } from "styled-components";
import {
  ThemeProvider as MuiThemeProv,
  createTheme,
} from "@mui/material/styles";

import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SanityDataProvider } from "./context/SanityDataContext";
import { Container } from "react-bootstrap";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const MUITHEME = createTheme({
    palette: {
      mode: theme,
    },
  });

  const browser = (
    <BrowserRouter>
      <Container className="bg-opacWhite rounded-md my-20">
        <NavBar></NavBar>
        <Routes>
          <Route exact="true" path="/" element={<Home />}></Route>
          {/* <Route path="/about" element={<About />}></Route>
        <Route path="/post/:slug" element={<SinglePost />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/project" element={<Project />}></Route> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );

  if (!mountedComponent) return <div></div>;

  return (
    <SanityDataProvider>
      <MuiThemeProv theme={MUITHEME}>
        <ThemeProvider theme={themeMode}>
          <>
            <GlobalStyles />
            <div className="wrapper animated animatedFadeInUp fadeInUp ">
              <div className={"line " + themeMode.emailLineBg}></div>
              <div className="wordwrapper">
                <div className="word">
                  <a
                    className={themeMode.emailTextClass}
                    href="mailto:andressilva03@gmail.com"
                  >
                    andressilva03@gmail.com
                  </a>
                  {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
                </div>
              </div>
            </div>

            {browser}
          </>
        </ThemeProvider>
      </MuiThemeProv>
    </SanityDataProvider>
  );
}

export default App;
