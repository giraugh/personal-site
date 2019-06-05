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
    const pd = this.props.profileData
    return (
      <div className='content'>
        <Title title={pd.name} />
        <Bio bio={pd.bio} />
        <Projects projects={pd.projects} />
        <Skills skills={pd.skills} skillsDescription={pd.skillsDescription} />
        <Education education={pd.education} />
        <Employment employment={pd.employment} />
      </div>
    )
  }
}
