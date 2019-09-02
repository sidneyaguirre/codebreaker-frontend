import React from "react";
import "./App.css";
import Codebreaker from "./components/Codebreaker";
import Header from "./components/Header";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div>
        <Codebreaker />
      </div>

      <div>
        <Rules />
      </div>
    </div>
  );
}

export default App;
