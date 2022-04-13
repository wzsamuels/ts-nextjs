import styled from 'styled-components';

export const BackgroundImage = styled.header`
  background-image: url(${props => props.image});
  background-color: #cccccc;
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 5;
`