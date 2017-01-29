import styles from './styles.scss'
import { createCalendarVnode$ } from './../calendar/Calendar'
import { createAnimFrame$ } from './../../utilities/animation_frames'

const App = ({ fawnVnode }) =>
  <div className={ styles.app }>
    { fawnVnode }
  </div>
  
const render = (fawnVnode) => <App fawnVnode={ fawnVnode } />

const createAppVnode$ = () => {
  const animFrame$ = createAnimFrame$()
  
  return createCalendarVnode$({ animFrame$ }).map(render)
}

export { createAppVnode$ }