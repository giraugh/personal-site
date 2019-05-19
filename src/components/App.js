import React, { Component } from 'react'
import Banner from './Banner'
import ProfilePicture from './ProfilePicture'
import Content from './Content'
import '../styles/App.css'

export default class App extends Component {
  render () {
    return (
      <div className='app'>
        <Banner />
        <ProfilePicture />
        <Content />
      </div>
    )
  }
}
