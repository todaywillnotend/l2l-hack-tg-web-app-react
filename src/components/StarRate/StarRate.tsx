import React, { FC } from "react";
import cn from 'classnames';

import { Star } from "../Star/";

import './StarRate.scss';

interface IStarRate {
    value: number;
	className?: string;
}

export const StarRate: FC<IStarRate> = ({ value, className }) => {
    return (
        <div className={cn("star-rate", className)}>
            {[...new Array(5)].map((el, i) => (
                <Star key={i} filled={i <= value - 1} />
            ))}
        </div>
    );
};
