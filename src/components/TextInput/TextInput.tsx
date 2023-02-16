import clsx from "clsx";

import "./TextInput.css";
import "../../assets/css/utilities/typography.css";

type InputProps = {
  state?: string;
  label?: string;
  labelPosition?: string;
  isTextArea?: boolean;
  title: string;
  placeholder?: string;
};

export const TextInput = ({
  state = "default",
  label,
  labelPosition = "center",
  isTextArea = false,
  title,
  placeholder,
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
            state === "error" && "goofydesign_textinput_error"
          )}
        />
      )}
      {!isTextArea && (
        <input
          type={"text"}
          title={title}
          placeholder={placeholder && placeholder}
          className={clsx(
            "goofydesign_textinput",
            state === "error" && "goofydesign_textinput_error"
          )}
        />
      )}
    </div>
  );
};
