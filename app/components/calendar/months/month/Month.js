import { format } from 'date-fns'
import styles from './styles.scss'

const Month = (month) =>
  <div className={ styles.month }>
    <h4 className={ styles.header }>
      <span className="month">{ format(month.value, 'MMMM ') }</span>
      <span className="year">{ format(month.value, 'YYYY') }</span>
    </h4>
  </div>
  
export { Month }