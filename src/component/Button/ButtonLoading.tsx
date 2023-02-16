import React, { useState } from "react";
import {Button} from "./Button";
import "./button.css";

type BProps = {
  text: string;
  textLoading: string;

}

export const ButtonLoading = ({ 
  text = "default",
  textLoading = "default"
  
}: BProps) => {

  const [buttonText, setButtonText] = useState(text);

  const handleClick = () => {
    setButtonText(textLoading);
    setTimeout(() => setButtonText(text), 2000); // remettre le texte du bouton après 5 secondes
  }

  return (
    <Button text={buttonText} onClick={handleClick}/>
  );
};