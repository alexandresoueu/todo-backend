import React from 'react'
import { Router, Route, Redirect, hasHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

const Routes = props => {
  return (
  <Router history={hasHistory}>
    <Route path='/all' component={Todo} />
    <Route path='/about' component={About} />
    <Redirect from='*' to='/all' />
  </Router>
  )
}

export default Routes
