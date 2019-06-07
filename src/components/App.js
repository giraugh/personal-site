import React, { Component } from 'react'
import Banner from './Banner'
import ProfilePicture from './ProfilePicture'
import Content from './Content'
import Footer from './Footer'
import Headings from './Headings'
import profileData from '../config/profileData'
import styleData from '../config/styleData'
import '../styles/App.css'

export default class App extends Component {
  render () {
    return (
      <div className='app'>
        <Banner bannerImageURL={styleData.bannerImageURL} />
        <ProfilePicture profilePictureImageURL={styleData.profilePictureImageURL} />
        <Headings socialIcons={styleData.socialIcons} />
        <Content profileData={profileData} />
        <Footer footerText={profileData.footerText} />
      </div>
    )
  }
}
