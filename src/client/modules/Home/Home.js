import React, {useEffect, useMemo} from 'react'
import Page from '../../components/Page'
import Spinner from '../../components/Spinner'
import {TitleH2} from '../../styles/styled-components/commons'
import EventCard from './subcomponents/EventCard'
import {fetchEventsThunk} from '../../redux/slices/fetchEvents'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'styled-bootstrap-grid';

const Home=({leagueId, leagueName, teams, numEvents})=> {
    let apiHasBeenCalled = false;
    const leagueEvents = useSelector((state) => {
        return state.fetchEvents.value
    })

    const fiveMinutesInMs = 1000*60*5

    const dispatch = useDispatch()

    const getLeagueData = () => {
        dispatch(fetchEventsThunk(leagueId))
    };

    const refineEvents = (events) => events.map(event => {
        try {
            const {
                strEvent, 
                strHomeTeam, 
                strAwayTeam, 
                intHomeScore, 
                intAwayScore, 
                dateEventLocal 
            } = event;

            if(!strEvent || !strHomeTeam || !strAwayTeam || !intHomeScore || !intAwayScore || !dateEventLocal) {
                return
            }

            const homeTeam = teams.find(team => team.strTeam === event.strHomeTeam)
            const homeTeamBadge = homeTeam.strTeamBadge

            const awayTeam = teams.find(team => team.strTeam === event.strAwayTeam)
            const awayTeamBadge = awayTeam.strTeamBadge

            if(!homeTeamBadge || !awayTeamBadge){
                return;
            }

            return {...event, homeTeamBadge, awayTeamBadge} 
        } catch {
            return
        }
    })
    .filter(el => el !== undefined)
    .slice(0, numEvents)

    const renderLeagueEvents = (events) => {
        const refinedEvents = refineEvents(events)

        if(!refinedEvents.length) {
            return (
                <Spinner />
            )
        }
        console.log('Home has rendered')

        return refinedEvents.map((ev, id) => <EventCard key={id} homeTeamBadge={ev.homeTeamBadge} awayTeamBadge={ev.awayTeamBadge} strEvent={ev.strEvent} strHomeTeam={ev.strHomeTeam} strAwayTeam={ev.strAwayTeam} intHomeScore={ev.intHomeScore} intAwayScore={ev.intAwayScore} dateEventLocal={ev.dateEventLocal} />)
    }

    useEffect(()=>{
        if(!apiHasBeenCalled) {
            getLeagueData()
            apiHasBeenCalled = true
        }

        const interval = setInterval(()=> {
            getLeagueData()
        }, fiveMinutesInMs)
             
        return () => clearInterval(interval)
    }, [])

    // component renders twice without useMemo
    const memoizedLeagueEvents = useMemo(() => renderLeagueEvents(leagueEvents), [leagueEvents]);

    return (
        <Page>
            <TitleH2>The last 10 events of {leagueName}</TitleH2>
            <Container fluid>
                <Row>
                 {memoizedLeagueEvents}
                </Row>
            </Container>
        </Page>
      );
    }

export default Home;

