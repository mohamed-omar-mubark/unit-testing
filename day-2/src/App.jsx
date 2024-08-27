import React from "react";
import Button from "./components/Button/Button";

const App = () => {
  const handleButtonClick = () => {
    console.log("Button clicked! Testing from the console...");
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleButtonClick} />
    </div>
  );
};

export default App;
