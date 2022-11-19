import React, { FC, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { Main } from "./components/Main";
import { useTelegram } from "./hooks/useTelegram";

import "./App.scss";

export const App: FC = () => {
    const { tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <div className="App">
            <Switch>
                <Route path="/users/:id">
                    <Main />
                </Route>
                <Route path="/users">
                    <Main />
                </Route>
            </Switch>
        </div>
    );
};
