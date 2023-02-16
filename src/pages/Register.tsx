import clsx from "clsx";
import { useState } from "react";

import { Button } from "../components/Button/Button";
import { TextInput } from "../components/TextInput/TextInput";
import { ComponentLink } from "../components/Link/Link";
import { Logo } from "../components/Logo/Logo";

import "../assets/css/pages/login.css";

import gfydsgn from "../assets/img/Logo.png";
import { Title } from "../components/Title/Title";

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
      <div className={clsx("split")}>
        <Logo size="large" value={gfydsgn} />
        <Title value="GoofyCorner" size="large" level={1} color="secondary" />
        <Title value="The authentic" size="medium" level={2} color="tertiary" />
        <Title value="message app" size="medium" level={2} color="secondary" />
        <Title value="Stay goof." size="small" level={2} color="tertiary" />
      </div>
      <div className={clsx("split", "form-bg")}>
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
          <ComponentLink
            text="Already have an account ? Log in!"
            PageName="/"
          />
        </form>
      </div>
    </section>
  );
};
