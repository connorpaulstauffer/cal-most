import { async } from 'most-subject'

const createModel = (mods, initialValue) => {
  const subject = async()
  const executeAction = (model, action) => 
    mods[action.name](model, action.data)
  const value$ = subject.scan(executeAction, initialValue)
  const dispatch = (name, data) => subject.next({ name, data })

  return { value$, dispatch }
}

module.exports = {
  createModel
}