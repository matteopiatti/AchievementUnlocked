import { store } from "./store";

class Timer {
  constructor() {
    this.interval = null;
    this.time = store.time;
    console.log(this.time);
  }

  start(el) {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(() => {
      this.time += 1;
      store.time = this.time;
      el.innerHTML =
        Math.floor(this.time / 3600).toString().padStart(2, "0") +
        ":" +
        Math.floor((this.time % 3600) / 60).toString().padStart(2, "0") +
        ":" +
        Math.floor(this.time % 60).toString().padStart(2, "0");
    }, 1000);
  }

  stop(el, time) {
    clearInterval(this.interval);
    el.innerHTML =
      Math.floor(time / 3600).toString().padStart(2, "0") +
      ":" +
      Math.floor((time % 3600) / 60).toString().padStart(2, "0") +
      ":" +
      Math.floor(time % 60).toString().padStart(2, "0");
  }
}

export const timer = new Timer()