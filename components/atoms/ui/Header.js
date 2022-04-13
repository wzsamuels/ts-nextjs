import styled from 'styled-components';
import {BackgroundImage} from './BackgroundImage';

export const Header = styled(BackgroundImage)`
  background-image: url(${props => props.theme.headerImage});
`