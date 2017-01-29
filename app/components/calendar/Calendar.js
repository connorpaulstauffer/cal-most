import { just } from 'most'
import { curry } from 'ramda'
import { createCalendarHeaderVnode$ } from './calendar_header/CalendarHeader'
import styles from './styles.scss'

const Calendar = ({ calendarHeaderVnode, animFrame$ }) => 
  <div className={ styles.calendar } >
    { calendarHeaderVnode }
  </div>
  
const render = (animFrame$, calendarHeaderVnode) => 
  <Calendar animFrame$={ animFrame$ } 
    calendarHeaderVnode={ calendarHeaderVnode } />

const createCalendarVnode$ = ({ animFrame$ }) => 
  createCalendarHeaderVnode$({ animFrame$ })
    .map(curry(render)(animFrame$))

export { createCalendarVnode$ }