import React, { Component } from 'react'
import Title from './Title'
import Bio from './Bio'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Employment from './Employment'

import '../styles/Content'

export default class Content extends Component {
  render () {
    return (
      <div className='content'>
        <Title />
        <Bio />
        <Projects />
        <Skills />
        <Education />
        <Employment />
      </div>
    )
  }
}
