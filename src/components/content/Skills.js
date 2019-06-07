import React, {Component} from 'react'
import Subtitle from '../generic/Subtitle'

import '../../styles/content/Skills'

export default class Skills extends Component {
  render () {
    return (
      <div className='skills'>
        <Subtitle title='Skills' />
        <div className='skills-description'>
          <p>
            { this.props.skillsDescription }
          </p>
        </div>
        <div className='skill-list'>
          {
            this.props.skills.map(skill => (
              <div className='skill' key={skill.name}>
                <div className='skill-name'> {skill.name} </div>
                <div className='skill-ability-label'>
                  <span>{skill.abilityLabel}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
