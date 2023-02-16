import clsx from "clsx";

import "../../assets/css/utilities/typography.css";
import "../../assets/css/design-tokens/base-colors.css";

type TitleProps = {
    value: string;
    level: number;
    size: string;
    color: string;
};

export const Title = ({ value, level, size, color }: TitleProps) => {
    switch (level) {
        case 3:
            return (<h3 className={clsx(
                size === "large" && "goofydesign_title-large",
                size === "medium" && "goofydesign_title-medium",
                size === "small" && "goofydesign_title-small",
                `goofydesign_font-color_${color}`
            )}
            >
                {value}
            </h3>);
        case 2:
            return (<h2 className={clsx(
                size === "large" && "goofydesign_title-large",
                size === "medium" && "goofydesign_title-medium",
                size === "small" && "goofydesign_title-small",
                `goofydesign_font-color_${color}`
            )}
            >
                {value}
            </h2>);
        default:
            return (<h1 className={clsx(
                size === "large" && "goofydesign_title-large",
                size === "medium" && "goofydesign_title-medium",
                size === "small" && "goofydesign_title-small",
                `goofydesign_font-color_${color}`
            )}
            >
                {value}
            </h1>);
    }
}