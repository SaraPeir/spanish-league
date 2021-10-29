import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import { loadableReady } from '@loadable/component';
import {
  BrowserRouter as Router,
} from "react-router-dom";

export default loadableReady(() => {
    hydrate(
      <Router>
        <App teams={window.__TEAMS__} leagueId={window.__LEAGUE_ID__} leagueName={window.__LEAGUE_NAME__} />
      </Router>,
      document.getElementById('app'),
    );
});