import React, {Component} from 'react'
import Subtitle from '../generic/Subtitle'
import PercentageBar from '../generic/PercentageBar'

import '../../styles/content/Skills'

export default class Skills extends Component {
  render () {
    return (
      <div className='skills'>
        <Subtitle title='Skills' />
        <div className='skill-list'>
          {
            this.props.skills.map(skill => (
              <div className='skill' key={skill.name}>
                <PercentageBar className='skill-ability' percentage={skill.ability} label={skill.name} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
