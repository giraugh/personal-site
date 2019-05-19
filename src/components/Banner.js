import React, { Component } from 'react'
import '../styles/Banner'
import img from '../../public/img/banner/3.jpg' // #TODO

console.log(img)

export default class Banner extends Component {
  render () {
    return (
      <div className='banner' style={{backgroundImage: `url(${img})`}} />
    )
  }
}
