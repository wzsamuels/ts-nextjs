import styled from "styled-components";

const CloseButton = styled.span`
  //margin: 1em 1em 0 0;
  color: ${props => props.theme.colors.cardText};
  top: 8px;
  right: 8px;
  //color: white;
  font-weight: bold;
  position: fixed;
  font-size: 2em;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    //color: black;
  }
`

export default CloseButton