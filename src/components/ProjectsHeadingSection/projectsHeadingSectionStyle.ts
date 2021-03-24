import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  height: max(30vh, 300px);
  margin-top: 10vh;
  margin-bottom: 50px;

  @media (max-width: 750px) {
    margin-top: 8vh;
  }
`

export const HeadingImageWrapper = styled.div`
  justify-self: end;
  width: 300px;
  overflow: hidden;

  @media (max-width: 750px) {
    width: 250px;
  }
`

// @media (min-width: 550px) {
//   width: 50%;
// }

// @media (min-width: 700px) {
//   width: 40%;
// }
export const HeadingImage = styled.img`
  transform: scaleX(-1) rotate(15deg);
  position: relative;
  left: 11%;
`

export const Heading = styled.h2`
  position: relative;
  font-family: ${(p) => p.theme.primaryFont};
  color: ${(p) => p.theme.primaryBlue};
  font-size: 4.5em;
  align-self: center;
  justify-self: center;
  padding-left: 20%;
  padding-top: 15%;

  @media (max-width: 450px) {
    font-size: 3em;
    left: 10%;
  }
`
