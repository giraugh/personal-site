import React, { Component } from 'react'
import '../styles/ProfilePicture.css'

export default class ProfilePicture extends Component {
  render () {
    return (
      <div className='profile-picture'>
        <span style={{backgroundImage: `url(${this.props.profilePictureImageURL})`}} />
      </div>
    )
  }
}
