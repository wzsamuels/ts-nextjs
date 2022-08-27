import {H1, H2, P} from '../components/atoms/Typography';
import Card from '../components/atoms/Card';
import InputLabelContainer from '../components/atoms/InputLabelContainer';
import GroupContainer from '../components/atoms/GroupContainer';
import Form from '../components/atoms/Form';
import Input from '../components/atoms/Input';
import TextArea from '../components/atoms/TextArea';
import Button from "../components/atoms/Button";
import {useState} from "react";
import FlexColumn from '../components/atoms/FlexColumn';
import {emailForm} from "../lib/emailForm";
import styled, {useTheme} from 'styled-components';
import Alert from "../components/molecules/Alert";
import Image, {ImageWrapper} from "../components/atoms/ImageStyled";
import getStartedImg from '../public/assets/images/getstarted.svg'
import Head from 'next/head';
import Label from '../components/atoms/Label';

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

const FormSwitcherWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  
  & ${Card} {
    flex: 1;
    height: 127px;
    //margin: .5em;
  }
`

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
`

const Getstarted = ({initialFormType}) => {
  const [message, setMessage] = useState('')
  const theme = useTheme()

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
      <FlexColumn className='center'>
        <h1 className="my-8 header-largest">Get Started Today</h1>
        <ImageWrapper className="my-4"  style={{width: '500px', maxWidth:'95vw'}}>
          <Image src={getStartedImg} alt="Rocket launch"/>
        </ImageWrapper>
        <Card className="my-4 max-w-[500px]" style={{backgroundColor: theme.colors.accordion, padding: '2em'}}>
          <h2 className='text-center font-bold header-large'>Special pricing available for small businesses and non-profits in the NC triangle area!</h2>
        </Card>
        <FormSwitcherWrapper className="my-4">
          <Card
            onClick={() => switchForm('newForm')} className={`flex justify-center items-center ${form.formType === newForm ? 'active' : 'not-active'}`}>
            <h2 className="header-large text-center">I need a new website</h2>
          </Card>
          <H2>⇆</H2>
          <Card
            onClick={() => switchForm('oldForm')}
            className={`flex justify-center items-center ${form.formType === oldForm ? 'active' : 'not-active'}`}
          >
              <h2 className="header-large text-center">I already have a website</h2>
          </Card>
        </FormSwitcherWrapper>
        <FormWrapper className="my-4">
          <Card style={{margin:'0 0 1em 0', maxWidth:'850px'}}>
            { form.formType === newForm }
            <p className="py-4">{form.formDescription}</p>
            <Form onSubmit={handleSubmit}>
              { form.formType.map((field) =>
                  <InputLabelContainer key={field.key}>
                    <Label>{field.label} {field.required ? '' : <small>(optional)</small>}</Label>
                    { field.type === 'textarea' ?
                      <TextArea
                        name={field.key}
                        value={form.formState[field.key] || ''}
                        onChange={e => handleFormUpdate(e)}
                        required={field.required}
                      />
                      :
                      <Input
                        name={field.key}
                        type={field.type}
                        value={form.formState[field.key] || ''}
                        onChange={e => handleFormUpdate(e)}
                        required={field.required}
                      />
                    }
                  </InputLabelContainer>
                )
              }
              <GroupContainer>
                <Button>Submit</Button>
              </GroupContainer>
            </Form>
            { message &&
              <Alert style={{marginTop:'2em'}}>{message}</Alert>
            }
          </Card>
        </FormWrapper>
      </FlexColumn>
    </>
  )
}

export default Getstarted