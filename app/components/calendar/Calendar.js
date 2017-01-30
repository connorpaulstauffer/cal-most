import { just } from 'most'
import { curry } from 'ramda'
import { createCalendarHeaderVnode$ } from './calendar_header/CalendarHeader'
import styles from './styles.scss'
import MonthsModel from './../../models/months_model'

const Calendar = ({ calendarHeaderVnode, animFrame$ }) => 
  <div className={ styles.calendar } >
    { calendarHeaderVnode }
  </div>
  
const render = (animFrame$, calendarHeaderVnode) => 
  <Calendar animFrame$={ animFrame$ } 
    calendarHeaderVnode={ calendarHeaderVnode } />

const createCalendarVnode$ = ({ animFrame$ }) =>  {
  const monthsModel = MonthsModel()
  
  monthsModel.value$.tap(console.log.bind(console)).drain()
  
  return createCalendarHeaderVnode$({ animFrame$, monthsModel })
    .map(curry(render)(animFrame$))
}

export { createCalendarVnode$ }