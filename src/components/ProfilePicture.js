import React, { Component } from 'react'
import '../styles/ProfilePicture.css'

const img = `http://images1.wikia.nocookie.net/__cb20130418050039/jjba/images/3/34/Gappy.jpg`

export default class ProfilePicture extends Component {
  render () {
    return (
      <div className='profile-picture'>
        <span style={{backgroundImage: `url(${img})`}} />
      </div>
    )
  }
}
