import React, { useState } from "react";
import "./button.css";

type BProps = {
  text: string;
onClick?: () => void;

}

export const Button = ({ 
  text = "default",
 onClick,
}: BProps) => {

 
  return (
    <button className="goofydesign_button" onClick={onClick}>{text}</button>
  );
};