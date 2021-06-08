import React, {Component} from 'react'
import Subtitle from '../generic/Subtitle'

import '../../styles/content/Employment'

export default class Employment extends Component {
  render () {
    return (
      <div className='employment'>
        <Subtitle title='Employment' />
        <div className='employment-list'>
          {
            this.props.employment.map(employment => (
              <div className='employment-item' key={employment.name + ':' + employment.startYear}>
                <div className='employment-first-half'>
                  <div className='employment-first-line'>
                    <h2 className='employment-type'> {employment.name} </h2>
                    <span className='employment-years'>
                      {`${employment.startYear} - ${employment.endYear}`}
                    </span>
                  </div>
                </div>
                <span className='employment-notes'> <span>{employment.notes.join(' • ')}</span> </span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
