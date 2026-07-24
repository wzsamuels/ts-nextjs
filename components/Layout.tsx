import dynamic from 'next/dynamic';
import {useEffect, useState} from "react";
const NavBar = dynamic(() => import('../components/NavBar'))
const FooterContent = dynamic(() => import('../components/FooterContent'))

const Layout = ({children}) => {
  return (
    <>
      <div className="relative min-h-screen max-w-[100vw] overflow-hidden">
        <div className="pt-[3.125rem] pb-[38rem] md:pb-[18rem] w-full">
          <NavBar />
          <div>{children}</div>
        </div>
      </div>
    </>

  )
}

export default Layout
