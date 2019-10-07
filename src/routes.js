import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login/index'
import Dashboard from './pages/Dashboard/index'
import New from './pages/New/index'
import React from 'react'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/new' exact component={New} />
      </Switch>
    </BrowserRouter>
  );
}