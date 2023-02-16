import clsx from "clsx";
import { useState } from "react";

import { Button } from "../components/Button/Button";
import { TextInput } from "../components/TextInput/TextInput";
import { ComponentLink } from "../components/Link/Link";

import gfydsgn from "../assets/img/Logo.png";
import "../assets/css/pages/login.css";
import { Logo } from "../components/Logo/Logo";
import { Title } from "../components/Title/Title";

export const PwdForget = () => {
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
            label="New Password"
            title="Your mail"
            value={email}
            updateValue={setEmail}
          />
          <TextInput
            label="Confirm Password"
            title="Your password"
            value={password}
            updateValue={setPassword}
          />
          <Button text={demoButtonText} action={handleSubmit} />
          <ComponentLink
            text="Did you find your password? Log in !"
            PageName="/"
          />
        </form>
      </div>
    </section>
  );
};
