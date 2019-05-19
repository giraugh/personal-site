import React, {Component} from 'react'
import Subtitle from '../generic/Subtitle'

import '../../styles/Projects'

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
            testData.map(p => (
              <div class='project' key={p.title}>
                <div className='project-image' style={{backgroundImage: `url(${p.imageURLS[0]})`}} />
                <a className='project-link' href={p.linkURL}>{p.title}</a>
                <span className='project-description'>{p.description}</span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
