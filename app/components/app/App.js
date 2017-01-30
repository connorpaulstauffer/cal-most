import styles from './styles.scss'
import { Calendar$ } from './../calendar/Calendar'
import { createAnimFrame$ } from './../../utilities/animation_frames'

const App = ({ calendarVnode }) =>
  <div className={ styles.app }>
    { calendarVnode }
  </div>
  
const init = (calendarVnode) => <App calendarVnode={ calendarVnode } />

const App$ = () => {
  const animFrame$ = createAnimFrame$()
  
  return Calendar$({ animFrame$ }).map(init)
}

export { App$ }