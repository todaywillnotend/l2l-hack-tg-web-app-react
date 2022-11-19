import React, { FC, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useTelegram } from "./hooks/useTelegram";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main";

import "./App.scss";

export const App: FC = () => {
    const { tg } = useTelegram();

    useEffect(() => {
        if (tg) {
            tg.ready();
        }
    }, [tg]);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
            </Switch>
        </div>
    );
};
