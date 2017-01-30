import { just } from 'most'
import styles from './styles.scss'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const CalendarHeader = () => 
  <div className={ styles.calendarHeader }>
    <h2 className={ styles.header }>January</h2>
    <ol className={ styles.days }>
      { 
        DAYS.map((day) => 
          <li className={ styles.day }>{ day }</li>
        ) 
      }
    </ol>
  </div>

const render = () => <CalendarHeader />

const CalendarHeader$ = ({ animFrame$ }) => just(true).map(render)
  
export { CalendarHeader$ }