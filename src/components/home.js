import React, {Component} from 'react'
import {StyleSheet, ListView, View, Text, Button, Image, ImageBackground} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import * as homeActions from '../actions/home'

import Header from './header'
import Footer from './footer'
import Course from './course'

import commonStyles from '../common/commonStyles'

class Home extends Component {
  constructor() {
    super(...arguments)

  }
  componentDidMount() {
    this.props.getCourseList()
  }
  shouldComponentUpdate(nextProps) {
    if(this.props.status === nextProps.status) {
      return false
    }

    return true
  }
  getCourseList() {
    let status = this.props.status
    let course = this.props.course

    switch(status) {
      case 'loading': 
        return <Text>loading</Text>
        break;
      case 'success': {
        this.courseSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.course)
        return course && course.length ? 
          <ListView style={[commonStyles.lcontent, styles.listContainer]} removeClippedSubviews={false} dataSource={this.courseSource} renderRow={(rowData => <Course course={rowData} />)}></ListView>
        : <View style={styles.noDataWrapper}>
          <Image source={require('../../assets/images/noData.png')} style={{width: 132, height: 143}} />
          <Text style={styles.noDataText}>暂无数据～</Text>
        </View>
        break;
      }
      case 'failure': 
        return <Text>加载失败</Text>
        break;
      default:
        break;
    }
  }
  render() {
    console.log('render')
    return (
      <View style={commonStyles.container} >
        <Header />
        {this.getCourseList()}
        <Footer activeRoute='Home' />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  let home = state.home

  return {
    status: home.status,
    course: home.course
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCourseList: () => {
    dispatch(homeActions.fetchCourseList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 5
  },
  noDataWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -37
  },
  noDataText: {
    fontSize: 12,
    color: '#FF9316',
    marginTop: 15
  }
})