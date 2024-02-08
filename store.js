import { toast } from "./toast";

class Store {
    constructor() {
        this.achievements = null;
        this.time = null;
        this.started = false;
        this.stopped = false;
    }

    setAchievement(a, text, cb) {
        const btn = (a === 'stop') ? document.querySelector('#ax') : document.querySelector('#a' + (a + 1));

        if (!this.achievements[a]) {
            btn.classList.add('win');
            this.achievements[a] = true;
            if (a !== 'stop') {
                toast.send('Achievement unlocked: ' + text);
            }
        }

        if (cb) {
            cb();
        }
    }

    set time(time) {
        console.log(time)
        localStorage.setItem('time', time);
    }

    setup() {
        this.achievements = JSON.parse(localStorage.getItem('achievements'));
        this.time = localStorage.getItem('time');
        if (!this.achievements) {
            this.achievements = [false, false, false, false, false];
        }
    }
}

export const store = new Store();