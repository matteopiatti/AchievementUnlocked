function until(conditionFunction) {
    const poll = resolve => {
        if(conditionFunction()) resolve();
        else setTimeout(_ => poll(resolve), 400);
    }
    return new Promise(poll);
}

function show(el) {
    el.classList.add('show')
    el.style.opacity = 1
}

export const utils = {
    until,
    show
}