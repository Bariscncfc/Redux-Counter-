import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";

function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: 10 }}>Sayaç:</h1>
      <Counter />
      <br />
      <div className="btn">
        <IncreaseCounter />
        <br />
        <DecreaseCounter />
        <br />
        <IncreaseByTwoCounter />
      </div>
    </div>
  );
}

export default App;
