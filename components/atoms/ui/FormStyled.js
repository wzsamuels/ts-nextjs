import styled from 'styled-components';
import Flex from '../Flex';

export const FormStyled = styled.form`
  max-width: 100%;

  display: flex;
  //justify-content: center;
  flex-direction: column;
  
  > *:not(:last-child) {
    margin-bottom: 1.5em;
  }
`

export const FormItem = styled.li`

  textarea {
    padding: .5em;
    background-color: ${props => props.theme.colors.cardBackground};
    color: ${props => props.theme.colors.formText};
    border-color: ${props => props.theme.colors.footer};
    border-style: solid;
    border-width: 1px;
    width: 100%;
  }

  width: 100%;
`

export const FormPair = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  //justify-content: flex-end;
  
  button {
    margin-left: auto;
    padding: .5em 1em;
    text-transform: uppercase;
    letter-spacing: .09em;
    border-radius: 2px;
  }

  input:not([type='checkbox']), textarea {
    padding: .5em;
    //max-width: 300px;
    max-width: 100%;
    width: 100%;
      //background-color: ${props => props.theme.colors.cardBackground};
      //color: ${props => props.theme.colors.formText};

  }

  input:not([type='checkbox']):focus {
    outline: none !important;
      //border-color: ${props => props.theme.colors.formText};
  }

  p {
    margin: 0;
  }

  label + * {
    flex: 1 0 220px;
  }
  

  & > label, p {
    flex: 1 0 120px;
    max-width: 200px;
  }
`

export const FormButtons = styled(Flex)`
  display: flex;

  //margin-top: 1em;

  * {
    margin-top: 1em;
  }

  * + * {
    margin-left: 1.5em;
  }

  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  //max-width: 100%;
  &input:not([type='checkbox']) {
    //width: 200px;
    padding: .5em;
    max-width: 100%;
    width: 100%;
}

  input:not([type='checkbox']) {
    
  }

  background-color: transparent;
  //appearance: none;
  border-color: ${props => props.theme.colors.inputNoFocus};
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  box-shadow: 0 5px 15px 0 #0B0B19;
  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none !important;
    border-color: ${props => props.theme.colors.accordion};
  }
`

export const TextArea = styled.textarea`
  max-width: 100%;
  width: 200px;
  background-color: transparent;
  appearance: none;
  border-color: ${props => props.theme.colors.inputNoFocus};
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  box-shadow: 0 5px 15px 0 #0B0B19;
  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none !important;
    border-color: ${props => props.theme.colors.accordion};
  }
`

export const Label = styled.label`
`