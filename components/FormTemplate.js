import {useState} from "react";
import {handleFormUpdate} from '../lib/form';

// formFields should have the keys: key, type, label, required

const FormTemplate = ({formFields, handleSubmit = f => f, submitButton='Submit', style={}, ...props}) => {
  const [formState, setFormState] = useState(() => {
    let emptyFormState = {}
    formFields.map(field => emptyFormState = {...emptyFormState, [field.key]: ''})
    return emptyFormState
  })

  return (
    <form className="flex flex-col max-w-full not-last:mb-6" onSubmit={e => handleSubmit(e, formState)} style={{...style}} {...props}>
      { formFields.map((field) =>
        <div className="flex items-center" key={field.key}>
          <label className="basis-label">{field.label}</label>
          { field.type === 'textarea' ?
            <textarea
              className="input"
              name={field.key}
              value={formState[field.key] || ''}
              onChange={e => handleFormUpdate(e, formState, setFormState)}
              required={field.required}
            />
            :
            <input
              className="input"
              name={field.key}
              type={field.type}
              value={formState[field.key] || ''}
              onChange={e => handleFormUpdate(e, formState, setFormState)}
              required={field.required}
            />
          }
        </div>
      )
      }
      <div className="flex items-center justify-center">
        <button className="button" type='submit'>{submitButton}</button>
      </div>
    </form>
  )
}

export {FormTemplate as default, handleFormUpdate}