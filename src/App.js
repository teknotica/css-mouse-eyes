import React from "react";

import Container from "./components/container";
import useMouseOver from "./hooks/useMouseOver";

const App = () => {
  useMouseOver();

  return (
    <div className="App">
      <Container widthCount={15} heightCount={15} />
    </div>
  );
};

export default App;
