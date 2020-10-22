import React from 'react';
import TravelBlog from "./TravelBlog"
import NewZealand from './Locations/NewZealand/NewZealand';
import Australia from './Locations/Australia/Australia';
import CzechRepublic from './Locations/CzechRepublic/CzechRepublic';
import Italy from './Locations/Italy/Italy';
import Germany from './Locations/Germany/Germany';
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
          <Route path={`${match.path}/CzechRepublic`}>
            <CzechRepublic />
          </Route>
          <Route path={`${match.path}/Italy`}>
            <Italy />
          </Route>
          <Route path={`${match.path}/Germany`}>
            <Germany />
          </Route>
          <Route>
            <TravelBlog />
          </Route>

        componentDidMount() {
          window.scrollTo(0, 0)
        }

        </Switch>
      </div>
          );
}


export default Travel;
