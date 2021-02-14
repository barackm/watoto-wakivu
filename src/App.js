import { IconContext } from "react-icons";
import { BsArrow90DegUp } from "react-icons/bs";
import { Link } from "react-scroll";
import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Galery from "./components/galery";
import Header from "./components/header";
import Home from "./components/home";
import NewsLetter from "./components/newsletter";
import Partners from "./components/partners";
import Projects from "./components/projects";
import Services from "./components/services";
import Team from "./components/team";
import Video from "./components/video";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Video />
      <Team />
      <Projects />
      <Blog />
      <Galery />
      <Partners />
      <Contact />
      <NewsLetter />
      <Footer />
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={700}
        className="go-top-main-btn"
      >
        <IconContext.Provider value={{ className: "gotop-arrow" }}>
          <BsArrow90DegUp />
        </IconContext.Provider>
      </Link>
    </div>
  );
}

export default App;
