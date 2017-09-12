import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import AppNavigator from './routes'

const AppWithState = ({dispatch, nav}) => {
  return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
}

const mapStatesToProps = (state) => ({
  nav: state.nav
})

export default connect(mapStatesToProps)(AppWithState)