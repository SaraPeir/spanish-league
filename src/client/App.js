import React from "react"
import Global from "./Global"
import { Provider } from 'react-redux'
import store from './redux/store'

const App = ({leagueId, leagueName, teams}) => {
    return(
        <Provider store={store}>
            <Global leagueId={leagueId} leagueName={leagueName} teams={teams} />
        </Provider>
    )
}

export default App;