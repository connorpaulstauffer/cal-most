import { format, getDate } from 'date-fns'
import styles from './styles.scss'
import { curry } from 'ramda'

const setFocus = (props, domEl) => {
  setTimeout(() => window.scroll(0, domEl.offsetTop - 66))
}

const watchFocus = (props, domEl) => {
  debugger
}

const onInit = (month, props, domEl) => {
  props.focusMonthModel.value$
    .take(1)
    .tap((focusMonthKey) => 
      (focusMonthKey === month.key) && setFocus(props, domEl)
    )
    .drain()
    
  props.focusMonthModel.value$
    .tap((focusMonthKey) => 
      (focusMonthKey === month.key) && watchFocus(props, domEl)
    )
    .drain()
}

const _Month = ({ month }) =>
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

const Month = ({ month, props }) =>
  <_Month month={ month } onComponentDidMount={ curry(onInit)(month, props) } />
  
export { Month, onInit }