# FrontEnd Test Code

## Main commands:
- `npm i`: to install dependencies
- `npm run build`: to create Webpack output folder
- `npm start`: to launch client and server to `localhost:3000`

## Functionality
- This code test has been done in `SSR` using `Express` as server framework;
- API call to get data to populate [Home](https://github.com/SaraPeir/spanish-league/blob/master/src/client/modules/Home/Home.js) module is [dispatched](https://github.com/SaraPeir/spanish-league/blob/master/src/client/modules/Home/Home.js#L21) with Redux every five minutes (please see [here](https://github.com/SaraPeir/spanish-league/blob/8cc9cd8f35676dc1b19d7191def1d4a7f17fe178/src/client/modules/Home/Home.js#L70))) 
- API call to get data to populate [Teams](https://github.com/SaraPeir/spanish-league/blob/8cc9cd8f35676dc1b19d7191def1d4a7f17fe178/src/client/modules/Teams/Teams.js) and [Team](https://github.com/SaraPeir/spanish-league/blob/8cc9cd8f35676dc1b19d7191def1d4a7f17fe178/src/client/modules/Team/Team.js) modules are called once, filtered in SSR and passed to client as prop. Reason: data must not be refreshed, so it should not be necessary to do a client side call. If data are not available, `Teams` and `Team`, as well as the `Teams` Header [link](https://github.com/SaraPeir/spanish-league/blob/8cc9cd8f35676dc1b19d7191def1d4a7f17fe178/src/client/components/Header/Header.js#L22), are not shown.
- Some `Bootstrap` components and classes have been used to build components

## Optimization:
- Caching with [contenthash](https://webpack.js.org/guides/caching/#output-filenames) (Webpack)
- `Manifest` and `node-modules` are bundled apart (Webpack)
- `useMemo` has been used in `Home` module cards, in order to avoid unnecessary re-fetching when data refresh through API call dispatch (please see [here](link)).
- Code splitting for `Home`, `Teams` and `Team` modules with `@loadable/component`, in order not to load those modules which user may not never see

