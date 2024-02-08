import './style.css'
import { toast } from './toast.js'
import { timer } from './timer.js'
import { store } from './store.js'

// Setup --> Auslagern??
store.setup()
const startButton = document.querySelector('#start')
const counter = document.querySelector('.timer')

if (achievements.achv[achievements.achv.length -1]) {
  stop()
}

if (achievements.achv[0] && !achievements.achv[achievements.achv.length -1]) {
  start()
}

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
  store.set.achievement(0,'Game started')
}

// Achievement X

function stop () {
  setAchievement('stop', 'Game stopped')
  startButton.innerHTML = 'Game Over'
  startButton.disabled = true
  timer.stop(counter, achievements.time)
}

// Achievement 2&3
async function getLocation () {
  await until(_ => achievements.time >= 8)
  if (achievements.achv[1] && achievements.achv[2]) {
    return
  }
  navigator.geolocation.getCurrentPosition(
    () => {
      setAchievement(1, 'Allowed Location')
    },
    () => {
      setAchievement(2, 'Blocked Location')
    })
}
getLocation()

// Achievement 4
window.addEventListener('resize', () => {
  setAchievement(3, 'Resized window')

  if (window.innerHeight <= 50) {
    setAchievement(5, 'Made window very small')
  }
})

// Achievement 5
if (!achievements.achv[0] && achievements.achv[achievements.achv.length -1]) {
  window.onbeforeunload = function (e) {
    setAchievement(4, 'Window reload')
    e.returnValue = 'Achievement unlocked: Window reload'
    return 'Achievement unlocked: Window reload'
  }
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