import Script from 'next/script';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import '../styles/globals.css'
const NavBar = dynamic(() => import('../components/NavBar'))
const FooterContent = dynamic(() => import('../components/FooterContent'))
import {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import links from '../data/links';
import {SessionProvider, useSession} from "next-auth/react";

const startAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-217800713-1');
}

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  const [cookies, setCookie] = useCookies(["ccm_accepted", "cookie_settings"])
  const [cookiePopup, setCookiePopup] = useState(() => {
    return cookies.ccm_accepted !== "true";
  })

  useEffect(() => {
    if(!cookiePopup) {
      const settings = cookies.cookie_settings //JSON.parse(getCookie("cookie_settings"))
      console.log(settings)
      if(settings.analytics === 'true') {
        startAnalytics()
      }
    }
  }, [cookiePopup, cookies.cookie_settings])

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
      <Head>
        <title>Twin Silver Web Design | Web Services for Small Businesses in the North Carolina Raleigh/Durham Area</title>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/assets/images/logos/ts_icon.svg"/>
        {/*<link rel="stylesheet" href="https://use.typekit.net/jvh7mox.css"/>*/}
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta
          name="description"
          content="Full Service Website Design and Development for small businesses."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-217800713-1"
        strategy="lazyOnload"
      />
      <SessionProvider session={session}>
          <div className="relative min-h-screen max-w-[100vw] overflow-hidden">
            <div className="pt-[3.125rem] pb-[38rem] md:pb-[18rem] w-full">
              <NavBar position="top" links={links}/>
              {Component.auth ? (
                <Auth>
                  <Component {...pageProps} />
                </Auth>
              ) : (
                <Component {...pageProps} />
              )}
            </div>
            <FooterContent links={links}/>
          </div>
          { cookiePopup &&
            <div
              className="bg-darkShade w-[800px] border-black border fixed bottom-0 left-0 w-full max-w-full z-50 animate-[fromBottom_1s] md:left-1/2 md:translate-x-[-50%]">
              <div className="flex flex-col sm:flex-row justify-between">
                <div style={{margin:'1em 1em 0 1em'}}>
                  We use cookies to provide an improved user experience and better understand our customers.
                </div>
                <div className="flex  justify-center items-center m-4 ">
                  <button className="button" onClick={handleAccept}>Accept</button>
                  <button className="button ml-6" onClick={handleDecline}>Decline</button>
                </div>
              </div>
            </div>
          }
      </SessionProvider>
    </>
  )
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}

export default MyApp
