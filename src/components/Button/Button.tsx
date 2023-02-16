import React, { useState } from "react";
import "./button.css";

type BProps = {
  text: string;
  action: (e: any) => void;
};

export const Button = ({ text = "default", action }: BProps) => {
  return (
    <button className="goofydesign_button" onClick={action}>
      {text}
    </button>
  );
};
