import React, { Component } from 'react'

export default class Bio extends Component {
  render () {
    return (
      <div className='bio'>
        {
          `lorem ipsum `.repeat(32) // maybe just tags w/ • seperators?
        }
      </div>
    )
  }
}
