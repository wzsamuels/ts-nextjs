import {H1, H2} from '../components/atoms/ui/Typography';
import {FormButtons, FormPair, FormStyled, Input} from '../components/atoms/ui/FormStyled';
import {Label} from '../components/atoms/ui/FormStyled';
import Button from '../components/atoms/Button';
import Box from '../components/atoms/ui/Box';

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

const EmailSettings = () => {
  return (
    <>
      <Box margin='0 1em'>
      <H1>Email Settings</H1>
      <H2>Select which communicates you'd like to receive:</H2>
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
      </Box>
    </>
  )
}

export default EmailSettings