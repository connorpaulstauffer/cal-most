import { create } from '@most/create'

const timeoutCallback = callback => 
  window.setTimeout(callback, 1000 / 60)

const requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  timeoutCallback

const createAnimFrame$ = () => 
  create(
    (add, end, _) => {
      const onReady = () => {
        add(1)
        requestAnimFrame(onReady)
      }
      
      onReady()
    }
  )

module.exports = {
  createAnimFrame$
}