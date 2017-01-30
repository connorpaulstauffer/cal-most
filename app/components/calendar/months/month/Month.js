import { format, getDate } from 'date-fns'
import styles from './styles.scss'

const setFocus = (props, domEl) => {
  setTimeout(() => window.scroll(0, domEl.offsetTop - 66))
}

const onInit = (month, props, domEl) => {
  props.focusMonthModel.value$
    .tap((focusMonthKey) => 
      (focusMonthKey === month.key) && setFocus(props, domEl)
    ).drain()
}

const Month = ({ month }) =>
  <div className={ styles.month }>
    <h4 className={ styles.header }>
      <span className="month">{ format(month.value, 'MMMM ') }</span>
      <span className="year">{ format(month.value, 'YYYY') }</span>
    </h4>
    <ol className={ styles.days }>
      {
        month.days.map((day) =>
          <li className={ styles.day }>
            { getDate(day.value) }
          </li>
        )
      }
    </ol>
  </div>
  
export { Month, onInit }