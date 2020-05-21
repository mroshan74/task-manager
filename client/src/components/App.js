import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './general/App.css'
import Home from './general/Home';
import Login from './register-login/Login';
import Nav from './general/Nav';
import Register from './register-login/Register';
import TaskManager from './taskbox/TaskManager'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users/login' component={Login} />
          <Route path='/users/register' component={Register} />
          <Route path='/users/taskmanager' component={TaskManager} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
