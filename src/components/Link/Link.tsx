import "./Link.css";
import React from "react";
import { Link } from "react-router-dom";

type LinkProps = {
  PageName: string;
  text: string;
};

export const ComponentLink = ({ PageName, text = "default" }: LinkProps) => {
  return (
    <div className="goofy_link_box">
      <Link to={PageName} className="goofy_link">
        {text}
      </Link>
    </div>
  );
};
