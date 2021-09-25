import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import browserHistory from "../../browser-history";
import MainPage from "../../pages/main-page/main-page";
import Initiatives from "../../pages/initiatives/initiatives";
import Header from "./header/header";
import Footer from "../footer/footer";
import '../../styles/main.css';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/initiatives" render={() => <Initiatives />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
