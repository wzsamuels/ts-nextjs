import React, {useState} from 'react';
import fbLogoImg from '../public/assets/images/logos/facebook.svg'
import twitterLogoImg from '../public/assets/images/logos/twitter.svg'
import instaLogoImg from '../public/assets/images/logos/instagram.png'
import Image from "next/image";

const FooterContent = ({links}) => {
  const [emailForm, setEmailForm] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
   // const response = await API.graphql(graphqlOperation(mutations.createEmail, {input: {email: emailForm, marketing: true, sales: true, newsletter: true}}))
  //  window.alert(JSON.stringify(response.data.createEmail))
  }

  return (
    <footer className="absolute bottom-0 w-full pt-1 pb-0 px-4 bg-darkerShade text-light shadow-footer">
      <div className="flex flex-col mt-4 items-center">
        <div className="flex justify-between w-full flex-col md:flex-row [&>*]:mx-4 [&>*]:mb-4">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="font-bold mb-4">Twin Silver</div>
            <div className="flex items-center [&>*]:my-0 [&>*]:mx-2">
              <a className="flex-shrink-0" href='https://www.facebook.com/twinsilverdesign'><Image width={40} src={fbLogoImg} alt='Facebook logo'/></a>
              <a className="flex-shrink-0" href='https://twitter.com/twinsilverweb'><Image className="min-h-[30px] min-w-[30px] w-[40px] h-[40px]" src={twitterLogoImg} alt='Twitter logo'/></a>
              <a href='components/FooterContent'><Image className="min-h-[30px] min-w-[30px] w-[40px] h-[40px]" src={instaLogoImg} alt='Instagram logo'/></a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="font-bold mb-4">Site</div>
            {links.map(link =>
              <span className="hover:text-lightAccent"
                    key={link.text}>
                {!link.dropdown &&
                  <p><a href={link.url}>{link.text}</a></p>}</span>
            )}
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="font-bold mb-4">Legal</div>
            <p><a href='https://www.termsfeed.com/live/2517a2ba-4b56-47a1-8a99-aeb8e52931d8'>Terms & Conditions</a></p>
            <p><a href='https://www.termsfeed.com/live/caf8a38e-a6e6-4a73-abc8-02b9957ab594'>Privacy Policy</a></p>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="font-bold mb-4" style={{marginBottom:'0'}}>Sign Up for Updates</div>
            <form onSubmit={handleSubmit}>
              <div className='center-on-mobile'>
                <input
                  className="input my-4"
                  type='email'
                  placeholder='Please enter your email'
                  value={emailForm}
                  onChange={e => setEmailForm(e.target.value)}
                />
                <button className="button justify-self-center" type='submit'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
        <small style={{marginBottom: '1em'}}>Copyright Twin Silver Web Design, LLC</small>
      </div>
    </footer>
  )
}

export default FooterContent