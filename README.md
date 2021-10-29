# FrontEnd Test Code

## Main commands:
- `npm i`: to install dependencies
- `npm run build`: to create Webpack output folder
- `npm start`: to launch client and server to `localhost:3000`

## Functionality
- This code test has been done in `SSR` using `Express` as server framework;
- API call to get data to populate [Home](link) module is [dispatched](link) with Redux every five minutes (please see [here])) 
- API call to get data to populate [Teams](Link) and [Team](Link) modules are called once, filtered in SSR and passed to client as prop. Reason: data must not be refreshed, so it should not be necessary to do a client side call. If data are not available, `Teams` and `Team`, as well as the `Teams` Header [link](link), are not shown.
- Some `Bootstrap` components and classes have been used to build components

## Optimization:
- Caching with [contenthash](https://webpack.js.org/guides/caching/#output-filenames) (Webpack)
- `Manifest` and `node-modules` are bundled apart (Webpack)
- `useMemo` has been used in `Home` module cards, in order to avoid unnecessary re-fetching when data refresh through API call dispatch (please see [here](link)).
- Code splitting for `Home`, `Teams` and `Team` modules with `@loadable/component`, in order not to load those modules which user may not never see

## Instructions

- Clone this repository.
- Create a new branch from the `master` branch (name it however you like).
- Implement the requirements listed below.
- Open a Pull Request.

## Requirements

You will note that these requirements are quite vague in some areas. The idea is for you to fill in the gaps and make some decissions in order to implement them. Anything that is not specified is for you to think about and choose your own implementation. 

- Create a SPA with **React**.
- All your components should be _functional components_, avoid using classes.
- Use this [public api](https://www.thesportsdb.com/api.php) to fetch the data.
- The site should have three pages:
  * **/** a homepage with one widget to show the last 10 games played in the "Spanish La Liga", with the scores and some indication of who won the match. The information in this widget should be refreshed every 5 minutes.
  * **/teams** a list of all teams in the Spanish 1st division league (usually known as _"Spanish La Liga"_). Each item in the list should display the team badge and its name.
  * **/teams/:teamId** details about a specific team. Display the following information: _stadium name_, _foundation year_, _team name_, _team badge_, _link to team website_, _team description_, a picture of the _team jersey/equipment_ (teams will usually have more than one, pick any, but just one).
- Use **react-router-dom** to handle navigation between the three pages mentioned above.
- All the pages should have the same header with 2 links: _home_ and _teams_. If the active page is **/**, then the _home_ link should be bold; if the active page is **/teams**, then the _teams_ link should be bold; if the active page is **/teams/:teamId**, then no links should be bold.
- Styling is not important, we will not be evaluating designing skills. However, some minor styling should be applied, at least to center components, give some color and border to the header, etc. Please use `styled-components` for any styling that you choose to apply.
- Use `redux`, with any middleware of your choosing (or not at all), to handle the application state.
- Extra: it is not required, but if you are familiar with `TypeScript`, it's a plus if you can use it.

## How your PR will be evaluated

-  Correctness, does it work? 
-  Is it well designed? does it follow best practices?
-  Is the code readable and easy to comprehend? 
-  Would this code be easy to extend and maintain? 

Have fun!
