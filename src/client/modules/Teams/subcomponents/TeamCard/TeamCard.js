import React from 'react'
import {Wrapper} from './StyledTeamCard'
import {TitleH4, Row, DivWithBorder} from '../../../../styles/styled-components/commons'
import { Link } from "react-router-dom";
import { Col } from 'styled-bootstrap-grid';
import './TeamCard.scss'

const TeamCard = ({strTeam, strTeamBadge, index}) => {
    console.log(`${strTeam} has rendered`)
    return (
        <Wrapper>
                <Link className="nav-link" to={`/teams/${index}`}>
                <DivWithBorder>
                    <TitleH4>{strTeam}</TitleH4>
                </DivWithBorder>
                <DivWithBorder>
                    <Row>
                        <Col col={12}>
                            <img src={strTeamBadge} className="img-fluid rounded-start" alt={`${strTeam} badge`} />
                        </Col>
                    </Row>
                </DivWithBorder>
            </Link>
        </Wrapper>
    ) 
}

export default TeamCard
