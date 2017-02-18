import { combine} from 'most'
import { curry } from 'ramda'
import { CalendarHeader$ } from './calendar_header/CalendarHeader'
import styles from './styles.scss'
import MonthsModel from './../../models/months_model'
import FocusMonthModel from './../../models/focus_month_model'
import { Months$ } from './months/Months'
import { differenceInMonths } from 'date-fns'

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
  
  focusMonthModel.value$
    .combine(
      (focusMonth, months) => {
        const fromFirst = differenceInMonths(focusMonth.value, months[0].value)
        const fromLast = differenceInMonths(
          focusMonth.value,
          months[months.length - 1].value
        )
        // debugger
        return (fromFirst < 2 || fromLast > -2) && 
          monthsModel.dispatch('SET_FOCUS', focusMonth.value)
      },
      monthsModel.value$
    )
    .drain()
    
  monthsModel.value$.tap(console.log.bind(console)).drain()
  focusMonthModel.value$.tap(console.log.bind(console)).drain()
  
  return combine(
    init,
    CalendarHeader$({ focusMonthModel }),
    Months$({ animFrame$, scrollTop$, monthsModel, focusMonthModel })
  )
}

export { Calendar$ }