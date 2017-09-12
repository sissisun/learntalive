import React, {Component} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

export default class Course extends Component {
  render() {
    let {course} = this.props
    return (
      <View style={styles.courseWrapper}>
      <Image style={styles.peopleImage} source={require('../../assets/images/centerBg.png')}></Image>
      <View style={styles.mask}></View>
      <View style={styles.textWrapper}>
        {course.isAlive && <View style={styles.aliveTipText}>
          <View style={styles.circle}></View>
          <Text style={styles.text}>正在直播</Text>
        </View>}
        
        <Text style={[styles.text, styles.courseTitle]}>七年级数学同步提高</Text>
        <Text style={styles.text}>七年级 沪教版</Text>
        <Text style={styles.text}>XXX老师</Text>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  courseWrapper: {
    height: 150,
    marginBottom: 10,
    borderRadius: 3,
    display: 'flex'
  },
  peopleImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -2
  },
  mask: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 3,
    zIndex: -1
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  text: {
    fontSize: 13,
    backgroundColor: 'transparent',
    color: '#fff',
    marginVertical: 2,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  aliveTipText: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: -20,
    marginBottom: 5
  },
  circle: {
    width: 8,
    height: 8,
    backgroundColor: '#A2E65B',
    borderRadius: 4,
    marginRight: 5
  }
})