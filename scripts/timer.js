class Timer {
  constructor() {
    this.interval = null
    this.actualTime = Number(localStorage.getItem('time')) || 0
  }

  get time () {
    return this.actualTime
}

  set time(newTime) {
      this.actualTime = newTime
      localStorage.setItem('time', newTime);
  }
  
  start(el) {
    if (this.interval) {
      clearInterval(this.interval)
    }
    
    this.interval = setInterval(() => {
      this.time = this.time + 1
      el.innerHTML =
      Math.floor(this.time / 3600).toString().padStart(2, "0") +
      ":" +
      Math.floor((this.time % 3600) / 60).toString().padStart(2, "0") +
      ":" +
      Math.floor(this.time % 60).toString().padStart(2, "0");
    }, 1000)
  }
  
  stop() {
    clearInterval(this.interval)
  }
}

export const timer = new Timer()