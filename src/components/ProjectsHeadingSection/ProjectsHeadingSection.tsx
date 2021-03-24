import React from 'react'

import {
  Heading,
  Container,
  HeadingImageWrapper,
  HeadingImage,
} from './projectsHeadingSectionStyle'

const SnakeImage = React.forwardRef((props, ref) => (
  <HeadingImageWrapper>
    <HeadingImage
      alt="A blue snake with headphones"
      ref={ref}
      src={`${process.env.PUBLIC_URL}/snake.svg`}
    />
  </HeadingImageWrapper>
))

const ProjectsHeadingSection: React.FC = () => {
  return (
    <Container>
      <Heading>Projects</Heading>
      <SnakeImage />
    </Container>
  )
}

export default ProjectsHeadingSection
