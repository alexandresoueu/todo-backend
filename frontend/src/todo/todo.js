import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
  return (
    <div>
      <PageHeader name='Tasks' small='Register' />
      <TodoForm />
      <TodoList />
    </div>
  )
}


export default Todo
