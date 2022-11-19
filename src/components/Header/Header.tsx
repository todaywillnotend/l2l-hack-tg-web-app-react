import React, { FC } from "react";

import { useTelegram } from "src/hooks/useTelegram";

import "./Header.scss";

export const Header: FC = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className="header">
            <button onClick={onClose}>Закрыть</button>
            <span className="header__username">{user?.username}</span>
        </div>
    );
};
