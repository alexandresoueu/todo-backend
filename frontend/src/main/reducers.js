import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'add your task here',
    list: [{
      _id: 1,
      description: 'Pagar fatura',
      done: true
    },
    {
      _id: 2,
      description: 'Pagar Amigos',
      done: false
    },
    {
      _id: 3,
      description: 'Pagar CONTAS',
      done: true
    }]
  })
})

export default rootReducer
