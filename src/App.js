import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const browser = (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/post/:slug" element={<SinglePost />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  );

  if (!mountedComponent) return <div />;

  return (
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
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </div>
          </div>
        </div>

        {browser}
      </>
    </ThemeProvider>
  );
}

export default App;
