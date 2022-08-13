import React, { useState } from "react";

function App() {
  const [colorOne, setColorOne] = useState("ffffff");
  const [colorTwo, setColorTwo] = useState("ffffff");

  return (
    <>
      <div>
        <h1>Нажми для создания случайного градиента с hex цветами</h1>
        <h3>
          background: linear-gradient(to right,#
          {colorOne}
          ,#
          {colorTwo})
        </h3>
        <button>Нажми меня</button>
      </div>
    </>
  )
}

export default App;
