import clsx from "clsx";

import "./logo.css";

type LogoProps = {
    value: string;
    size: string;
}

export const Logo = ({ value, size }: LogoProps) => {
    return (
        <img className={clsx(
            size === "large" && "goofydesign_logo-large",
            size === "medium" && "goofydesign_logo-medium",
            size === "small" && "goofydesign_logo-small",
        )}
            src={value}
        />
    )
}