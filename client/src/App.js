import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './Components/HomePage'

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </React.Fragment>
  </Router>
)

export default App