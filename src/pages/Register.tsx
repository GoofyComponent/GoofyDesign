import { useState } from "react";
import { Button } from "../components/Button/Button";
import { TextInput } from "../components/TextInput/TextInput";

import "../assets/css/pages/login.css";

export const Register = () => {
  const [demoButtonText, setDemoButtonText] = useState("Confirm");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDemoButtonText("LOADING...");
    setTimeout(() => {
      setDemoButtonText("LOGIN");
    }, 5000);
    console.log("submit");
  };

  return (
    <section id="login">
      <div className="split"></div>
      <div className="split login-form-bg">
        <form>
          <TextInput
            label="Email"
            title="Your mail"
            value={email}
            updateValue={setEmail}
          />
          <TextInput
            label="Password"
            title="Your password"
            value={password}
            updateValue={setPassword}
          />
          <TextInput
            label="Username"
            title="Your password"
            value={password}
            updateValue={setPassword}
          />
          <TextInput
            label="Last Name"
            title="Your password"
            value={password}
            updateValue={setPassword}
          />
          <TextInput
            label="First Name"
            title="Your password"
            value={password}
            updateValue={setPassword}
          />
          <Button text={demoButtonText} action={handleSubmit} />
        </form>
      </div>
    </section>
  );
};
