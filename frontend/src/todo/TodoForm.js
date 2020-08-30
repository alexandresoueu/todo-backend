import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { addTask, changeDescription, search, clear } from './TodoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(event) {
    const { addTask, search, description, clear } = this.props

    if (event.key === 'Enter') {
      event.shiftKey ? search() : addTask(description)
    } else if (event.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { addTask, search, description } = this.props

    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input
            id='description' className='form-control'
            placeholder='Add a task'
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.description}
          />
        </Grid>

        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' onClick={() => addTask(description)} />
          <IconButton style='info' icon='search' onClick={() => search()} />
          <IconButton style='default' icon='close' onClick={this.props.clear} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    description: state.todo.description
  }
)

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTask, changeDescription, search, clear }, dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
