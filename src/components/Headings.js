import React, { Component } from 'react'

import '../styles/Headings.css'

export default class Headings extends Component {
  render () {
    const socialIcons = this.props.socialIcons
    const githubIconURL = socialIcons.find(i => i.name === 'github').url
    const twitterIconURL = socialIcons.find(i => i.name === 'twitter').url
    return (
      <div className='headings'>
        <div className='headings-side left'>
          <a className='heading disabled' />
          {/* <a href='http://twitter.com/giraughing' className='heading enabled'> <span>Twitter</span> </a> */}
          <a href='http://twitter.com/giraughing' className='heading enabled'>
            <span>
              <img className='heading-icon' src={twitterIconURL} />
            </span>
          </a>
        </div>
        <div className='headings-side right'>
          <a href='http://github.com/retroverse' className='heading enabled'>
            <span>
              <img className='heading-icon' src={githubIconURL} />
            </span>
          </a>
          <a className='heading disabled' />
        </div>
      </div>
    )
  }
}
