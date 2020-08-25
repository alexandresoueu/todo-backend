import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'NEMO',
    list: [{
      _id: 1,
      description: 'Pagar fatura',
      done: true
    },
    {
      _id: 1,
      description: 'Pagar Amigos',
      done: false
    },
    {
      _id: 1,
      description: 'Pagar CONTAS',
      done: true
    }]
  })
})

export default rootReducer
