import {FormButtons, FormPair, FormStyled, Input, TextArea} from './FormStyled';
import Button from "../Button";
import {useState} from "react";
import {Label} from './FormStyled';

// formFields should have the keys: key, type, label, required

const handleFormUpdate = (e, formState, setFormState) => {
  const key = e.target.name
  const type = e.target.type
  let value = e.target.value

  // Automatically add dashes as phone numbers are typed
  if(type && type === 'tel') {
    if(value.length === 3 && formState.phone.length === 2) {
      value += '-'
    } else if(value.length  === 7 && formState.phone.length === 6) {
      value += '-'
    }
  }
  setFormState({ ...formState, [key]: value })
}

const Form = ({formFields, handleSubmit = f => f, submitButton='Submit', FormComp=FormStyled, style={}, ...props}) => {
  const [formState, setFormState] = useState(() => {
    let emptyFormState = {}
    formFields.map(field => emptyFormState = {...emptyFormState, [field.key]: ''})
    return emptyFormState
  })

  return (
    <FormComp onSubmit={e => handleSubmit(e, formState)} style={{...style}} {...props}>
      { formFields.map((field) =>
        <FormPair key={field.key}>
          <Label>{field.label}</Label>
          { field.type === 'textarea' ?
            <TextArea
              name={field.key}
              value={formState[field.key] || ''}
              onChange={e => handleFormUpdate(e, formState, setFormState)}
              required={field.required}
            />
            :
            <Input
              name={field.key}
              type={field.type}
              value={formState[field.key] || ''}
              onChange={e => handleFormUpdate(e, formState, setFormState)}
              required={field.required}
            />
          }
        </FormPair>
      )
      }
      <FormButtons>
        <Button type='submit'>{submitButton}</Button>
      </FormButtons>
    </FormComp>
  )
}

export {Form as default, handleFormUpdate}