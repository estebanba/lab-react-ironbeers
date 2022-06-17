import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllBeers from "./components/AllBeers";
import DetailBeer from "./components/DetailBeer";
import Home from "./components/Home";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer" element={<AllBeers />} />
        <Route path="/beer/:_id" element={<DetailBeer />} />
        <Route path="/randomBeer" element={<RandomBeer />} />
        <Route path="/newBeer" element={<NewBeer />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </div>
  );
}

export default App;
