import React, { Component } from 'react'

import '../../styles/content/Bio'

export default class Bio extends Component {
  render () {
    return (
      <div className='bio'>
        {
          this.props.bio
        }
      </div>
    )
  }
}
