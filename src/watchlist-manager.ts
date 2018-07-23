import { EventEmitter } from "events";
import { Movie } from "moviedb-promise";

const storageKey = "watchlist";

export class WatchlistManager {
  private items: Movie[];
  notifier = new EventEmitter();

  private load(): Movie[] {
    return localStorage.getItem(storageKey)
      ? JSON.parse(localStorage.getItem(storageKey))
      : [];
  }

  private save(): void {
    localStorage.setItem(storageKey, JSON.stringify(this.items));
  }

  add(movie: Movie) {
    if (!this.isAdded(movie)) {
      this.items.push(movie);
      this.save();

      this.notifier.emit("movie:added", movie, this.items);
    }
  }

  remove(movie: Movie) {
    if (this.isAdded(movie)) {
      this.items.splice(this.items.indexOf(movie), 1);
      this.save();
      this.notifier.emit("movie:removed", movie, this.items);
    }
  }

  get() {
    return this.items;
  }

  isAdded(movie: Movie): boolean {
    return this.items.find(m => m.id == movie.id) != undefined;
  }

  constructor() {
    this.items = this.load();
  }
}
