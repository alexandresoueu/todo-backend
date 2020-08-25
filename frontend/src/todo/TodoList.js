import React from 'react'
import { connect } from 'react-redux'

import IconButton from '../template/IconButton'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []

    return (
      list.map(item => (
        <tr key={item._id}>
          <td className={item.done ? 'markedAsDone' : ''}>{item.description}</td>
          <td>
            <IconButton style='success' icon='check' hide={item.done} onClick={() => props.handleMarkAsDone(item)} />
            <IconButton style='warning' icon='undo' hide={!item.done} onClick={() => props.handleMarkAsPending(item)} />
            <IconButton style='danger' icon='trash-o' hide={!item.done} onClick={() => props.handleRemove(item)} />
          </td>
        </tr>
      ))
    )
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Description</th>
          <th className='tableActions'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => (
  {
    list: state.todo.list
  }
)

export default connect(mapStateToProps)(TodoList)
