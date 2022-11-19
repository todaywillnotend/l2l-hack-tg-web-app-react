import React, { FC } from "react";
import { StarRate } from "../StarRate";

import './Profile.scss';

interface IProfile {
	telegramLogin: string;
	firstName: string;
	lastName: string;
	text?: string;
	country?: string;
	city?: string;
	rating?: number;
	photoUrl?: string;
}

export const Profile: FC<IProfile> = ({
	telegramLogin,
	firstName,
	lastName,
	country,
	city,
	rating,
	photoUrl,
	text,
	...props
}) => {
    return (
        <div className="profile" {...props}>
			{photoUrl && (
            <img
                className="profile__avatar"
                src={photoUrl}
                alt="userphoto"
            />
			)}
            <div className="profile__text">
                <div className="profile__name">{`${firstName} ${lastName}`}</div>
                {telegramLogin && (<div className="profile__username">{`@${telegramLogin}`}</div>)}
                {country && (<div className="profile__country">{`Страна: ${country}`}</div>)}
                {city && (<div className="profile__city">{`Город: ${city}`}</div>)}
                {text && (<div className="profile__description">{text}</div>)}
                {rating && (<StarRate value={rating} className="profile__rate" />)}
            </div>
        </div>
    );
};
