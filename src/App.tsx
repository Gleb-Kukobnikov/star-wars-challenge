import React from 'react';
import {CharacterList, HeroDetails} from "./containers";
import {Header} from "./components";
import {Route, Switch} from "react-router-dom";

import ScrollRestoration from 'react-scroll-restoration';

function App() {
    return (
        <div className="App">
            <Header />
            <ScrollRestoration />
            <Switch>
                <Route exact path="/" component={CharacterList} />
                <Route exact path="/character/:id" component={HeroDetails} />
            </Switch>
        </div>
    );
}

export default App;
