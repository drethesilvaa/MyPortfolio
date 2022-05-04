import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
  return (
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
  );
}

export default App;
