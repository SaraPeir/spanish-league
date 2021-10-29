import React from 'react'
import Page from '../../components/Page'
import TeamCard from './subcomponents/TeamCard'
import {TitleH2} from './../../styles/styled-components/commons'
import { Container, Row } from 'styled-bootstrap-grid';

const Teams= ({teams, leagueName}) => {
    if(!teams.length) {
        return null
    }

    const renderTeamCards = (teams) => {
        console.log('Teams has rendered')

        return teams.map((t) => {
            const index = teams.indexOf(t)
            return <TeamCard key={index+1} index={index+1} strTeam={t.strTeam} strTeamBadge={t.strTeamBadge} />
        })
    }

    return (
        <Page>
            <TitleH2>The last 10 events of {leagueName}</TitleH2>
            <Container fluid>
                <Row>
                 {renderTeamCards(teams)}
                </Row>
            </Container>
        </Page>
      );
    }

export default Teams;

