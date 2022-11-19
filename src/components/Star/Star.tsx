import React, { FC } from "react";
import cn from "classnames";

import "./Star.scss";

interface IStar {
    filled: boolean;
}

export const Star: FC<IStar> = ({ filled }) => {
    return (
        <div className="star">
            <svg
                height="20px"
                width="20px"
                className={cn("star__img", {
                    star__img_filled: filled,
                    star__img_blank: !filled,
                })}
                viewBox="0 0 25 23"
            >
                <polygon
                    strokeWidth="0"
                    points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                />
            </svg>
        </div>
    );
};
