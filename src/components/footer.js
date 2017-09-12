import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import {StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, Image, Text, Modal, TextInput} from 'react-native'

import commonStyles from '../common/commonStyles'

const homeRouteName = 'Home'
const centerRouteName = 'Center'

class Footer extends Component {
  shouldComponentUpdate(nextProps) {
    if(this.props.text !== nextProps.text) {
      return true
    }
    if(this.props.modalVisible !== nextProps.modalVisible) {
      return true
    }
    if(this.props.activeRoute === nextProps.activeRoute) {
      return false
    }

    return true
  }

  render() {
    let currentRoute = this.props.activeRoute
    return(
      <View style={[styles.lfooter, commonStyles.boxShadowTop]}>
        <View style={styles.footerWrapper}>
          <TouchableOpacity activeOpacity={0.9} style={styles.iconWrapper} onPress={this.props.gotoHome.bind(this, currentRoute)}>
            <View>
              <Image source={currentRoute === homeRouteName ? require('../../assets/images/homeIconActive.png') : require('../../assets/images/homeIcon.png')} style={styles.icon}></Image>
              <Text style={[styles.iconText, currentRoute === homeRouteName ? styles.iconTextActive : '']}>首页</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.iconWrapper}>
            <View >
              <Image source={require('../../assets/images/controlIcon.png')} style={styles.controlIcon}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.iconWrapper} onPress={this.props.gotoCenter.bind(this, currentRoute)}>
            <View>
            <Image source={currentRoute === centerRouteName ? require('../../assets/images/centerIconActive.png') : require('../../assets/images/centerIcon.png')} style={[styles.icon, styles.myIcon]}></Image>
            <Text style={[styles.iconText, currentRoute === centerRouteName ? styles.iconTextActive : '']}>我的</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  gotoHome: (currentRoute) => {
    currentRoute !== homeRouteName && dispatch(NavigationActions.navigate({routeName: homeRouteName}))
  },
  gotoCenter: (currentRoute) => {
    currentRoute !== centerRouteName && dispatch(NavigationActions.navigate({routeName: centerRouteName}))
  }
})

export default connect(null, mapDispatchToProps)(Footer)

const styles = StyleSheet.create({
  lfooter: {
    height: 49,
    backgroundColor: '#F7F7F7'
  },
  footerWrapper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 22,
    height: 22,
    marginBottom: 5
  },
  myIcon: {
    width: 19,
    height: 22
  },
  iconText: {
    fontSize: 10,
    color: '#666'
  },
  iconTextActive: {
    color: '#FF9316'
  },
  controlIcon: {
    width: 55,
    height: 55,
    position: 'relative',
    top: -12
  }
})