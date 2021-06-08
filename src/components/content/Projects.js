import React, {Component} from 'react'
import Subtitle from '../generic/Subtitle'

import '../../styles/content/Projects'

export default class Projects extends Component {
  render () {
    return (
      <div className='projects'>
        <Subtitle title='Projects' />
        <div className='project-list'>
          {
            this.props.projects.map(project => (
              <div className={`project ${project.linkURL !== '' && 'linked'}`} key={project.title}>
                <div className='project-image' style={{backgroundImage: `url(${project.imageURLS[0]})`}} />
                <a className='project-title'>{project.title}</a>
                <span className='project-description'>{project.description}</span>
                {
                  project.linkURL !== '' && (
                    <a className='project-link' href={project.linkURL}>
                      <span className='link-spanner'> {/**/} </span>
                    </a>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
