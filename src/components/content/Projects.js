import React, {Component} from 'react'
import Subtitle from '../generic/Subtitle'

import '../../styles/content/Projects'

const testData = [
  {
    title: 'Hex-Redux',
    description: 'An online tool for writing JS bots to play games of HEX.',
    linkURL: 'http://ewanb.me/hex-redux',
    imageURLS: ['http://ewanb.me/site/style/img/hex-redux.gif']
  },
  {
    title: 'Another Expert Telegram',
    description: 'A match-several mobile game on the play store. Created using GameMaker: Studio.',
    linkURL: 'https://play.google.com/store/apps/details?id=com.tdos.anothertelegram',
    imageURLS: ['http://ewanb.me/site/style/img/knight.gif']
  }
]

export default class Projects extends Component {
  render () {
    return (
      <div className='projects'>
        <Subtitle title='Projects' />
        <div className='project-list'>
          {
            testData.map(project => (
              <div className='project' key={project.title}>
                <div className='project-image' style={{backgroundImage: `url(${project.imageURLS[0]})`}} />
                <a className='project-link' href={project.linkURL}>{project.title}</a>
                <span className='project-description'>{project.description}</span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
