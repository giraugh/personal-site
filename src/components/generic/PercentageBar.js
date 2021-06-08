import React, { Component } from 'react'

import '../../styles/generic/PercentageBar'

// accepts props, {percentage, label}

export default class PercentageBar extends Component {
  render () {
    const p = Math.floor(this.props.percentage * 100)
    const cols = `${p}fr ${100 - p}fr`
    return (
      <div {...this.props} className={`percentage-bar ${this.props.className}`} style={{gridTemplateColumns: cols}}>
        <div className='percentage-bar-complete percentage-bar-segment'>
          <span className='percentage-bar-label'> {this.props.label} </span>
        </div>
        <div className='percentage-bar-remaining percentage-bar-segment' />
      </div>
    )
  }
}
