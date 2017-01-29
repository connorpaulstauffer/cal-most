import { just } from 'most'
import { curry } from 'ramda'
import styles from './styles.scss'

const Calendar = () => <div className={ styles.calendar } />

const render = (animFrame$) => <Calendar />

const createCalendarVnode$ = ({ animFrame$ }) => 
  just(true).map(() => render(animFrame$))

export { createCalendarVnode$ }