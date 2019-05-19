import React, { Component } from 'react'
import '../../styles/Subtitle'

export default class Subtitle extends Component {
  render () {
    return (
      <h1 className='subtitle'>
        {this.props.title}
      </h1>
    )
  }
}
