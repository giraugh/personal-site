import React, { Component } from 'react'

import '../styles/Headings.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default class Headings extends Component {
  render () {
    return (
      <div className='headings'>
        <div className='headings-container'>
          <a href='http://github.com/retroverse' className='heading enabled'>
            <span className='fab fa-github' />
          </a>
          <a href='http://twitter.com/giraughing' className='heading enabled'>
            <span className='fab fa-twitter' />
          </a>
        </div>
      </div>
    )
  }
}
