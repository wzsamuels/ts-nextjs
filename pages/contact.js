import Flex from '../components/atoms/Flex';
import {H1, H2} from '../components/atoms/ui/Typography';
import React, {useState} from 'react';
import Form from '../components/atoms/ui/Form';
import {Card} from '../components/atoms/Card';
import {emailForm} from '../lib/emailForm';
import Alert from '../components/atoms/ui/Alert';

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
    <Flex className='align-center column'>
      <H1>We&rsquo;d Love to Hear From You</H1>
      <Card style={{margin: '0 0 1em 0', maxWidth: '500px'}}>
        <Flex className='align-center'>
          { message ?
            <Alert>{message}</Alert>
            :
            <Form handleSubmit={handleSubmit} style={{width:'500px'}} formFields={formFields}/>
          }
        </Flex>
      </Card>
      <H2>Reach Out Directly</H2>
      <address>
        <p style={{marginBlockEnd: 0}}>Email: <a href='mailto:contact@twinsilverdesign.com'>contact@twinsilverdesign.com</a></p>
        <p>Phone: <a href='tel:14348782240'>(434)-878-2240</a></p>
      </address>
    </Flex>
  )
}

export default Contact