import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import browserHistory from "../../browser-history";
import ActivitiesPage from "../../pages/activities-page/activities-page";
import ActivityPage from "../../pages/activity-page/activity-page";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import Header from "./header/header";
import RegistrationPage from "../../pages/registration-page/registration-page";
import AuthPage from "../../pages/auth-page/auth-page";
import Initiatives from "../../pages/initiatives/initiatives";

const App = () => {
  return (
    <Router history={browserHistory}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/activities" render={() => <ActivitiesPage />} />
        <Route exact path="/initiatives" render={() => <Initiatives />} />
        <Route exact path="/activity" render={() => <ActivityPage />} />
        <Route exact path="/registration" render={() => <RegistrationPage />} />
        <Route exact path="/auth" render={() => <AuthPage />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
