import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { startGetTasks } from './redux/actions/tasksAction';


const store = configureStore()

store.dispatch(startGetTasks())

store.subscribe(()=>{
  console.log(store.getState())
})

const jsx = (
  <Provider store = {store}>
    <App/>
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))

