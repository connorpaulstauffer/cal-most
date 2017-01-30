import styles from './styles.scss'
import { createCalendarVnode$ } from './../calendar/Calendar'
import { createAnimFrame$ } from './../../utilities/animation_frames'

const App = ({ calendarVnode }) =>
  <div className={ styles.app }>
    { calendarVnode }
  </div>
  
const render = (calendarVnode) => <App calendarVnode={ calendarVnode } />

const createAppVnode$ = () => {
  const animFrame$ = createAnimFrame$()
  
  return createCalendarVnode$({ animFrame$ }).map(render)
}

export { createAppVnode$ }