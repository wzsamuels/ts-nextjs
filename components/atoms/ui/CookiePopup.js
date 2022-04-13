import BannerPopup from './BannerPopup';
import Flex from '../Flex';
import Button from '../Button';
import ButtonGroup from './ButtonGroup';

const CookiePopup = ({children, onAccept = f => f, onDecline = f => f, props}) => {
  return (
    <BannerPopup time='1s' width='800px'>
      <Flex justifyContent='space-between'>
        <div style={{margin:'1em 1em 0 1em'}}>
          {children}
        </div>
        <ButtonGroup>
          <Button onClick={onAccept}>Accept</Button>
          <Button onClick={onDecline}>Decline</Button>
        </ButtonGroup>
      </Flex>
    </BannerPopup>
  )
}

export default CookiePopup