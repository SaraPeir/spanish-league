import loadable from "@loadable/component";

export default loadable(() =>
  import(/* webpackChunkName: "async_header" */ "./Header"),
  {ssr: true}
);