import clsx from "clsx";
import { useState } from "react";

import { Button } from "../components/Button/Button";
import { TextInput } from "../components/TextInput/TextInput";
import { ComponentLink } from "../components/Link/Link";

import "../assets/css/pages/login.css";

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
      <div className={clsx("split")}></div>
      <div className={clsx("split", "login-form-bg")}>
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
          <ComponentLink text="Did you find your password? Log in !" PageName="/" />
        </form>
      </div>
    </section>
  );
};
