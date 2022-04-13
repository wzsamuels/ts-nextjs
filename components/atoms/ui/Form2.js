import {Icon} from '@iconify/react'
import styled from 'styled-components';

const Form2 = styled.form` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 1.25em;

  input:not([type='checkbox']), textarea {
    display: block;
    margin: 1em;
    font-size: 1rem;
    width: 100%;
    border: 1px solid var(--main-blue);
    border-radius: 2px;
    padding: 10px;
  }

  textarea {
    height: 250px;
  }

  textarea::placeholder {
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
  }
`

const FormHeader = styled.h2`
  margin: 0;
  text-transform: uppercase;
  text-align: center;
`

const Label = styled.label`
  margin: 1em 0;
  text-align: left;
  width: 100%;
`

const Submit = styled(Icon)`
  justify-self: end;
  font-size: 4rem;
  color: var(--main-green);
  cursor: pointer;
`

export {Form2, FormHeader, Label, Submit}