import logo from "./logo.svg";
import "./App.css";
import Trendings from "./components/Trendings/Trendings";
import Mubi from "./assets/mubi.svg";
import { BsLightbulb, BsPlus } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={Mubi} className="mubiIcon" alt="Mubi" />
        <BsPlus />
        <BsLightbulb />
      </div>

      <Trendings />
    </div>
  );
}

export default App;
