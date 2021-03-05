import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./path/landingPage";

function Routes() {
  return (
    <Switch>
      <Route path='/' exact strict component={LandingPage} />
    </Switch>
  );
}

export default Routes;
