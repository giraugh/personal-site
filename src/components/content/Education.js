import React, {Component} from 'react'
import Subtitle from '../generic/Subtitle'

import '../../styles/content/Education'

const testData = [
  {
    type: 'High School',
    notes: ['Academic Captain', 'G-Force IT Award'],
    location: 'Belmont High School',
    startYear: 2013,
    endYear: 2019
  }
]

export default class Education extends Component {
  render () {
    return (
      <div className='education'>
        <Subtitle title='Education' />
        <div className='education-list'>
          {
            testData.map(education => (
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
