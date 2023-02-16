import clsx from "clsx";

import "./TextInput.css";
import "../../assets/css/utilities/typography.css";
import { Dispatch, SetStateAction } from "react";

type InputProps = {
  state?: string;
  label?: string;
  isTextArea?: boolean;
  title: string;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  updateValue: Dispatch<SetStateAction<string>>;
};

export const TextInput = ({
  state = "default",
  label,
  isTextArea = false,
  title,
  placeholder,
  errorMessage,
  value,
  updateValue,
}: InputProps) => {
  return (
    <div className="goofydesign_forminput">
      {label && <label className={clsx("goofydesign_label")}>{label}</label>}
      {isTextArea && (
        <textarea
          title={title}
          placeholder={placeholder && placeholder}
          className={clsx(
            "goofydesign_textinput",
            "goofydesign_regular",
            state === "error" && "goofydesign_textinput_error",
            state === "disabled" && "goofydesign_textinput_disabled"
          )}
          value={value && value}
          disabled={state === "disabled" && true}
          onChange={(e) => {
            updateValue(e.target.value);
          }}
        />
      )}
      {!isTextArea && (
        <input
          type={"text"}
          title={title}
          placeholder={placeholder && placeholder}
          className={clsx(
            "goofydesign_textinput",
            "goofydesign_regular",
            state === "error" && "goofydesign_textinput_error",
            state === "disabled" && "goofydesign_textinput_disabled"
          )}
          disabled={state === "disabled" && true}
          value={value && value}
          onChange={(e) => {
            updateValue(e.target.value);
          }}
        />
      )}
      {state === "error" && errorMessage && (
        <p
          className={clsx("goofydesign_regular", "goofydesign_textinput_error")}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
