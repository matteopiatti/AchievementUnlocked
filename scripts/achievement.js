import { toast } from "./toast"

class Achievement {
    constructor() {
        this.a = JSON.parse(localStorage.getItem('achievements')) || this.generate()
        this.setWon()
    }

    get get () {
        return this.a
    }
    
    set(nr, cb) {
        const btn = (nr === 'stop') ? document.querySelector('#ax') : document.querySelector('#a' + (nr))
        btn.classList.add('win')
        this.a.forEach(a => {
            if (a.nr == nr && !a.done) {
                a.done = true
                toast.send('Achievement unlocked: ' + a.text);
            }
        })
        localStorage.setItem('achievements', JSON.stringify(this.a))

        if (cb) {
            cb();
        }
    }

    generate () {
        return [
            {
                nr: 1,
                text: 'Game started',
                done: false
            },
            {
                nr: 2,
                text: 'Location allowed',
                done: false
            },
            {
                nr: 'stop',
                text: 'Game stopped',
                done: false
            },
        ]
    }

    setWon () {
        this.a.forEach(a => {
            if (a.done) {
                const btn = (a.nr === 'stop') ? document.querySelector('#ax') : document.querySelector('#a' + (a.nr))
                btn.classList.add('win')
            }
        })
    }
}

export default Achievement