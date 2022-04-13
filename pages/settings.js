import {H1, H2} from '../components/atoms/ui/Typography';
import {FormButtons, FormPair, FormStyled, Input} from '../components/atoms/ui/FormStyled';
import {Label} from '../components/atoms/ui/FormStyled';
import Button from '../components/atoms/Button';
import Head from 'next/head';

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
        <FormStyled>
          <FormPair>
            <Input type='checkbox'/>
            <Label>Newsletters</Label>
          </FormPair>
          <FormButtons>
            <Button>Select All</Button>
            <Button>Unselect All</Button>
            <Button>Submit</Button>
          </FormButtons>
        </FormStyled>
      </div>
    </>
  )
}

export default Settings