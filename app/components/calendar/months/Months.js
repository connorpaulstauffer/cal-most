import { Month } from './month/Month'
import styles from './styles.scss'

const Months = ({ months }) => 
  <div className={ styles.months }>
    { months.map(Month) }
  </div>

const render = (months) => <Months months={ months } />

const Months$ = ({ monthsModel }) => monthsModel.value$.map(render)

export { Months$ }