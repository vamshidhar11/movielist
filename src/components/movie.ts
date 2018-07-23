import { autoinject, bindable } from "aurelia-framework"; // this has been modified to include 'autoinject'
import { Movie as MovieModel } from "moviedb-promise";
import { WatchlistManager } from "../watchlist-manager";
import { AuthService } from "../auth-service";

@autoinject
export class Movie {
  @bindable model: MovieModel;

  isInWatchlist = false;
  isAuthenticated = false;

  isHovering = false;

  mouseOver() {
    this.isHovering = true;
  }

  mouseOut() {
    this.isHovering = false;
  }

  addMovie(movie: MovieModel) {
    this.watchlist.add(movie);
    this.isInWatchlist = true;
  }

  removeMovie(movie: MovieModel) {
    this.watchlist.remove(movie);
    this.isInWatchlist = false;
  }

  bind() {
    this.isInWatchlist = this.watchlist.isAdded(this.model);
  }

  constructor(private watchlist: WatchlistManager, private auth: AuthService) {
    this.isAuthenticated = auth.isAuthenticated();

    auth.authNotifier.addListener("authChange", state => {
      this.isAuthenticated = state.authenticated;
    });
  }
}
