import logo from "./logo.svg";
import "./App.css";
import Trendings from "./components/Trendings/Trendings";
import FilmCard from "./components/FilmCard/FilmCard";


function App() {

  return (
    <div className="App">
      <h1>MUBI RECOMMENDER</h1>
      <Trendings />
    </div>
  );
}

export default App;
