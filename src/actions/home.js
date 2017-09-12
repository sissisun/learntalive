import React, {Component} from 'react'
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from '../actionTypes/home'

export const fetchCourseStarted = () => ({
  type: FETCH_STARTED
})

export const fetchCourseSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result: result
})

export const fetchCourseList = () => {
  return (dispatch) => {
    dispatch(fetchCourseStarted())
    let data = [{
      name: '七年级数学同步提高',
      grade: 7,
      version: '沪教版',
      teacher: 'XXX',
      isAlive: true
    },{
      name: '七年级数学同步提高',
      grade: 7,
      version: '沪教版',
      teacher: 'XXX',
      isAlive: false
    },{
      name: '七年级数学同步提高',
      grade: 7,
      version: '沪教版',
      teacher: 'XXX',
      isAlive: false
    }]
    dispatch(fetchCourseSuccess(data))
  }
  
}