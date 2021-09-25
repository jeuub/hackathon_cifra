import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import browserHistory from "../../browser-history";
import MainPage from "../../pages/main-page/main-page";
import Footer from "./footer/footer";
import Header from "./header/header";

const App = () => {
  return (
    <Router history={browserHistory}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
