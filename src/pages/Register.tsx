import clsx from "clsx";
import { useState } from "react";

import { Button } from "../components/Button/Button";
import { TextInput } from "../components/TextInput/TextInput";

import "../assets/css/pages/login.css";

export const Register = () => {
  const [demoButtonText, setDemoButtonText] = useState("REGISTER");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDemoButtonText("LOADING...");
    setTimeout(() => {
      setDemoButtonText("REGISTER");
    }, 5000);
    console.log("submit");
  };

  return (
    <section id="login">
      <div className={clsx("split")}></div>
      <div className={clsx("split", "login-form-bg")}>
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
            title="Your Username"
            value={password}
            updateValue={setUsername}
          />
          <TextInput
            label="Last Name"
            title="Your Name"
            value={password}
            updateValue={setLastname}
          />
          <TextInput
            label="First Name"
            title="Your First Name"
            value={password}
            updateValue={setFirstname}
          />
          <Button text={demoButtonText} action={handleSubmit} />
        </form>
      </div>
    </section>
  );
};
