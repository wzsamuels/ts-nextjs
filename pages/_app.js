import Script from 'next/script';
import Head from 'next/head';
import '../styles/globals.css'
import {SessionProvider, useSession} from "next-auth/react";
import Layout from "../components/Layout";


function MyApp({ Component, pageProps: { session, ...pageProps} }) {
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
        <Layout>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
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
