import {H1, H2, P} from '../components/atoms/ui/Typography';
import {Card} from '../components/atoms/Card';
import {FormButtons, FormPair, FormStyled, Input, TextArea, Label} from '../components/atoms/ui/FormStyled';
import Button from "../components/atoms/Button";
import {useState} from "react";
import {FlexColumn} from '../components/atoms/Flex';
import {emailForm} from "../lib/emailForm";
import styled, {useTheme} from 'styled-components';
import Alert from "../components/atoms/ui/Alert";
import Image, {ImageWrapper} from "../components/atoms/ui/Image";
import getStartedImg from '../public/assets/images/getStartedImg2-01.svg'
import Head from 'next/head';
import React from '@types/react';

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
  margin: .5em;
  
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
  margin: 0;
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
        <H1>Get Started Today</H1>
        <ImageWrapper style={{width: '500px', maxWidth:'95vw'}}>
          <Image src={getStartedImg} alt="Rocket launch"/>
        </ImageWrapper>
        <Card style={{margin:0, backgroundColor: theme.colors.accordion}}>
          <H2 textAlign='center'>Special pricing available for small businesses and non-profits in the NC triangle area!</H2>
        </Card>
        <FormSwitcherWrapper>
          <Card onClick={() => switchForm('newForm')} className={form.formType === newForm ? 'active' : 'not-active' }>
            <H2 textAlign='center'>I need a new website</H2>
          </Card>
          <H2>⇆</H2>
          <Card onClick={() => switchForm('oldForm')} className={form.formType === oldForm ? 'active' : 'not-active'}>
            <H2 textAlign='center'>I already have a website</H2>
          </Card>
        </FormSwitcherWrapper>
        <FormWrapper>
          <Card style={{margin:'0 0 1em 0', maxWidth:'850px'}}>
            { form.formType === newForm }
            <P>{form.formDescription}</P>
            <FormStyled onSubmit={handleSubmit}>
              { form.formType.map((field) =>
                  <FormPair key={field.key}>
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
                  </FormPair>
                )
              }
              <FormButtons>
                <Button>Submit</Button>
              </FormButtons>
            </FormStyled>
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