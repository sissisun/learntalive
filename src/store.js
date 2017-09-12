import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk'

import loginReducer from './reducers/login'
import centerReducer from './reducers/center'
import homeReducer from './reducers/home'
import navReducer from './reducers/nav'

const reducer = combineReducers({
  login: loginReducer,
  center: centerReducer,
  home: homeReducer,
  nav: navReducer
})

const middlewares = [thunkMiddleware];

export default createStore(reducer, {}, applyMiddleware(...middlewares))
