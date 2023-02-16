import { useState } from "react";

import reactLogo from "../assets/img/svg/react.svg";
import viteLogo from "../assets/img/svg/vite.svg";

import { TextInput } from "./TextInput/TextInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ width: "25rem" }}>
      <TextInput title="Your mail" />
    </div>
  );
}

export default App;
