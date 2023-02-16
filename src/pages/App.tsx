import { useState } from "react";
import { Button } from "../components/Button/Button";
import { TextInput } from "../components/TextInput/TextInput";
import { ComponentLink } from "../components/Link/Link";

type AppProps = {
  PageName: string;
  text: string;
};

function App() {
  const [email, setEmail] = useState("test@test.fr");

  return (
    <div className="App" style={{ width: "25rem" }}>
      <TextInput title="Your mail" label="Email" />
      <TextInput title="Your password" label="Email" />

      <h1>TEST</h1>
    </div>
  );
}

export default App;
