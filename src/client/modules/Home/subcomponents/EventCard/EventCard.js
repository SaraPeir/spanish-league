import React, {useMemo} from 'react'
import {Wrapper} from './StyledEventCard'
import {TitleH4, TitleH5, CardBodyRelativeDiv, CardTextBodyDiv, Row, DivWithBorder} from '../../../../styles/styled-components/commons'
import { Col } from 'styled-bootstrap-grid';

const EventCard = ({dateEventLocal, awayTeamBadge, homeTeamBadge, strEvent, strHomeTeam, strAwayTeam, intHomeScore, intAwayScore}) => {
    const hostHasWon = parseInt(intHomeScore) > parseInt(intAwayScore)
    const isTie = parseInt(intHomeScore) === parseInt(intAwayScore)
    
    // with useMemo, unnecessary rerenderings are avoided when fetch is done in Home component
    return useMemo(() => {
        console.log(`${strEvent} event rendered`)
        return (
                <Wrapper>
                    <DivWithBorder>
                        <TitleH4>{`${dateEventLocal} (local date)`}</TitleH4>
                    </DivWithBorder>
                    <DivWithBorder>
                        <Row>
                            <Col col={3}>
                                <img src={homeTeamBadge} className="img-fluid rounded-start" alt={`${strHomeTeam} badge`} />
                            </Col>
                            <CardBodyRelativeDiv>
                                {!isTie && hostHasWon && 
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="position-absolute top-0 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#AA3A3B" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
                                }
                                <CardTextBodyDiv>
                                    <TitleH5>{`${strHomeTeam} - ${intHomeScore}`}</TitleH5>
                                </CardTextBodyDiv>
                            </CardBodyRelativeDiv>
                        </Row>
                    </DivWithBorder>

                    <DivWithBorder>
                        <Row>
                            <Col col={3}>
                                <img src={awayTeamBadge} className="img-fluid rounded-start" alt={`${strAwayTeam} badge`} />
                            </Col>
                            <CardBodyRelativeDiv>
                                {!isTie && !hostHasWon && 
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="position-absolute top-0 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#AA3A3B" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
                                }  
                                <CardTextBodyDiv>
                                    <TitleH5>{`${strAwayTeam} - ${intAwayScore}`}</TitleH5>
                                </CardTextBodyDiv>
                            </CardBodyRelativeDiv>
                        </Row>
                    </DivWithBorder>
                </Wrapper>
        ) 
   }, [strEvent, strHomeTeam, strAwayTeam, intHomeScore, intAwayScore, dateEventLocal, awayTeamBadge, homeTeamBadge] )
}

export default EventCard