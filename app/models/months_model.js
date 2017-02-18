import { createModel } from './../helpers/model'
import { range, curryN, __ } from 'ramda'
import { 
  addMonths, format, getDay, startOfMonth, lastDayOfMonth, addDays, 
  getDaysInMonth
} from 'date-fns'

const buildDay = (value, type) => ({ value, type })

const fromStartOfMonth = (date, vec) => addDays(startOfMonth(date), vec)

const trailingDays = (date) => 
  range(-getDay(startOfMonth(date)), 0)
    .map((vec) => buildDay(fromStartOfMonth(date, vec), 'trailing'))

const mainDays = (date) => 
  range(0, getDaysInMonth(date))
    .map((vec) => buildDay(fromStartOfMonth(date, vec), 'main'))

const leadingDays = (date) =>
  range(1, 7 - getDay(lastDayOfMonth(date)))
    .map((vec) => buildDay(addDays(lastDayOfMonth(date), vec), 'leading'))

const buildDays = (date) => [
  ...trailingDays(date),
  ...mainDays(date), 
  ...leadingDays(date)
]

const monthKey = curryN(2, format)(__, 'YYYYMM')

const buildMonth = (date) => ({
  key: monthKey(date),
  days: buildDays(date),
  value: date
})

const buildMonths = (focusDate) => 
  range(-5, 5)
    .map((vec) => addMonths(new Date(focusDate), vec))
    .map(buildMonth)
  
const monthsMods = {
  SET_FOCUS: (months, focusMonth) => buildMonths(focusMonth)
}

const MonthsModel = () => createModel(monthsMods, buildMonths(new Date()))

export default MonthsModel