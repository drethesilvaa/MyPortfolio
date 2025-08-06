import Project from "./Project";
import Footer from "./Footer";
import MyInfo from "./MyInfo";
import Loader from "../layouts/Loader.js";
import { useSanityData } from "../context/SanityDataContext.js";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";

export default function Home() {
  const { author, projects } = useSanityData();

  if (!author || !projects) return <Loader />;

  return (
    <main>
      {/* <AnimatedOnScroll animationIn="fadeIn">
          <img
            src={image}
            alt="background"
            className="absolute object-cover w-full h-full right-0"
          ></img>
        </AnimatedOnScroll> */}

      <section id="mainDiv" className="relative">
        <div className="grid lg:grid-cols-3 items-center gap-4">
          <div className="lg:col-span-1 order-1 lg:order-2 flex items-center rounded-xl overflow-hidden">
            <MyInfo
              userName={author?.name}
              userImage={author?.authorImage}
              userSkills={author?.Skills}
            />
          </div>
          <div className="grid content-between gap-4  lg:col-span-2 order-2 lg:order-1 bg-japan-hero bg-cover bg-center rounded-xl h-full px-8 py-8">
            <div className="grid gap-4">
              <h1 className="text-4xl main-titleColor font-semibold leading-none home-name m-0 pl-0 xl:w-4/6">
                Hi, I'm Andre, UI/UX Front End Engineer with 6 years of
                experience!
              </h1>
              <p className="main-titleColor xl:w-4/6">
                I'm passionate about building intuitive, performant, and
                inclusive interfaces that solve real problems and delight users.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:andrethessilva@gmail.com"
                className="py-3 px-6 bg-[#131417] text-white rounded-full hover:bg-[#131417]/85 active:scale-95 transition-all"
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/andréssilva"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/95 text-[#131417] rounded-full hover:bg-[#131417]/20 active:scale-95 transition-all "
              >
                <RiLinkedinFill size={20} />
              </a>

              <a
                href="https://www.instagram.com/itswithandre"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/95 text-[#131417] rounded-full hover:bg-[#131417]/20 active:scale-95 transition-all "
              >
                <RiInstagramFill size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Project></Project>
      {/* <About></About> */}
      <Footer></Footer>
    </main>
  );
}
