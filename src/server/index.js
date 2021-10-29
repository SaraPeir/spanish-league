import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../client/App';
import serialize from "serialize-javascript";
import path from 'path';
import { ChunkExtractor } from '@loadable/server'
import { StaticRouter } from 'react-router-dom';
import refineTeams from './utils'

const fetch = require('node-fetch');
const app = express(); 

app.use(express.static('assets'));

app.get("*", async (req, res) => {
    const allLeaguesUrl = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
    const getAllTeamsUrl = (id) => `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${id}`

    const statsFile = path.resolve('./assets/loadable-stats.json')
    const extractor = new ChunkExtractor({ statsFile });

    try {
      // API to get all leagues data is called to get Spanish league Id
      const allLeaguesResponse = await fetch(allLeaguesUrl)
      const allLeaguesData = await allLeaguesResponse.json()

      const spanishLeagueGeneralInfo = allLeaguesData.leagues.find(data => data.strLeague === 'Spanish La Liga')
      const spanishLeagueId = spanishLeagueGeneralInfo.idLeague;
      const spanishLeagueName = spanishLeagueGeneralInfo.strLeague;

      // API to get data about Spanish league teams with ID:
      const allTeamsUrl = getAllTeamsUrl(spanishLeagueId)
      const allTeamsResponse = await fetch(allTeamsUrl)
      const allTeamsData = await allTeamsResponse.json()

      const teams = refineTeams(allTeamsData.teams);

      const context = {}
      
      const jsx = extractor.collectChunks(
        <StaticRouter location={req.url} context={context}>
          <App teams={teams} leagueId={spanishLeagueId} leagueName={spanishLeagueName}  />
        </StaticRouter>
      )
      const html = renderToString(jsx)
      const scriptTags = extractor.getScriptTags()
    
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Code Test Front End Lambda</title>
            <script>window.__TEAMS__ = ${serialize(teams)}</script>
            <script>window.__LEAGUE_ID__ = ${serialize(spanishLeagueId)}</script>
            <script>window.__LEAGUE_NAME__ = ${serialize(spanishLeagueName)}</script>
            <!-- Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          </head>
          <body>
            <div id="app">${html}</div>
            ${scriptTags}
          </body>
        </html>
      `)
    } catch(error) {
      console.log(error)

      const jsx = extractor.collectChunks(<App teams={[]} leagueId={''} leagueName={''} />)
      const html = renderToString(jsx)
      const scriptTags = extractor.getScriptTags()
    
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Code Test Front End Lambda</title>
            <script>window.__TEAMS__ = ${serialize([])}</script>
            <script>window.__LEAGUE_ID__ = ${serialize('')}</script>
            <script>window.__LEAGUE_NAME__ = ${serialize('')}</script>
            <!-- Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          </head>
          <body>
            <div id="app">${html}</div>
            ${scriptTags}
          </body>
        </html>
      `)
    }
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})