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
        <Route exact path="/" element={<Home />}></Route>
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
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <GlobalStyles />
        <div>
          <div class="wrapper hidden lg:block animated animatedFadeInUp fadeInUp ">
            <div class="line bg-green-100"></div>
            <div class="wordwrapper">
              <div class="word">
                <a
                  className="text-green-100 hover:text-green-200 "
                  href="mailto:andressilva03@gmail.com"
                >
                  andressilva03@gmail.com
                </a>
              </div>
            </div>
          </div>

          {browser}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
