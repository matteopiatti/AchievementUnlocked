import { timer } from './timer.js'
import Achievement from "./achievement";

class Store {
    constructor() {
        this.achievements = new Achievement()
        this.startBtn = document.querySelector('#start')
        this.counter = document.querySelector('.timer')
        this.init()
    }

    set started(val) {
        localStorage.setItem('started', JSON.stringify(val))
    }

    get started() {
        return JSON.parse(localStorage.getItem('started'))
    }

    set stopped(val) {
        localStorage.setItem('stopped', JSON.stringify(val))
    }

    get stopped() {
        return JSON.parse(localStorage.getItem('stopped'))
    }

    start() {
        timer.start(this.counter)
        this.startBtn.innerHTML = 'Stop Game'
        this.started = true
        this.stopped = false
        this.achievements.set(1)
    }

    stop() {
        timer.stop()
        this.achievements.set('stop')
        this.startBtn.innerHTML = 'Game over'
        this.startBtn.disabled = true
        this.stopped = true
    }

    init() {
        if (this.started) {
            this.start()
        }
        if (this.stopped) {
            this.stop()
        }
    }
}

export const store = new Store();