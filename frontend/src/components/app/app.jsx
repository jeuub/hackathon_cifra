import React, { useState } from "react";
import { Switch, Route, Router } from "react-router-dom";
import browserHistory from "../../browser-history";
import ActivitiesPage from "../../pages/activities-page/activities-page";
import ActivityPage from "../../pages/activity-page/activity-page";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import Header from "../header/header";
import RegistrationPage from "../../pages/registration-page/registration-page";
import AuthPage from "../../pages/auth-page/auth-page";
import Initiatives from "../../pages/initiatives/initiatives";
import InitiativePage from "../../pages/initiative-page/initiative-page";
import { AppRoute } from "../../utils/const";
import FormInitiatives from "../../pages/form-initiatives/form-initiatives";
import FormActivities from "../../pages/form-activities/form-activities";
import AccountPage from "../../pages/account-page/account-page";

const App = () => {
  const [activity, setActivity] = useState();
  return (
    <Router history={browserHistory}>
      <Header />
      <Switch>
        <Route exact path={AppRoute.MAIN} render={() => <MainPage />} />
        <Route
          exact
          path={AppRoute.ACTIVITIES}
          render={(props) => (
            <ActivitiesPage setActivity={setActivity} {...props} />
          )}
        />
        <Route
          exact
          path={AppRoute.INITIATIVES}
          render={() => <Initiatives />}
        />
        <Route
          exact
          path={AppRoute.ACTIVITY_PAGE}
          render={(props) => <ActivityPage activity={activity} {...props} />}
        />
        <Route
          exact
          path={AppRoute.REGISTRATION}
          render={() => <RegistrationPage />}
        />
        <Route exact path={AppRoute.AUTH} render={() => <AuthPage />} />
        <Route
          exact
          path={AppRoute.INITIATIVE_FORM}
          render={() => <FormInitiatives />}
        />
        <Route
          exact
          path={AppRoute.ACTIVITY_FORM}
          render={() => <FormActivities />}
        />
        <Route 
          exact 
          path={AppRoute.INITIATIVES_PAGE} 
          render={() => <InitiativePage />} 
         />
         <Route exact path={AppRoute.ACCOUNT}  render={() => <AccountPage />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
