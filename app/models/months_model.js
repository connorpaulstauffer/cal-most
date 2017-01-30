import { createModel } from './../helpers/model'
import { addMonths, format } from 'date-fns'
import { range, curry } from 'ramda'

const leadDays = (date) =>
  []
  
const mainDays = (date) =>
  []
  
const trailingDays = (date) =>
  []

const buildDays = (date) => [
  ...leadDays(date), 
  ...mainDays(date), 
  ...trailingDays(date)
]

const monthKey = curry(format)(_, 'MMYYYY')

const buildMonth = (date) => {
  key: monthKey(date),
  days: buildDays(date)
}

const buildMonths = (focusDate) => 
  range(-5, 5)
    .map((vec) => addMonths(focusDate, vec))
    .map(buildMonth)
  
const monthsMods = {
  SET_FOCUS: (months, focusMonth) => buildMonths(focusMonth)
}

const MonthsModel = () => 
  createModel(monthsMods, buildMonths())

export default MonthsModel