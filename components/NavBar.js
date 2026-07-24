import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import tsImage from '../public/assets/images/logos/ts-text.svg'
import Link from 'next/link'
import Image from "next/image";
import {signIn, signOut, useSession} from "next-auth/react";
import {ArrowPathIcon} from "@heroicons/react/24/solid";

export default function NavBar() {
  return (
    <>
      <nav className="flex fixed justify-between top-0 m-0 p-0 w-full transition-all duration-500 z-30 h-navbar h-navbar
      bg-darkerShade shadow-[0_3px_1px_2px_rgb(0,0,0,.20)_0_2px_2px_0_rgb(0,0,0,.14)_0_1px_5px_0_rgb(0,0,0,.12)]">
        <div className="flex h-full">
          <Link href='/'>
              <Image width={150} src={tsImage} alt='Twin Silver Logo'/>
          </Link>
        </div>
      </nav>
    </>
  );
}
