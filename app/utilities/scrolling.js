const scrollTop = animationFrameReady$ =>
  animationFrameReady$.map(() => document.body.scrollTop).skipRepeats()
  
module.exports = {
  scrollTop
}