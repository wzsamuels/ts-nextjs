import Button from '../components/atoms/Button';
import Head from 'next/head';
import Form from '../components/atoms/Form';
import Input from '../components/atoms/Input';
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
      <div className="my-0 mx-4">
        <h1 className="header-largest">Email Settings</h1>
        <h2 className="header-larger">Select which communicates you&rsquo;d like to receive:</h2>
        <Form>
          <InputLabelContainer>
            <Input type='checkbox'/>
            <label>Newsletters</label>
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