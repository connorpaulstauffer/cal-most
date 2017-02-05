import { createModel } from './../helpers/model'
import { format, addMonths } from 'date-fns'

const buildFocusMonth = (date) => 
  ({ value: date, key: format(date, 'YYYYMM') })

const defaultFocusMonth = () => buildFocusMonth(new Date())

const focusMonthMods = {
  INCREMENT: (oldFocus) => buildFocusMonth(addMonths(oldFocus.value, 1)),
  DECREMENT: (oldFocus) => buildFocusMonth(addMonths(oldFocus.value, -1))
}

const FocusMonthModel = () => createModel(focusMonthMods, defaultFocusMonth())

export default FocusMonthModel