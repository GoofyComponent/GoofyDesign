import { useState } from "react";
import { TextInput } from "../components/TextInput/TextInput";

function App() {
  const [email, setEmail] = useState("test@test.fr");

  return (
    <div className="App" style={{ width: "25rem" }}>
      <TextInput
        title="Your mail"
        label="Email"
        value={email}
        updateValue={setEmail}
      />
      <TextInput title="Your password" label="Email" state="disabled" />
    </div>
  );
}

export default App;
