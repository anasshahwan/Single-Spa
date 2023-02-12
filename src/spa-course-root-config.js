import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import("@single-spa/welcomee"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@spa-course/navbar",
//   app: () => System.import("@spa-course/navbar"),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
