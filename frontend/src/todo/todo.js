import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3030/api/todos'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = { description: '', list: [] }

    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleAdd = this.onHandleAdd.bind(this)

    this.onHandleRemove = this.onHandleRemove.bind(this)
    this.onHandleMarkAsDone = this.onHandleMarkAsDone.bind(this)
    this.onHandleMarkAsPending = this.onHandleMarkAsPending.bind(this)

    this.onRefresh()
  }

  onHandleAdd () {
    const description = this.state.description

    axios.post(URL, { description })
      .then(resp => this.onRefresh())
  }

  onHandleRemove (item) {
    axios.delete(`${URL}/${item._id}`)
      .then(resp => this.onRefresh())
  }

  onHandleChange (event) {
    this.setState({ ...this.state, description: event.target.value })
  }

  onHandleMarkAsDone (item) {
    axios.put(`${URL}/${item._id}`, { ...item, done: true })
      .then(resp => this.onRefresh())
  }

  onHandleMarkAsPending (item) {
    axios.put(`${URL}/${item._id}`, { ...item, done: false })
      .then(resp => this.onRefresh())
  }

  onRefresh () {
    axios.get(`${URL}?sort=-createdAt`)
      .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
  }

  render () {
    return (
      <div>
        <PageHeader name='Tasks' small='Register' />
        <TodoForm description={this.state.description} handleChange={this.onHandleChange} handleAdd={this.onHandleAdd} />
        <TodoList
          list={this.state.list}
          handleRemove={this.onHandleRemove}
          handleMarkAsDone={this.onHandleMarkAsDone}
          handleMarkAsPending={this.onHandleMarkAsPending}
        />
      </div>
    )
  }
}

export default Todo
