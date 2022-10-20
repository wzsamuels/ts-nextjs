import FlexColumn from '../components/atoms/FlexColumn';
import Flex from '../components/atoms/Flex';
import {H1, H2} from '../components/atoms/Typography';
import React, {useState} from 'react';
import Form from '../components/templates/FormTemplate';
import Card from '../components/atoms/Card';
import {emailForm} from '../lib/emailForm';
import Alert from '../components/molecules/Alert';
import Head from 'next/head';

const formFields = [
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
    key: 'feedback',
    type: 'textarea',
    label: "What's on your mind?",
    required: true,
  }
]

const Contact = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e, formState) => {
    e.preventDefault()
    try {
      emailForm(formState)
      setMessage("Thanks for your feedback! We'll quickly responded to any questions or concerns.")
    } catch(err) {
      setMessage("Sorry, we ran into a problem processing your request. Please contact us with the email address or phone number below.")
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Twin Silver</title>
      </Head>

      <FlexColumn className='center h-full'>
        <h1 className="my-8 header-largest font-light">We&rsquo;d Love to Hear From You</h1>
        <Card className="my-4" style={{maxWidth: '500px'}}>
          <Flex className='align-center'>
            { message ?
              <Alert>{message}</Alert>
              :
              <Form handleSubmit={handleSubmit} style={{width:'500px'}} formFields={formFields}/>
            }
          </Flex>
        </Card>
        <H2 className="py-8">Reach Out Directly</H2>
        <address className="flex flex-col h-full ">
          <p className="my-4" style={{marginBlockEnd: 0}}>Email: <a href='mailto:contact@twinsilverdesign.com'>contact@twinsilverdesign.com</a></p>
          <p className="my-4">Phone: <a href='tel:14348782240'>(434)-878-2240</a></p>
        </address>
      </FlexColumn>
    </>
  )
}

export default Contact