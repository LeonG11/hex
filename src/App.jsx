import React, { useState } from "react";
import "./index.css";

function hexGenerator() {
  return Math.floor(Math.random() * 16777215 + 1).toString(16);
}

function App() {
  const [colorOne, setColorOne] = useState("ffffff");
  const [colorTwo, setColorTwo] = useState("000000");

  return (
    <div className="container">
      <div
        className="hex"
        style={{
          background: "linear-gradient(to right,#" + colorOne + ",#" + colorTwo,
        }}
      >
        <h1>Нажми для создания случайного градиента с hex цветами</h1>
        <h3 >
          background: linear-gradient(to right,#
          {colorOne}
          ,#
          {colorTwo});
        </h3>
        <button
          onClick={() => {
            setColorOne(hexGenerator());
            setColorTwo(hexGenerator());
          }}
        >
          Нажми меня
        </button>
      </div>
    </div>
  );
}

export default App;
