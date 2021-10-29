import loadable from "@loadable/component";

export default loadable(() =>
  import(/* webpackChunkName: "async_team" */ "./Team"),
  {ssr: false}
);