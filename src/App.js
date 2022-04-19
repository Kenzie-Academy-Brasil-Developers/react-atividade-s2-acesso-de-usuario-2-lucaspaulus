import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Company from "./components/pages/company";
import Customer from "./components/pages/customer";
import {members} from "./utils/members";
import "./App.css";

function App() {
    console.log(members)
    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route exact path="/customer/:id">
                        <Customer pessoas={members}/>
                    </Route>
                    
                    <Route exact path="/company/:id">
                        <Company pessoas={members}/>
                    </Route>

                    <Route exact path="/">
                        <Home pessoas={members}/>
                    </Route>
                </Switch>
            </header>
        </div>
    );
}

export default App;
