import './style.css'
import { store } from './scripts/store.js'
import { utils } from './scripts/utils.js'
import { timer } from './scripts/timer.js'

// Achievement 1
store.startBtn.addEventListener('click', function startListener () {
  store.start()
  store.startBtn.removeEventListener('click', startListener)
  store.startBtn.addEventListener('click', function stopListener () {
    console.log('asdf')
    store.stop()
    store.startBtn.removeEventListener('click', stopListener)
  })
})

// Achievement 2
const locate = async () => {
  await utils.until(_ => timer.actualTime >= 8)
  navigator.geolocation.getCurrentPosition(
    () => {
      store.achievements.set(2)
    },
    () => {
    })
}
locate()