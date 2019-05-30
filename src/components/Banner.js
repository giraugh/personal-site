import React, { Component } from 'react'
import '../styles/Banner'

export default class Banner extends Component {
  render () {
    return (
      <div className='banner' style={{backgroundImage: `url(${this.props.bannerImageURL})`}} />
    )
  }
}
