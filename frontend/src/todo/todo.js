import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = { description: '', list: [] }

    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleAdd = this.onHandleAdd.bind(this)
  }

  onHandleAdd () {
    console.log(this.state.description)
  }

  onHandleChange (event) {
    this.setState({ ...this.state, description: event.target.value })
  }

  render () {
    return (
      <div>
        <PageHeader name='Tasks' small='Register' />
        <TodoForm description={this.state.description} handleChange={this.onHandleChange} handleAdd={this.onHandleAdd} />
        <TodoList />
      </div>
    )
  }
}

export default Todo
