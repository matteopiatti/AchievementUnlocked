const toaster = {
    tl: document.createElement('div'),
    tr: document.createElement('div'),
    bl: document.createElement('div'),
    br: document.createElement('div'),
}

for (const [key, value] of Object.entries(toaster)) {
    value.classList.add('toaster')
    value.classList.add(key)
    document.body.append(value)
}

export const toast = {
    send: (name = 'empty', time = 3000, pos = 'tr') => {
        const div = document.createElement('div')
        div.innerHTML = '✨ '+name+' ✨'
        toaster[pos].append(div)
        div.classList.add('toast')

        setTimeout(() => {
            div.classList.add('die')
            setTimeout(() => {
                div.remove()
            }, 500)
        }, time);
    },
}

