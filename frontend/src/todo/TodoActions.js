import axios from 'axios'

const URL = 'http://localhost:3030/api/todos'

const changeDescription = event => (
  {
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
  }
)

const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)

  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}

const addTask = description => {

  return dispatch => {
    axios.post(URL, { description })
      .then(response => dispatch(clear()))
      .then(response => dispatch(search()))
  }
}

const markAsDone = item => {
  return dispatch => {
    axios.put(`${URL}/${item._id}`, { ...item, done: true })
      .then(response => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: response.data }))
      .then(response => dispatch(search()))
  }
}

const markAsPending = item => {
  return dispatch => {
    axios.put(`${URL}/${item._id}`, { ...item, done: false })
      .then(response => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: response.data }))
      .then(response => dispatch(search()))
  }
}

const removeItemList = item => {
  return dispatch => {
    axios.delete(`${URL}/${item._id}`)
      .then(response => dispatch(search()))
  }
}

const clear = () => {
  return { type: 'TODO_CLEAR' }
}

export {
  changeDescription,
  search,
  addTask,
  markAsDone,
  markAsPending,
  removeItemList,
  clear,
}