import React from 'react';
import Page from '../../components/Page'
import {useParams} from "react-router-dom";
import {Paragraph, TitleH2} from '../../styles/styled-components/commons'
import { Wrapper, CardItemsDiv, TeamCardTextBodyDiv } from './StyledTeam';
import { Link } from "react-router-dom";
import './Team.scss'

const Team = ({teams}) => {
    let { id } = useParams();
    const team = teams[id-1];
    // if (team) {
    //     return null;
    // }
    return (
        <Page>
            <Wrapper>
                <TitleH2>{`${team.strTeam} - ${team.intFormedYear}`}</TitleH2>
                <CardItemsDiv>
                    <img src={team.strTeamJersey} className="" alt={`${team.strTeam} badge`} />
                    <img src={team.strTeamBadge} className="" alt={`${team.strTeam} badge`} />
                </CardItemsDiv>
                <TeamCardTextBodyDiv>
                    <Paragraph>{`Stadium: ${team.strStadium}`}</Paragraph>
                    <Paragraph>{`${team.strDescriptionEN}`}</Paragraph>
                </TeamCardTextBodyDiv>
                <CardItemsDiv>
                    <Link 
                        to="/teams"
                        className="nav-teams-link"
                    >
                        Go back to Teams
                    </Link>
                </CardItemsDiv>
            </Wrapper>
        </Page>
    )
}

export default Team
