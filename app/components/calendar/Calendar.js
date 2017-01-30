import { combine} from 'most'
import { curry } from 'ramda'
import { CalendarHeader$ } from './calendar_header/CalendarHeader'
import styles from './styles.scss'
import MonthsModel from './../../models/months_model'
import { Months$ } from './months/Months'

const Calendar = ({ calendarHeaderVnode, monthsVnode }) => 
  <div className={ styles.calendar } >
    { calendarHeaderVnode }
    { monthsVnode }
  </div>
  
const render = (calendarHeaderVnode, monthsVnode) => 
  <Calendar 
    calendarHeaderVnode={ calendarHeaderVnode }
    monthsVnode={ monthsVnode } />

const Calendar$ = ({ animFrame$ }) =>  {
  const monthsModel = MonthsModel()
  
  monthsModel.value$.tap(console.log.bind(console)).drain()
  
  return combine(
    render,
    CalendarHeader$({ animFrame$, monthsModel }),
    Months$({ animFrame$, monthsModel })
  )
}

export { Calendar$ }