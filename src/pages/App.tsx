import { useState } from "react";
import { Logo } from "../components/Logo/Logo";
import { TextInput } from "../components/TextInput/TextInput";
import { Title } from "../components/Title/Title";
import Image from "../assets/img/Logo.png";

function App() {
  const [email, setEmail] = useState("test@test.fr");

  return (
    <div className="App" style={{ width: "25rem" }}>
      <Logo
        size="small"
        value={Image}
      />
      <Title
        value="GoofyDesign"
        level={2}
        size="large"
        color="tertiary"
      />
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
