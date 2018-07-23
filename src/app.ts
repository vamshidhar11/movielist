import { PLATFORM } from "aurelia-pal";
import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  configureRouter(config: RouterConfiguration, router: Router) {
    config.options.pushState = true;

    config.map([
      {
        route: ["", "watchlist"],
        href: "watchlist",
        title: "WATCHLIST",
        moduleId: PLATFORM.moduleName("pages/watchlist"),
        nav: true
      },
      {
        route: ["", "popular"],
        href: "popular",
        title: "POPULAR MOVIES",
        moduleId: PLATFORM.moduleName("pages/popularmovies"),
        nav: true
      },
      {
        route: "search/:term",
        name: "search",
        moduleId: PLATFORM.moduleName("pages/searchresults")
      },
      {
        route: "callback",
        name: "callback",
        moduleId: PLATFORM.moduleName("callback")
      }
    ]);
  }
}
