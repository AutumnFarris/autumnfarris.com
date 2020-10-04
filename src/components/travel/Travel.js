import React from 'react';
import './Travel.scss';
import Locations from "./Locations"
import NewZealand from './NewZealand/NewZealand';
import Australia from './Australia/Australia';
import { Route, Switch, useRouteMatch } from "react-router-dom"

const Travel = () => {
  let match = useRouteMatch();

    return (
      <div>
        <Switch>

          <Route path={`${match.path}/NewZealand`}>
            <NewZealand />
          </Route>
          <Route path={`${match.path}/Australia`}>
            <Australia />
          </Route>
          <Route>
            <Locations />
          </Route>

        </Switch>
      </div>
          );
}


export default Travel;
