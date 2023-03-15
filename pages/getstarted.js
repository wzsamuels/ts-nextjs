import {useState} from "react";
import {emailForm} from "../lib/emailForm";
import Alert from "../components/Alert";
import getStartedImg from '../public/assets/images/getstarted.svg'
import Head from 'next/head';
import Image from "next/image";

const emptyNewForm = {name: '', email: '', url: ''}
const emptyOldForm = {name: '', email: '', url: ''}

const newFormDescription = "Please provide contact information and a description of your business or personal project. " +
  "We'll respond with a free custom-tailored proposal for your new site. There's no obligation to move forward until " +
  "you're completely satisfied."

const oldFormDescription = "Fill out your business or personal information, the address of your existing site, and any " +
  "changes being considered or problems you're facing. Please provide as much information as possible so that we can quickly " +
  "build a proposal to address your needs."

const newForm = [
  {
    key: 'name',
    type: 'text',
    label: 'Name',
    required: true,
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    required: true,
  },
  {
    key: 'phone',
    type: 'tel',
    label: 'Phone'
  },
  {
    key: 'business',
    type: 'textarea',
    label: 'Business Description',
    required: true,
  },
  {
    key: 'url',
    type: 'text',
    label: 'Desired URL',
  },
]

const oldForm = [
  {
    key: 'name',
    type: 'text',
    label: 'Name',
    required: true,
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    required: true,
  },
  {
    key: 'phone',
    type: 'tel',
    label: 'Phone'
  },
  {
    key: 'url',
    type: 'text',
    label: 'Website URL',
    required: true,
  },
  {
    key: 'changes',
    type: 'textarea',
    label: 'How can we improve your site?',
    required: true,
  }
]

const Getstarted = ({initialFormType}) => {
  const [message, setMessage] = useState('')
  const [form, setForm] = useState(() => {
    if(initialFormType === 'oldForm') {
      return {formDescription: oldFormDescription, formType: oldForm, formState: emptyOldForm}
    }
    return {formDescription: newFormDescription, formType: newForm, formState: emptyNewForm}
  })
    //const [formState, setFormState] = useState(emptyForm)
  const handleFormUpdate = event => {
    const key = event.target.name
    let value = event.target.value

    setForm({...form, formState: {...form.formState, [key]: value}})
  }

  const switchForm = action => {
    if(action === 'newForm') {
      setForm({...form, formDescription: newFormDescription, formType: newForm})
    } else if(action === 'oldForm') {
      setForm({...form, formDescription: oldFormDescription, formType: oldForm})
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    try {
      emailForm(form.formState)
      setMessage("Request successfully submitted! We'll review your information, contact you if we have any questions, and respond with a proposal for your site within a few days.")
    } catch(err) {
      setMessage("Sorry, we ran into a problem processing your request. Please send your information to contact@twinsilverdesign.com")
    }
  }

  return (
    <>
      <Head>
        <title>Get Started | Twin Silver</title>
      </Head>
      <div className='flex flex-col justify-center items-center'>
        <h1 className="my-8 header-largest font-light">Get Started Today</h1>
        <Image priority className="max-w-[500px] w-[95vw] my-4 rounded-lg" src={getStartedImg} alt="Business Startup - Rocket launch"/>
        <div className="my-4 w-full w-[95vw] max-w-[500px] rounded-lg bg-primary p-8">
          <h2 className='text-center font-bold header-larger'>Special pricing available for small businesses and non-profits in the NC triangle area!</h2>
        </div>
        <div className="flex my-4 justify-center items-center max-w-[600px] w-[95vw]">
          <div
            className={`flex justify-center items-center flex-1 h-[127px] rounded bg-darkerShade cursor-pointer p-4 shadow-2xl ${form.formType === newForm ? 'opacity-100 border-4 border-light' : 'opacity-50'}`}
            onClick={() => switchForm('newForm')} >
            <h2 className="header-larger text-center">I need a new website</h2>
          </div>
          <div className="header-larger mx-2">⇆</div>
          <div
            onClick={() => switchForm('oldForm')}
            className={`flex justify-center items-center flex-1 h-[127px] rounded bg-darkerShade cursor-pointer p-4 shadow-2xl ${form.formType === oldForm ? 'opacity-100 border-4 border-light' : 'opacity-50'}`}
          >
              <h2 className="header-larger text-center">I already have a website</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center my-4 rounded p-4 shadow-xl w-[850px] max-w-[97%] bg-darkerShade">
          <p className="py-4">{form.formDescription}</p>
          <form className="flex flex-col max-w-full not-last:mb-6" onSubmit={handleSubmit}>
            { form.formType.map((field) =>
              <div className="flex items-center" key={field.key}>
                <label htmlFor={field.key} className="basis-56 mr-1">
                  {field.label} {field.required ? '' : <small>(optional)</small>}
                </label>
                { field.type === 'textarea' ?
                  <textarea
                    className="input"
                    name={field.key}
                    id={field.key}
                    value={form.formState[field.key] || ''}
                    onChange={e => handleFormUpdate(e)}
                    required={field.required}
                  />
                  :
                  <input
                    className="input"
                    name={field.key}
                    id={field.key}
                    type={field.type}
                    value={form.formState[field.key] || ''}
                    onChange={e => handleFormUpdate(e)}
                    required={field.required}
                  />
                }
              </div>
              )}
            <div className="flex items-center justify-center">
              <button className="button">Submit</button>
            </div>
          </form>
          { message &&
            <Alert className="mt-8">{message}</Alert>
          }
        </div>
      </div>
    </>
  )
}

export default Getstarted