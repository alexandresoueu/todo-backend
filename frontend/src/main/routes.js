import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

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
