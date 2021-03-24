import styled from 'styled-components'

export const Container = styled.div`
  font-family: ${(p) => p.theme.primaryFont};
  width: 80%;
  margin: auto;
  letter-spacing: 0.05em;
  font-size: 1.05em;
  color: ${(p) => p.theme.bodyText};
  margin-top: 20px;

  & > p + p {
    margin-top: 20px;
  }

  @media (min-width: 750px) {
    width: 50%;
    margin-left: 30%;
    font-size: 1.2em;
  }

  @media (min-width: 1000px) {
    margin-top: 30px;
  }
`
