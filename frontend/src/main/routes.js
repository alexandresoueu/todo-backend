import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/Todo'
import About from '../about/About'

const Routes = props => {
  return (
    <Router history={hashHistory}>
      <Route path='/all' component={Todo} />
      <Route path='/about' component={About} />
      <Redirect from='*' to='/all' />
    </Router>
  )
}

export default Routes
