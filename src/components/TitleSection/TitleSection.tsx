import React, { useRef, useLayoutEffect, useState } from 'react'

import { theme } from '../../config/theme'
import {
  Container,
  TitleImage,
  Title,
  TitleImageWrapper,
  /*ColourBlob,*/
  ContentPair,
  TitleSVG,
} from './titleSectionStyle'

const GiraffeImage = React.forwardRef((props, ref) => (
  <TitleImageWrapper>
    <TitleImage
      alt="A giraffe with cool sunglasses"
      ref={ref}
      src={`${process.env.PUBLIC_URL}/giraffe.svg`}
    />
  </TitleImageWrapper>
))

const ColourBlobPath = ({ toPos }) => {
  const fromPos = { x: 0, y: 0 }
  const toOffset = { x: -15, y: 0 }
  return (
    <TitleSVG>
      <path
        d={`M${fromPos.x} ${fromPos.y} L${toPos.x + toOffset.x} ${toPos.y + toOffset.y}`}
        strokeWidth={350}
        strokeLinecap={'round'}
        stroke={theme.secondaryBlue}
      />
    </TitleSVG>
  )
}

const TitleSection: React.FC = () => {
  const [titlePos, setTitlePos] = useState()
  const titleRef = useRef(null)

  const updatePosition = () => {
    if (titleRef.current) {
      const titleRect = titleRef.current.getBoundingClientRect()
      setTitlePos({
        x: titleRect.left + titleRect.width / 2,
        y: titleRect.top + titleRect.height / 2,
      })
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', updatePosition)
    updatePosition()
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  return (
    <Container>
      {titlePos && <ColourBlobPath toPos={titlePos} />}
      <ContentPair>
        <GiraffeImage />
        <Title ref={titleRef}>
          Ewan <br /> Breakey
        </Title>
      </ContentPair>
    </Container>
  )
}

export default TitleSection
