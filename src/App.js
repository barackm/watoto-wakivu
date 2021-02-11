import About from "./components/about";
import Blog from "./components/blog";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
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
      <Footer />
    </div>
  );
}

export default App;
