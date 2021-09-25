import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import browserHistory from "../../browser-history";
import MainPage from "../../pages/main-page/main-page";
import Header from "./header/header";
import RegistrationPage from "../../pages/registration-page/registration-page";
import AuthPage from "../../pages/auth-page/auth-page";

const App = () => {
  return (
    <Router history={browserHistory}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/registration" render={() => <RegistrationPage />} />
        <Route exact path="/auth" render={() => <AuthPage />} />
      </Switch>
    </Router>
  );
};

export default App;
