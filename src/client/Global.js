import React from 'react';
import Home from './modules/Home'
import Teams from './modules/Teams'
import Team from './modules/Team'
import Header from './components/Header'
import {Switch, Route} from "react-router-dom";

const Global = ({teams, leagueId, leagueName}) => {
    return (
        <React.Fragment>
            <Header teams={teams} />
            <Switch>
                <Route exact path="/">
                    <Home leagueId={leagueId} leagueName={leagueName} teams={teams} numEvents={10} />
                </Route>
                <Route exact path="/teams">
                    <Teams teams={teams} leagueName={leagueName} />
                </Route>
                <Route path="/teams/:id">
                    <Team teams={teams} />
                </Route> 
            </Switch>
        </React.Fragment>
    ) 
}

export default Global;