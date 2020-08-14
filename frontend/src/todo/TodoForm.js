import React from 'react'

const TodoForm = props => {
  return (
    <div role='form' className='todoForm'>
      <div className='col-xs-12 col-sm-9 col-md-10'>
        <input id='description' className='form-control' placeholder='Add a task' />
      </div>

      <div className='col-xs-12 col-sm-3 col-md-2'>
        <button className='btn btn-primary'>
          <i className='fa fa-plus'></i>
        </button>
      </div>
    </div>
  )
}

export default TodoForm
