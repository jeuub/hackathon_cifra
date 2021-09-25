import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import {AppRoute} from "../../utils/const";
import browserHistory from "../../browser-history";


const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path={'/'}
          render={() => (
            <div></div>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
