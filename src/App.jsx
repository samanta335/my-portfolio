import "./App.css";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="flex mt-8">
      <Menu></Menu>
      <Banner></Banner>
    </div>
  );
}

export default App;
