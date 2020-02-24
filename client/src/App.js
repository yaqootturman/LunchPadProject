import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './Components/HomePage'
import AddCustomer from "./Components/AddCustomer"

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/newCustomer" component={AddCustomer} />
      </Switch>
    </React.Fragment>
  </Router>
)

export default App