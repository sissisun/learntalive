import React, {Component} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import { NavigationActions } from 'react-navigation'
import BackBtn from './backBtn'

import commonStyles from '../common/commonStyles'

export default class Header extends Component {
  render() {
    return(
      <View style={[commonStyles.lheader, commonStyles.boxShadow]}>
        {this.props.needBack && <BackBtn style={styles.backsBtn} returnRouteName={this.props.returnRouteName}/>}
        <View style={styles.logoWrapper}>
          <Text>我是logo</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 117,
    height: 24,
  },
  backsBtn: {
   
  }
})