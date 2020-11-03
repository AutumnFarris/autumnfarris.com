import React from 'react';
import TravelBlog from "./TravelBlog"
import NewZealand from './Locations/NewZealand/NewZealand';
import Australia from './Locations/Australia/Australia';
import CzechRepublic from './Locations/CzechRepublic/CzechRepublic';
import Italy from './Locations/Italy/Italy';
import Germany from './Locations/Germany/Germany';
import Austria from './Locations/Austria/Austria';
import Belgium from './Locations/Belgium/Belgium';
import London from './Locations/London/London';
import France from './Locations/France/France';
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
          <Route path={`${match.path}/Austria`}>
            <Austria />
          </Route>
          <Route path={`${match.path}/Belgium`}>
            <Belgium />
          </Route>
          <Route path={`${match.path}/London`}>
            <London />
          </Route>
          <Route path={`${match.path}/France`}>
            <France />
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
