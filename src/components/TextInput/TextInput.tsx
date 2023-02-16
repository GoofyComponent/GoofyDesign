import clsx from "clsx";

import "./TextInput.css";

type InputProps = {
  state?: string;
  label?: string;
  isTextArea?: boolean;
  title: string;
  placeholder?: string;
};

export const TextInput = ({
  state = "default",
  label,
  isTextArea = false,
  title,
  placeholder,
}: InputProps) => {
  return (
    <>
      {label && <></>}
      {isTextArea && (
        <textarea title={title} placeholder={placeholder && placeholder} />
      )}
      {!isTextArea && (
        <input
          type={"text"}
          title={title}
          placeholder={placeholder && placeholder}
          className={clsx("goofydesign_textinput")}
        />
      )}
    </>
  );
};
