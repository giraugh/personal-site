import React, { Component } from 'react'
import Title from './Title'
import '../styles/Content'

export default class Content extends Component {
  render () {
    return (
      <div className='content'>
        <Title />
      </div>
    )
  }
}
