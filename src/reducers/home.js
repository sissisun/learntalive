import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from '../actionTypes/home'

export default (state = {status: 'loading'}, action) => {
  switch(action.type) {
    case FETCH_STARTED: 
      return {status: 'loading'}
      break
    case FETCH_SUCCESS: 
      return {...state, status: 'success', course: action.result}
      break
    case FETCH_FAILURE: 
      return {status: 'failured'}
      break
    default: 
      return state
      break
  }
}