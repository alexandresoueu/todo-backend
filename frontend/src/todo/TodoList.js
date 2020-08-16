import React from 'react'
import IconButton from '../template/IconButton'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []

    return (
      list.map(item => (
        <tr key={item._id}>
          <td className={item.done ? 'markedAsDone' : ''}>{item._id}</td>
          <td>{item.description}</td>
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
          <th>ID</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

export default TodoList
