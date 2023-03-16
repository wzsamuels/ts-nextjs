import { useCookies} from "react-cookie";
import dynamic from 'next/dynamic';
import {useEffect, useState} from "react";
const NavBar = dynamic(() => import('../components/NavBar'))
const FooterContent = dynamic(() => import('../components/FooterContent'))
import links from '../data/links';

declare global {
  interface Window {
    dataLayer :any;
  }
}


const startAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  // @ts-ignore
  gtag('js', new Date());
  // @ts-ignore
  gtag('config', 'UA-217800713-1');
}


const Layout = ({children}) => {
  const [cookies, setCookie] = useCookies(["ccm_accepted", "cookie_settings"])
  const [cookiePopup, setCookiePopup] = useState(undefined);


  useEffect(() => {
    setCookiePopup(cookies.ccm_accepted !== "true");
    if(!cookiePopup) {
      const settings = cookies.cookie_settings //JSON.parse(getCookie("cookie_settings"))
      console.log(settings)
      if(settings?.analytics === 'true') {
        startAnalytics()
      }
    }
  }, [cookiePopup, cookies.ccm_accepted, cookies.cookie_settings])

  const handleAccept = () => {
    setCookie("ccm_accepted", "true", {path: '/'})
    setCookie("cookie_settings", '{"analytics": "true"}', {path: '/'})
    startAnalytics()
    setCookiePopup(false)
  }

  const handleDecline = () => {
    setCookie("ccm_accepted", "true", {path: '/'})
    setCookie("cookie_settings", '{"analytics": "false"}', {path: '/'})
    setCookiePopup(false)
  }
  return (
    <>
      <div className="relative min-h-screen max-w-[100vw] overflow-hidden">
        <div className="pt-[3.125rem] pb-[38rem] md:pb-[18rem] w-full">
          <NavBar links={links}/>
          <div>{children}</div>
        </div>
        <FooterContent links={links}/>
        { cookiePopup &&
          <div
            className="bg-darkShade w-[800px] border-black border fixed bottom-0 left-0 w-full max-w-full z-50 animate-[fromBottom_1s] md:left-1/2 md:translate-x-[-50%]">
            <div className="flex flex-col sm:flex-row justify-between">
              <div style={{margin:'1em 1em 0 1em'}}>
                We use cookies to provide an improved user experience and better understand our customers.
              </div>
              <div className="flex justify-center items-center m-4 ">
                <button className="button" onClick={handleAccept}>Accept</button>
                <button className="button ml-6" onClick={handleDecline}>Decline</button>
              </div>
            </div>
          </div>
        }
      </div>
    </>

  )
}

export default Layout