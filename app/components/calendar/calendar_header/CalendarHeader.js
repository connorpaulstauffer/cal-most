import { format } from 'date-fns'
import styles from './styles.scss'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const CalendarHeader = ({ focusMonth }) => 
  <div className={ styles.calendarHeader }>
    <h2 className={ styles.header }>
      { format(focusMonth.value, 'MMMM YYYY') }
    </h2>
    <ol className={ styles.days }>
      { 
        DAYS.map((day) => 
          <li className={ styles.day }>{ day }</li>
        ) 
      }
    </ol>
  </div>

const render = (focusMonth) => <CalendarHeader focusMonth={ focusMonth } />

const CalendarHeader$ = ({ focusMonthModel }) => 
  focusMonthModel.value$.map(render)
  
export { CalendarHeader$ }