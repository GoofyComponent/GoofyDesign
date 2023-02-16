import { TextInput } from "../components/TextInput/TextInput";
import { ComponentLink } from "../components/Link/Link";

export const Login = () => {
  return (
    <>
      <div className="App" style={{ width: "25rem" }}>
        <TextInput title="Your mail" label="Email" />
        <TextInput title="Your password" label="Email" />
        <ComponentLink text={"test lien"} PageName={"register"} />
      </div>
    </>
  );
};
