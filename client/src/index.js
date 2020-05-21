import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { startGetTasks } from './redux/actions/tasksAction';
import { startAccount } from './redux/actions/loginsAction';


const store = configureStore()

if(localStorage.getItem('token')){
  store.dispatch(startGetTasks())
  store.dispatch(startAccount())
}

store.subscribe(()=>{
  console.log(store.getState())
})

const jsx = (
  <Provider store = {store}>
    <App/>
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))

