import React, {Component} from 'react'
import Subtitle from '../generic/Subtitle'
import PercentageBar from '../generic/PercentageBar'

import '../../styles/content/Skills'

const testData = [
  {
    name: 'Javascript',
    ability: 0.9
  },
  {
    name: 'Functional JS',
    ability: 0.9
  },
  {
    name: 'React',
    ability: 0.7
  },
  {
    name: 'ExpressJS',
    ability: 0.5
  },
  {
    name: 'Lua',
    ability: 0.6
  }
]

export default class Skills extends Component {
  render () {
    return (
      <div className='skills'>
        <Subtitle title='Skills' />
        <div className='skill-list'>
          {
            testData.map(skill => (
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
