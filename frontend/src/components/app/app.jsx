import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import browserHistory from "../../browser-history";
import MainPage from "../main-page/main-page";


const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <MainPage/>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
