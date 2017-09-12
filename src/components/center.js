import React, {Component} from 'react'
import {StyleSheet, ScrollView, View, Text, Button, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Header from './header'
import Footer from './footer'

import commonStyles from '../common/commonStyles'

class Center extends Component {
  render() {
    return (
      <View style={commonStyles.container} >
        <View style={commonStyles.lcontent}>    
          <ImageBackground style={styles.centerInfoWrapper} source={require('../../assets/images/centerBg.png')}>
            <TouchableWithoutFeedback>
              <Image source={require('../../assets/images/avtor.png')} style={styles.avtor}></Image>
            </TouchableWithoutFeedback>
            <Text style={[commonStyles.noBgText, styles.name]}>Sissi</Text>
          </ImageBackground>
          <ScrollView style={styles.centerOperationWrapper}>
            <View style={styles.btnWrapper}>
              <TouchableOpacity style={styles.lBtn} activeOpacity={0.8} onPress={this.props.gotoLogin}>
                <Image source={require('../../assets/images/btnBg.png')} style={styles.bgImage}></Image>
                <Text style={styles.lBtnText}>退出登录</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <Footer activeRoute='Center' />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  gotoLogin: () => {
    dispatch(NavigationActions.navigate({routeName: 'Login'}))
  }
})

export default connect(null, mapDispatchToProps)(Center)

const styles = StyleSheet.create({
  centerInfoWrapper: {
    height: 175,
    alignItems: 'center'
  },
  centerOperationWrapper: {
    flex: 1,
    paddingTop: 15
  },
  avtor: {
    width: 70,
    height: 70,
    marginTop: 44,
    marginBottom: 10
  },
  name: {
    fontSize: 15,
    color: '#fff'
  },
  btnWrapper: {
    paddingHorizontal: 10,
    marginTop: 15
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: 45,
    zIndex: -1,
    borderRadius: 3
  },
  lBtn: {
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lBtnText: {
    color: '#fff',
    fontSize: 17,
    backgroundColor: 'transparent'
  }
})