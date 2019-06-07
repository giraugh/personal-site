import React, { Component } from 'react'

import '../styles/Headings.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default class Headings extends Component {
  render () {
    return (
      <div className='headings'>
        <div className='headings-side left'>
          <a className='heading disabled' />
          {/* <a href='http://twitter.com/giraughing' className='heading enabled'> <span>Twitter</span> </a> */}
          <a href='http://twitter.com/giraughing' className='heading enabled'>
            <span className='fab fa-twitter' />
          </a>
        </div>
        <div className='headings-side right'>
          <a href='http://github.com/retroverse' className='heading enabled'>
            <span className='fab fa-github' />
          </a>
          <a className='heading disabled' />
        </div>
      </div>
    )
  }
}
