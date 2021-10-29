import loadable from "@loadable/component";

export default loadable(() =>
  import(/* webpackChunkName: "async_event_card" */ "./EventCard"),
  {ssr: false}
);