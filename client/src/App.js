import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saves from "./pages/Saves";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Saves} />
                <Route exact path="/saves" component={Saves} />
                <Route exact path="/saves/:id" component={Detail} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default App;
