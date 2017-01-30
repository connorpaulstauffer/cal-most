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
  
const render = (calendarHeaderVnode, monthsVnode) => 
  <Calendar 
    calendarHeaderVnode={ calendarHeaderVnode }
    monthsVnode={ monthsVnode } />

const Calendar$ = ({ animFrame$ }) =>  {
  const monthsModel = MonthsModel()
  const focusMonthModel = FocusMonthModel()
  
  monthsModel.value$.tap(console.log.bind(console)).drain()
  focusMonthModel.value$.tap(console.log.bind(console)).drain()
  
  return combine(
    render,
    CalendarHeader$({ animFrame$, monthsModel, focusMonthModel }),
    Months$({ animFrame$, monthsModel, focusMonthModel })
  )
}

export { Calendar$ }