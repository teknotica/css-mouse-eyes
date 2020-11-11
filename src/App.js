import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BubbleWrap from "./components/BubbleWrap";
import EyeBalls from "./components/EyeBalls";
import Navigation from "./components/Navigation";
import Wrapper from "./components/Wrapper";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <BubbleWrap horizontalCount={15} verticalCount={15} />
          </Route>
          <Route path="/eye-balls">
            <EyeBalls horizontalCount={15} verticalCount={15} />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default App;
