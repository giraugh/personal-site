import React, {Component} from 'react'
import Subtitle from '../generic/Subtitle'

import '../../styles/content/Education'

export default class Education extends Component {
  render () {
    return (
      <div className='education'>
        <Subtitle title='Education' />
        <div className='education-list'>
          {
            this.props.education.map(education => (
              <div className='education-item' key={education.type}>
                <div className='education-first-half'>
                  <div className='education-first-line'>
                    <h2 className='education-type'> {education.type} </h2>
                    <span className='education-years'>
                      {`${education.startYear} - ${education.endYear}`}
                    </span>
                  </div>
                  <span className='education-location'> {education.location} </span>
                </div>
                <span className='education-notes'> <span>{education.notes.join(' • ')}</span> </span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
