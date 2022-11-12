import BannerPopup from '../../molecules/BannerPopup';
import GroupContainer from '../../atoms/GroupContainer';

const CookiePopup = ({children, onAccept = f => f, onDecline = f => f, props}) => {
  return (
    <BannerPopup time='1s' style={{width:'800px'}} bp='800px' {...props}>
      <div className="flex justify-between">
        <div style={{margin:'1em 1em 0 1em'}}>
          {children}
        </div>
        <GroupContainer>
          <button className="button" onClick={onAccept}>Accept</button>
          <button className="button" onClick={onDecline}>Decline</button>
        </GroupContainer>
      </div>
    </BannerPopup>
  )
}

export default CookiePopup