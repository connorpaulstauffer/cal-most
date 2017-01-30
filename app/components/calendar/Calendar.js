import { just } from 'most'
import { curry } from 'ramda'
import { CalendarHeader$ } from './calendar_header/CalendarHeader'
import styles from './styles.scss'
import MonthsModel from './../../models/months_model'

const Calendar = ({ calendarHeaderVnode, animFrame$ }) => 
  <div className={ styles.calendar } >
    { calendarHeaderVnode }
  </div>
  
const render = (animFrame$, calendarHeaderVnode) => 
  <Calendar animFrame$={ animFrame$ } 
    calendarHeaderVnode={ calendarHeaderVnode } />

const Calendar$ = ({ animFrame$ }) =>  {
  const monthsModel = MonthsModel()
  
  monthsModel.value$.tap(console.log.bind(console)).drain()
  
  return CalendarHeader$({ animFrame$, monthsModel })
    .map(curry(render)(animFrame$))
}

export { Calendar$ }