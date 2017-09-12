import AppNavigator from '../routes'

export default (state, action) => {
  let nextState
  switch(action.type) {
    default:
      nextState = Object.assign(AppNavigator.router.getStateForAction(action, state), {activeRoute: action.routeName || (state && state.activeRoute)});
      break
  }
  return nextState || state;
}