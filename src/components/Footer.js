import React, { Component } from 'react'

import '../styles/Footer'

const toLink = (t) => {
  switch (t) {
    case 'github':
      return <a href='http://github.com/retroverse'>{t}</a>
    case 'twitter':
      return <a href='http://twitter.com/giraughing'>{t}</a>
    case 'itch.io':
      return <a href='https://tdos.itch.io'>{t}</a>
    default:
      return <a>{t}</a>
  }
}

const withLinks = (text) => {
  const els = text.split('~')
  return els.map((t, i) => {
    return (
      <span className='footer-element' key={t}>
        { toLink(t) }
        { (i !== els.length - 1) && <a className='footer-spacer'> · </a> }
      </span>
    )
  })
}

export default class Footer extends Component {
  render () {
    return (
      <div className='footer'> {withLinks(this.props.footerText)} </div>
    )
  }
}
