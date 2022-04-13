import styled from 'styled-components'

const Hero = styled.div`
  //height: 100%;
  width: 100%;
  //max-width: 1000px;
  background-color: ${props => props.theme.colors.hero};
  color: ${props => props.theme.colors.heroText};
`

export default Hero