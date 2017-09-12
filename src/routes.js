import React from 'react'
import {Button, ScrollView} from 'react-native'
import {StackNavigator, TabNavigator} from 'react-navigation'

import Home from './components/home'
import Center from './components/center'
import Login from './components/login'


const TabNav = TabNavigator({
  Home: {
    screen: Home,
    path: '/',
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarVisible: false
    }
  },
  Center: {
    screen: Center,
    path: '/center',
    navigationOptions: {
      tabBarLabel: '个人中心',
      tabBarVisible: false
    }
  }
}, {
  initialRouteName: 'Home'
})

const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav
  },   
  Login: {
    screen: Login,
    navigationOptions: {
      title: '登录'
    }
  }
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
})

export default StacksOverTabs