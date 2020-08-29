import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
 
import IconButton from '../template/IconButton'
import { markAsDone, markAsPending, removeItemList } from '../todo/TodoActions'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []

    return (
      list.map(item => (
        <tr key={item._id}>
          <td className={item.done ? 'markedAsDone' : ''}>{item.description}</td>
          <td>
            <IconButton style='success' icon='check' hide={item.done} onClick={() => props.markAsDone(item)} />
            <IconButton style='warning' icon='undo' hide={!item.done} onClick={() => props.markAsPending(item)} />
            <IconButton style='danger' icon='trash-o' hide={!item.done} onClick={() => props.removeItemList(item)} />
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

const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, removeItemList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
