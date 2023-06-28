import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
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
    </>
  );
}

export default App;
