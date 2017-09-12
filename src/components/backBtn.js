import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import { NavigationActions } from 'react-navigation'

import commonStyles from '../common/commonStyles'

class backBtn extends Component {
  render() {
    return(
      <TouchableOpacity style={styles.backBtnWrapper} activeOpacity={0.9} onPress={this.props.gotoPageByName}>
        <Image source={require('../../assets/images/arrowLeft.png')} style={styles.backBtnIcon}></Image>
        <Text style={styles.backText}>返回</Text>
      </TouchableOpacity>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    gotoPageByName: () => {
      dispatch(NavigationActions.navigate({routeName: ownProps.returnRouteName}))
    }
  }
  
}

export default connect(null, mapDispatchToProps)(backBtn)

const styles = StyleSheet.create({
  backBtnWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 52,
    left: 15,
    zIndex: 5
  },
  backBtnIcon: {
    width: 10,
    height: 18,
    marginRight: 5
  },
  backText: {
    fontSize: 15,
    color: '#333'
  }
})