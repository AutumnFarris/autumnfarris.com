import React from 'react';
import TravelBlog from "./TravelBlog"
import NewZealand from './Locations/NewZealand/NewZealand';
import Australia from './Locations/Australia/Australia';
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
