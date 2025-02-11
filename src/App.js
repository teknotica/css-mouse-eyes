import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BubbleWrap from "./components/BubbleWrap";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <BubbleWrap horizontalCount={10} verticalCount={10} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
