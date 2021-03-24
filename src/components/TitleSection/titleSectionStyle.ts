import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 55vh;
  overflow: hidden;

  @media (min-width: 750px) {
    height: 65vh;
  }

  @media (min-width: 1000px) {
    width: 80%;
  }
`

export const ContentPair = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 35fr 75fr;
`

export const Title = styled.h1`
  font-size: 3.6em;
  font-family: ${(p) => p.theme.primaryFont};
  color: white;
  height: max-content;
  justify-self: start;
  margin-top: 55%;

  @media (min-width: 750px) {
    color: ${(p) => p.theme.secondaryBlueDark};
    align-self: start;
    margin-top: 30%;
    margin-left: 35%;
    font-size: 6em;
  }

  @media (min-width: 1800px) {
    font-size: 8em;
  }
`

export const TitleImageWrapper = styled.div`
  width: 85%;
  height: 100%;
`

export const TitleImage = styled.img`
  position: relative;
  left: -130%;
  width: 300%;
  padding-top: 45px;

  @media (min-width: 1000px) {
    left: -150%;
  }
`

export const TitleSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  z-index: -1;

  @media (min-width: 750px) {
    visibility: hidden;
  }
`
