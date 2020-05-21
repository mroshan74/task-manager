import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import taskReducer from './reducers/taskReducer'
import loginReducer from './reducers/loginReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        tasks: taskReducer,
        login: loginReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore
