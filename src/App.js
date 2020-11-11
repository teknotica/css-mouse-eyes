import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BubbleWrap from "./components/BubbleWrap";
import Container from "./components/Container";
import EyeBalls from "./components/EyeBalls";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Container>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <BubbleWrap horizontalCount={15} verticalCount={15} />
          </Route>
          <Route path="/eye-balls">
            <EyeBalls horizontalCount={15} verticalCount={15} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
