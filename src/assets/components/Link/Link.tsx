import "./Link.css";
import React from "react";

function Link(props: any) {
  return (
    <a href={props.href} className="goofy_link">
      {props.children}
    </a>
  );
}

export default Link;
