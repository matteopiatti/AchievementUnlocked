import './style.css'
import { timer } from './timer.js'
import { store } from './store.js'

// Setup --> Auslagern??
store.setup()
console.log(store)
const startButton = document.querySelector('#start')
const counter = document.querySelector('.timer')

// Achievement 1
startButton.addEventListener('click', function startListener () {
  start()
  startButton.removeEventListener('click', startListener)
  startButton.addEventListener('click', function stopListener () {
    stop()
    startButton.removeEventListener('click', stopListener)
  })
})

function start () {
  startButton.innerHTML = 'Stop Game'
  show(document.querySelector('.tile-one'))
  timer.start(counter)
  store.setAchievement(0,'Game started')
}

// Utils --> Auslagern
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