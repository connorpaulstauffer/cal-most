import { createModel } from './../helpers/model'
import { format } from 'date-fns'

const defaultFocusMonth = () => format(new Date(), 'YYYYMM')

const focusMonthMods = {
  FOCUS: (oldFocus, newFocus) => newFocus
}

const FocusMonthModel = () => createModel(focusMonthMods, defaultFocusMonth())

export default FocusMonthModel