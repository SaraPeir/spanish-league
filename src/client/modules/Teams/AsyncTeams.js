import loadable from "@loadable/component";

export default loadable(() =>
  import(/* webpackChunkName: "async_teams" */ "./Teams"),
  {ssr: false}
);