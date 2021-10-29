const refineTeams = (teams) => teams.map(team => {
    try {
        const {
            strStadium, 
            intFormedYear, 
            strTeam, 
            strTeamBadge, 
            strWebsite, 
            strDescriptionEN,
            strTeamJersey 
        } = team;

        if(!strStadium || !intFormedYear || !strTeam || !strTeamBadge || !strWebsite || !strDescriptionEN || !strTeamJersey) {
            return
        }

        return {strStadium, intFormedYear, strTeam, strTeamBadge, strWebsite, strDescriptionEN, strTeamJersey }
    } catch {
        return
    }
})
.filter(el => el !== undefined)

export default refineTeams;