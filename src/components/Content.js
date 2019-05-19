import React, { Component } from 'react'
import Title from './generic/Title'
import Bio from './content/Bio'
import Projects from './content/Projects'
import Skills from './content/Skills'
import Education from './content/Education'
import Employment from './content/Employment'

import '../styles/Content'

export default class Content extends Component {
  render () {
    return (
      <div className='content'>
        <Title title='First Breakey' />
        <Bio />
        <Projects />
        <Skills />
        <Education />
        <Employment />
      </div>
    )
  }
}
