import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import { NavigationActions } from 'react-navigation'

import commonStyles from '../common/commonStyles'

class Login extends Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <View style={styles.loginContentItem}>
          <View style={styles.loginImageWrapper}>
            <Text>我是logo</Text>
          </View>
          <View style={styles.navTipWrapper}>
            <Text style={[commonStyles.noBgText, styles.loginTipText]}>选择登录方式</Text>
          </View>
          <View style={styles.wayOptions}>
            <TouchableOpacity onPress={this.props.gotoHome}>
              <Image style={styles.wayIcon} source={require('../../assets/images/wechat.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.gotoHome}>
              <Image style={styles.wayIcon} source={require('../../assets/images/qq.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  gotoHome: () => {
    dispatch(NavigationActions.navigate({routeName: 'Home'}))
  }
})

export default connect(null, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContentItem: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: -20
  },
  loginImageWrapper: {
    alignItems: 'center',
    marginBottom: 108
  },
  loginImage: {
    width: 218,
    height: 45
  },
  navTipWrapper: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginTipText: {
    width: 115,
    color: '#666',
    fontSize: 12,
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  wayOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 38,
    marginBottom: 35
  },
  wayIcon: {
    width: 60,
    height: 60
  }
})