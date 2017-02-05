import { createModel } from './../helpers/model'
import { format } from 'date-fns'

const defaultFocusMonth = () => format(new Date(), 'YYYYMM')

const focusMonthMods = {
  INCREMENT: () => console.log('inc'),
  DECREMENT: () => console.log('dec')
}

const FocusMonthModel = () => createModel(focusMonthMods, defaultFocusMonth())

export default FocusMonthModel