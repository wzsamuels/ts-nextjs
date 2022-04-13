import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom';

const fallDown = keyframes`
  from {
    top: -50px;
  }
  to {
    top: 0;
  }
`

export const AnimatedLink = styled(Link)`
  position: relative;
  &.class1 {
    animation: .75s ${fallDown} ease-out;  
  }
  &.class2 {
    animation: .95s ${fallDown} ease-in-out;
  }
  &.class3 {
    animation: 1.15s ${fallDown} ease-in-out;
  }
  &.class4 {
    animation: 1.35s ${fallDown} ease-in-out;
  }
`