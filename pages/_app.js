import Script from 'next/script';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import '../styles/normalize.css'
import darkTheme from '../styles/darkTheme';
import GlobalStyles from '../styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import PageWrapper from '../components/atoms/PageContainer';
import ContentWrapper from '../components/atoms/ContentContainer';
const NavBar = dynamic(() => import('../components/templates/NavBar'))
const FooterContent = dynamic(() => import('../components/templates/FooterContent'))
import {useEffect, useState} from 'react';
import CookiePopup from '../components/organisms/CookiePopup';
import {useCookies} from 'react-cookie';
import {Amplify} from 'aws-amplify';
import awsconfig from '../src/aws-exports'
Amplify.configure({...awsconfig, ssr: true});

const links = [
  {text: 'Get Started', url: '/getstarted'},
  {text: 'Features', url: '/features'},
  {text: 'Contact', url: '/contact'},
]

const startAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-217800713-1');
}

function MyApp({ Component, pageProps }) {
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
        <title>Twin Silver Web Design</title>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/assets/images/logos/ts_icon.svg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta
          name="description"
          content="Full Service Website Design and Development"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-217800713-1"
        strategy="lazyOnload"
      />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles/>
        <PageWrapper>
          <ContentWrapper>
            <NavBar position="top" links={links}/>
            <Component {...pageProps} />
          </ContentWrapper>
          <FooterContent links={links}/>
        </PageWrapper>
        { cookiePopup &&
          <CookiePopup onAccept={handleAccept} onDecline={handleDecline}>
            We use cookies to provide an improved user experience and better understand our customers.
          </CookiePopup>
        }
      </ThemeProvider>
    </>
  )
}

export default MyApp
