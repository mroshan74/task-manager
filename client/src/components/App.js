import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import TaskManager from './TaskManager';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Task Manager</h1>
        <TaskManager />
      </div>
    </BrowserRouter>
  )
}

export default App;
