import {H1, H2} from '../components/atoms/Typography';
import Button from '../components/atoms/Button';
import Head from 'next/head';
import Form from '../components/atoms/Form';
import Input from '../components/atoms/Input';
import Label from '../components/atoms/Label';
import GroupContainer from '../components/atoms/GroupContainer';
import InputLabelContainer from '../components/atoms/InputLabelContainer';

const formFields = [
  {
    key: 'newsletter',
    label: 'News & Updates',
  },
  {
    key: 'sale',
    label: 'Sales & Promotions',
  },
  {
    key: 'newsletter',
    label: '',
  },
]

const Settings = () => {
  return (
    <>
      <Head>
        <title>Settings | Twin Silver</title>
      </Head>
      <div style={{margin:'0 1em'}}>
        <H1>Email Settings</H1>
        <H2>Select which communicates you&rsquo;d like to receive:</H2>
        <Form>
          <InputLabelContainer>
            <Input type='checkbox'/>
            <Label>Newsletters</Label>
          </InputLabelContainer>
          <GroupContainer>
            <Button>Select All</Button>
            <Button>Unselect All</Button>
            <Button>Submit</Button>
          </GroupContainer>
        </Form>
      </div>
    </>
  )
}

export default Settings