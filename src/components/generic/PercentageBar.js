import React, { Component } from 'react'

import '../../styles/generic/PercentageBar'

// accepts props, {percentage, label}

const maxStars = 5

export default class PercentageBar extends Component {
  render () {
    const onStars = Math.floor(maxStars * this.props.percentage)
    const offStars = maxStars - onStars
    return (
      <div {...this.props} className={`percentage-bar ${this.props.className}`}>
        <div className='percentage-bar-content'>
          <span className='percentage-bar-label'> {this.props.label} </span>
          <span className='stars-container'>
            <span className='stars enabled'>{ '★'.repeat(onStars) }</span>
            <span className='stars disabled'>{ '★'.repeat(offStars) }</span>
          </span>
        </div>
      </div>
    )
  }
}
