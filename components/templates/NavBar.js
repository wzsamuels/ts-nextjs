import React, {useEffect, useState} from 'react';
import Flex from '../atoms/Flex';
import {
  Drawer,
  DrawerContent,
  DrawerDropdown,
  DrawerDropdownMenu,
  DrawerFooter,
  DrawerHeader,
  DrawerItem
} from '../organisms/Drawer';
import {Icon} from '@iconify/react';
import tsImage from '../../public/assets/images/logos/ts-text.svg'
import TopNav, {DropDownItem, DropDownMenu} from '../organisms/NavBar';
import Link from 'next/link'
import Image from 'next/image'



export default function NavBar({links, position}) {
  const [drawerClosing, setDrawerClosing] = useState(false);
  const [drawerOpen, setDrawer] = useState(false);
  const [user, setUser] = useState(null);

  const toggleDrawer = () => { setDrawer(!drawerOpen) };
  const callback = () => e => {
    if(e.animationName === 'SlideOut') {
      setDrawer(false);
      setDrawerClosing(false);
    }
  }

  return (
    <>
      <TopNav position={position}>
        <Flex>
          <button aria-label="Open Menu" onClick={toggleDrawer} className="icon menu"><Icon height={18} icon="ic:baseline-menu" /></button>
          <Link href='/' passHref style={{height: '50px', padding: '0'}}>
            <Flex className='logo' height='100%'>
              <Image height={50} width={150} style={{padding: '2px 1em'}} src={tsImage} alt='Twin Silver Logo'/>
            </Flex>
          </Link>
        </Flex>
        <div className ='hide'>
          <Flex style={{flexWrap:'no-wrap'}}>
            {
              links.map((link, i) =>
              {
                if(link.dropdown)
                  return (
                    <div key={i} className="dropdown">
                      {link.text}
                      <DropDownMenu>
                        {link.urls.map((dlink, di) =>
                          <DropDownItem key={di}><a href={dlink.url}>{dlink.text}</a></DropDownItem>
                        )}
                      </DropDownMenu>
                    </div>
                  )
                else
                  return (
                    <Link key={i} href={link.url}>{link.text}</Link>
                  )
              })
            }
          </Flex>
        </div>
        <div style={{flexBasis: 'auto'}}/>
      </TopNav>

      <Drawer onClick={() => setDrawerClosing(true)} open={drawerOpen} closing={drawerClosing}>
        <DrawerContent onClick={() => setDrawerClosing(true)}
                       className = {`${drawerClosing ? 'ClosedDrawer' : 'OpenDrawer'}`}
                       onAnimationEnd={callback()}>
          <DrawerHeader>
            <button onClick={() => setDrawerClosing(true)} aria-label="Close Menu"><Icon height={18} icon="ic:baseline-menu" /></button>
            <Link
              href='/'
              passHref
              style={{height: '50px', padding: '0'}}
            >
              <Flex style={{height:'100%', padding: '2px 1em'}}>
                <Image src={tsImage} alt='Twin Silver Logo'/>
              </Flex>
            </Link>
          </DrawerHeader>
          {
            links.map(link =>
              link.dropdown ?
                <DrawerDropdown>
                  {link.text}
                  <DrawerDropdownMenu>
                    {link.urls.map((dlink, di) =>
                        <DrawerItem key={di} href={dlink.url}  style={{height: '50px'}} className="ml-4 pl-4 flex items-center">
                          {dlink.text}
                        </DrawerItem>
                    )}
                  </DrawerDropdownMenu>
                </DrawerDropdown> :
              <Link
                href={link.url}
                style={{height: '50px', padding: '0'}}
                key={link.text}
                passHref
              >
                <DrawerItem>
                  {link.text}
                </DrawerItem>
              </Link>
            )
          }
          <DrawerFooter>
            <div>© 2022 Twin Silver Web Design LLC</div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

/*
<div>
              <Link t>Terms</Link>
              <Link>Privacy Policy</Link>
            </div>
 */
