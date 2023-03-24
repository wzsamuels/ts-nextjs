import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import tsImage from '../public/assets/images/logos/ts-text.svg'
import Link from 'next/link'
import Image from "next/image";
import {signIn, signOut, useSession} from "next-auth/react";
import {ArrowPathIcon} from "@heroicons/react/24/solid";

export default function NavBar({links}) {
  const [drawerClosing, setDrawerClosing] = useState(false);
  const [drawerOpen, setDrawer] = useState(false);
  const { status } = useSession();

  const handleDrawerClose = () => {
    setDrawerClosing(true)
    setTimeout(() => {
      setDrawer(false);
      setDrawerClosing(false);
    }, 500);
  }

  const renderLoginButton = () => {
    if (status === "loading") {
      return (
        <div className="auth-btn">
          <div className="auth-info">
            <ArrowPathIcon className="icon animate-spin"/>
          </div>
        </div>
      );
    }
    if (status === "unauthenticated") {
      return (
        <button className="menu-item" onClick={() => signIn()}>Login</button>
      );
    }
    return (
      <button className="menu-item" onClick={() => signOut()}>Logout</button>
    );
  }

  return (
    <>
      <nav className="flex fixed justify-between top-0 m-0 p-0 w-full transition-all duration-500 z-30 h-navbar h-navbar
      bg-darkerShade shadow-[0_3px_1px_2px_rgb(0,0,0,.20)_0_2px_2px_0_rgb(0,0,0,.14)_0_1px_5px_0_rgb(0,0,0,.12)]">
        <div className="flex h-full">
          <button
            aria-label="Open Menu"
            onClick={() => setDrawer(true)}
            className="block lg:hidden float-left px-4 py-3.5 cursor-pointer"
          >
            <Icon height={18} icon="ic:baseline-menu" />
          </button>
          <Link href='/'>
              <Image width={150} src={tsImage} alt='Twin Silver Logo'/>
          </Link>
        </div>
        <div className='hidden lg:block flex'>
          {
            links.map((link, i) =>
            {
              if(link.dropdown) {
                return (
                  <div key={i} className="menu-item group" tabIndex={0}>
                    {link.text}
                    <div
                      className="absolute animate-[fadeIn_0.5s] mt-3 bg-darkerShade hidden group-hover:block group-focus:block group-focus-within:block">
                      {link.urls.map((dlink, di) =>
                        <a className="menu-item clear-both" href={dlink.url} key={di}>{dlink.text}</a>
                      )}
                    </div>
                  </div>
                )
              }
              else {
                return (
                  <Link className="menu-item" href={link.url} key={i}>{link.text}</Link>
                )
              }
            })
          }
        </div>
        <div/>
        {/*
        <Link className="menu-item group" href="/account" passHref tabIndex={0}>
          Account
          <div className="opacity-0 absolute duration-500 mt-3 bg-darkerShade group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100">
            {renderLoginButton()}
          </div>
        </Link>
        */}
      </nav>

      {/* Side Drawer */}
      <div
        onClick={handleDrawerClose}
        className={`fixed z-40 w-screen h-screen ${drawerOpen ? 'block' : 'hidden'} ${drawerClosing ? 'transparent' : 'bg-[rgba(0,0,0,0.4)]'}`}
      >
        <div
          className = {`fixed z-10 animate-[fromLeft_0.4s_ease-in-out] left-0 top-0 bg-darkerShade m-auto h-full transition-all duration-500 ease-in-out w-[220px] 
           ${drawerClosing && 'left-[-300px]'} shadow-[0_4px_8px_0_rgba(0,0,0,0.2)_0_6px_20px_0_rgba(0,0,0,0.19)]`}
        >
          <div className="flex h-navbar pl-3.5">
            <button aria-label="Close Menu">
              <Icon height={18} icon="ic:baseline-menu" />
            </button>
            <Link
              href='/'
              passHref
              style={{height: '50px', padding: '0'}}
            >
              <div className="flex h-full px-4 py-0.5">
                <Image src={tsImage} alt='Twin Silver Logo'/>
              </div>
            </Link>
          </div>
          {
            links.map((link, index) =>
              link.dropdown ?
                <div className="w-full pl-4 py-3 float-left" key={index}>
                  <span>{link.text}</span>
                  <div className="flex flex-col mt-4">
                    { link.urls?.map((dlink, di) =>
                      <a
                        key={di}
                        href={dlink.url}
                        className="ml-4 w-[calc(100% - 1rem)] px-4 py-3 hover:bg-primary">
                        {dlink.text}
                      </a>
                    )}
                  </div>
                </div>
                :
              <Link
                href={link.url}
                key={link.url}
                className="w-full px-4 py-3 float-left hover:bg-primary"
              >
                {link.text}
              </Link>
            )
          }
          <div className="absolute w-full bottom-[5px] p-4 text-xs">
            <div>© {new Date().getFullYear()} Twin Silver Web Design LLC</div>
          </div>
        </div>
      </div>
    </>
  );
}