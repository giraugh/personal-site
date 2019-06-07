import React, { Component } from 'react'

import '../../styles/content/TitleSocials.css'

export default class TitleSocials extends Component {
  render () {
    return (
      <div className='title-socials'>
        <div className='title-socials-container'>
          <a href='http://github.com/retroverse' className='title-social'>
            <span className='fab fa-github' />
          </a>
          <a href='http://twitter.com/giraughing' className='title-social'>
            <span className='fab fa-twitter' />
          </a>
        </div>
      </div>
    )
  }
}
