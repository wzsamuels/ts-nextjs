import styled from 'styled-components';
import css from '@styled-system/css'
import {border, compose, position, space, typography} from 'styled-system'

const Container = styled.div`
  border-color: ${props => props.theme.colors.border};
  border-style: solid;
  border-width: 0;
  
  ${css({
    padding: [3],
    color: 'text'
  })}
  
  ${compose(border, space, typography, position)}
`

export default Container