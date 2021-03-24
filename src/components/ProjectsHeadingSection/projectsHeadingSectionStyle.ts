import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  height: max(30vh, 300px);
  margin-top: 10vh;
  margin-bottom: 50px;
  overflow: hidden;
  padding-left: 10%;

  @media (max-width: 750px) {
    margin-top: 8vh;
  }

  @media (max-width: 750px) {
    padding-top: 0%;
  }

  @media (min-width: 750px) {
    padding-left: 20%;
  }
`

export const HeadingImageWrapper = styled.div`
  position: relative;
  justify-self: end;
  width: 300px;
  overflow: hidden;

  @media (max-width: 750px) {
    top: -14%;
    width: 250px;
  }

  @media (max-width: 520px) {
    left: -25px;
  }

  @media (min-width: 900px) {
    width: 400px;
  }
`

export const HeadingImage = styled.img`
  transform: scaleX(-1) rotate(15deg);
  position: relative;
  left: 11%;

  @media (min-width: 900px) {
    top: -20%;
  }
`

export const Heading = styled.h2`
  color: ${(p) => p.theme.primaryBlue};
  font-size: 4.5em;

  @media (max-width: 450px) {
    font-size: 3.1em;
    left: 10%;
  }
`

export const HeadingWrapper = styled.div`
  font-family: ${(p) => p.theme.primaryFont};
  position: relative;
  align-self: center;
  justify-self: center;
  padding-top: 15%;

  @media (max-width: 500px) {
    padding-top: 20%;
  }
`

export const HeadingDescription = styled.div`
  margin-top: 20px;
  font-size: 1.3em;
  color: ${(p) => p.theme.bodyText};
`
