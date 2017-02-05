import { combine} from 'most'
import { curry } from 'ramda'
import { CalendarHeader$ } from './calendar_header/CalendarHeader'
import styles from './styles.scss'
import MonthsModel from './../../models/months_model'
import FocusMonthModel from './../../models/focus_month_model'
import { Months$ } from './months/Months'

const Calendar = ({ calendarHeaderVnode, monthsVnode }) => 
  <div className={ styles.calendar } >
    { calendarHeaderVnode }
    { monthsVnode }
  </div>
  
const init = (calendarHeaderVnode, monthsVnode) => 
  <Calendar 
    calendarHeaderVnode={ calendarHeaderVnode }
    monthsVnode={ monthsVnode } />

const Calendar$ = ({ animFrame$, scrollTop$ }) =>  {
  const focusMonthModel = FocusMonthModel()
  const monthsModel = MonthsModel()
  
  monthsModel.value$.tap(console.log.bind(console)).drain()
  focusMonthModel.value$.tap(console.log.bind(console)).drain()
  
  return combine(
    init,
    CalendarHeader$({ focusMonthModel }),
    Months$({ animFrame$, scrollTop$, monthsModel, focusMonthModel })
  )
}

export { Calendar$ }