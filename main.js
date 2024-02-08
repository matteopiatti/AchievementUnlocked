import './style.css'
import { store } from './scripts/store.js'

// Achievement 1
store.startBtn.addEventListener('click', function startListener () {
  store.start()
  store.startBtn.removeEventListener('click', startListener)
  store.startBtn.addEventListener('click', function stopListener () {
    store.stop()
    store.startBtn.removeEventListener('click', stopListener)
  })
})