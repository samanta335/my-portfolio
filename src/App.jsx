import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <div className="flex mt-8">
        <Menu></Menu>
        <Banner></Banner>
      </div>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
    </>
  );
}

export default App;
