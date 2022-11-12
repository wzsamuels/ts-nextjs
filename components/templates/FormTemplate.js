import Button from "../atoms/Button";
import {useState} from "react";
import Form from '../atoms/Form';
import GroupContainer from '../atoms/GroupContainer';
import InputLabelContainer from '../atoms/InputLabelContainer';
import TextArea from '../atoms/TextArea';
import Input from '../atoms/Input';
import {handleFormUpdate} from '../../lib/form';

// formFields should have the keys: key, type, label, required

const FormTemplate = ({formFields, handleSubmit = f => f, submitButton='Submit', FormComp=Form, style={}, ...props}) => {
  const [formState, setFormState] = useState(() => {
    let emptyFormState = {}
    formFields.map(field => emptyFormState = {...emptyFormState, [field.key]: ''})
    return emptyFormState
  })

  return (
    <FormComp onSubmit={e => handleSubmit(e, formState)} style={{...style}} {...props}>
      { formFields.map((field) =>
        <InputLabelContainer key={field.key}>
          <label>{field.label}</label>
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
        </InputLabelContainer>
      )
      }
      <GroupContainer>
        <button className="button" type='submit'>{submitButton}</button>
      </GroupContainer>
    </FormComp>
  )
}

export {FormTemplate as default, handleFormUpdate}