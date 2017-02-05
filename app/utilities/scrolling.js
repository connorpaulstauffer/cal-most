const createScrollTop$ = animFrame$ =>
  animFrame$.map(() => document.body.scrollTop).skipRepeats()
  
module.exports = {
  createScrollTop$
}