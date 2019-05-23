import React, { Component } from 'react'
import Title from './generic/Title'
import Bio from './content/Bio'
import Projects from './content/Projects'
import Skills from './content/Skills'
import Education from './content/Education'
import Employment from './content/Employment'
import profileData from '../config/profileData'

import '../styles/Content'

export default class Content extends Component {
  render () {
    return (
      <div className='content'>
        <Title title={profileData.name} />
        <Bio bio={profileData.bio} />
        <Projects />
        <Skills skills={profileData.skills} />
        <Education education={profileData.education} />
        <Employment employment={profileData.employment} />
      </div>
    )
  }
}
