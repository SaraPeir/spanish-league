import loadable from "@loadable/component";

export default loadable(() =>
  import(/* webpackChunkName: "async_home" */ "./Home"),
  {ssr: false}
);