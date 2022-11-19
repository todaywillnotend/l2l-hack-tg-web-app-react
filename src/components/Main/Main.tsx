import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useTelegram } from "src/hooks/useTelegram";
import { Api } from "src/api";
import { mockUser } from "src/constants";
import { IUser } from "src/types";
import { Profile } from "../Profile";

import "./Main.scss";

export const Main: FC = () => {
    const { user } = useTelegram();
    const [userData, setUserData] = useState<IUser>({
        ...mockUser,
        telegramLogin: user?.username || mockUser.telegramLogin,
        firstName: user?.first_name || mockUser.firstName,
        lastName: user?.last_name || "",
    });
    const [loading, setLoading] = useState(true);

    const { id } = useParams<{id: string}>();
    const userId = id || String(user?.id);

    useEffect(() => {
        (async () => {
            try {
                const data = await Api.getUser(userId);
                if (data) setUserData(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        })();
    }, [userId]);

    if (loading) return null;

    return (
        <div className="main">
            <Profile {...userData} />
            {userData.reviews.map((review) => {
                return <Profile key={review.id} text={review.text} {...review.author} />
            })}
        </div>
    );
};
