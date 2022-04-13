import styled from 'styled-components';

const Select = styled.select`
  width: 50%;
  height: 100%;
  padding: 0;
  border: none;
  margin: auto;
  background-color: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text};
  resize: vertical;
  outline: none !important;
  
  option {
    padding: 8px;
    margin: 0 1rem 0 1rem;
    white-space: normal;
    height: 2rem;
    text-align: center;
    width: 100%;
    background-color:  ${props => props.theme.colors.cardBackground};
    color: ${props => props.theme.colors.text} !important;
  }

  
  option:hover,
  option:focus,
  option:focus-within,
  option:focus-visible,
  option:active {
    background: radial-gradient(${props => props.theme.colors.select}, ${props => props.theme.colors.select});
    background-color: ${props => props.theme.colors.select} !important; 
    color: ${props => props.theme.colors.text} !important;
  }

  option:checked {
    background: radial-gradient(${props => props.theme.colors.select},${props => props.theme.colors.select});
    background-color: ${props => props.theme.colors.select} !important; 
    color: ${props => props.theme.colors.text} !important;
  }
  
`

export default Select