import { Month, onInit } from './month/Month'
import styles from './styles.scss'
import { curry } from 'ramda'

const Months = ({ months, props }) => 
  <div className={ styles.months }>
    { 
      months.map(month =>
        <Month 
          month={ month } 
          onComponentDidMount={ curry(onInit)(month, props) } />
      ) 
    }
  </div>

const init = (props, months) => <Months months={ months } props={ props } />

const Months$ = (props) => 
  props.monthsModel.value$.map(curry(init)(props))

export { Months$ }