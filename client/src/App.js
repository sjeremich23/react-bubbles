import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/styles.scss";

import Login from "./components/Login";
import { PrivateRoute } from "./utils/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* ******************************************** */}
          <Route exact path="/" component={Login} />
          <PrivateRoute
            path="/bubblepage"
            redirect="/"
            component={BubblePage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
