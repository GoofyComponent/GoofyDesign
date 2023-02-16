import { useState } from "react";
import { ButtonLoading } from "./Button/ButtonLoading";
import { Button } from "./Button/Button";
import "./app.css";

type AProps = {
    text: string;
    textLoading: string;
  }

function App() {

   

  return (
    <div className="App">
        <ButtonLoading text="Button" textLoading="Loading..."/>
        <Button text="Button"/>
    </div>
  );
}

export default App;
