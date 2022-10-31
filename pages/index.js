import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components';
import Card from '../components/atoms/Card';
import Button, {ButtonLink} from '../components/atoms/Button';
import Flex from '../components/atoms/Flex';
import ImageStyled, {ImageWrapper} from '../components/atoms/ImageStyled';
import {BackgroundImage} from '../components/atoms/BackgroundImage';
import React, {useState} from 'react';
import {H1} from '../components/atoms/Typography';
import medical from '../public/assets/images/index/medical_screenshot.png'
import pizza from '../public/assets/images/index/pizza_screenshot.png'
import shop from '../public/assets/images/index/shop_screenshot.png'
import law from '../public/assets/images/index/law_screenshot.png'
import artImage2 from '../public/assets/images/index/art.jpeg'
import businessImage from '../public/assets/images/index/business.jpg'
import secureImage from '../public/assets/images/index/secure.jpg'
import heroImage from '../public/assets/images/index/manAtComputer.jpg'
import optimizeImage from '../public/assets/images/index/optimize.jpg'
import changePlatformImg from '../public/assets/images/index/changePlatforms.svg'
import newSiteImg from '../public/assets/images/index/newsite.svg'
import refineSiteImg from '../public/assets/images/index/refineImg.svg'
import logoImage from '../public/assets/images/logos/twinsilver.svg'
import Divider from "../components/atoms/Divider";
import Modal from '../components/molecules/Modal';
import GroupContainer from '../components/atoms/GroupContainer';
import {Fade} from 'react-awesome-reveal';
import Head from "next/head";

const HomeCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 1080px;
  max-width: 100%;
  margin: 1em auto 2em;
  height: auto;
  background-color: ${props => props.theme.colors.cardBackground};

  > * {
    flex: 1;
  }

  img {
    width: 100%;
    height: auto;
  }

  border-radius: 0;

  h1 {
    text-align: center;
  }

  @media screen and (min-width: 500px) {

    
    flex-direction: row;
  }
  
  @media screen and (min-width: 750px) {
  
  }

  @media screen and (min-width: 900px) {
    p {
      font-size: 1.75em;
    }
  }
  
  @media screen and (min-width: 1080px) {
    border-radius: .5em;
  }
`

const HeroWrapper = styled.div`
  position: relative;

  height: 50vh;

  @media screen and (min-width: 500px) {
    height: 50vh;
  }

  @media screen and (max-height: 1000px) {
    height: 70vh;
  }
`

const HeroBlack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.75;
  background-color: black;
  height: 100%;
  width: 100%;
  z-index: 1;
`

const HeroText = styled.header`
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  // Center
  left: 50%;
  transform: translate(-50%, 0);
  justify-content: space-evenly;
  color: ${props => props.theme.colors.text};
  width: 100%;
  height: 100%;
  font-size: 1.25em;
  padding: .2em;
  z-index: 2;

  & Button {
    font-size: 1.25rem;
  }

  & P {
    font-size: .5em;
  }
  
  H1, H2 {
    font-weight: 300;
  }

  @media screen and (min-width: 500px) {
    font-size: 1.5em;

    & ${Button} {
      font-size: 1.5rem;
    }
  }
  
  @media screen and (min-width: 750px) {
    H1, H2 {
      font-weight: normal;
    }
  }
`

const HomeOptions = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  
  & p {
    font-size: 1em;
  }

  @media screen and (min-width: 500px) {
    p {
      font-size: 1.25em;
    }
  }

  @media screen and (min-width: 750px) {
    p {
      font-size: 1.5em;
    }
    flex-direction: row;
  }
  
  & ${Flex} {
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex: 1;
    flex-direction: column;
    margin: 1em;
  }
`

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  p {
    //font-size: 1.25em;
    line-height: 1.25em;
  }
  
  @media screen and (min-width: 500px) {
    flex-direction: row;
    
    & ${ImageWrapper} {
      margin-left: 1em;
    }
  }
`

const HomePageDivider = styled.div`
  font-size: .70em;

  @media screen and (min-width: 400px) {
    font-size: .8em;
  }
  
  @media screen and (min-width: 500px) {
    font-size: 1em;
  }
`

const LogoWrapper = styled.div`
  width: 95%;
  max-width: 800px;
  box-shadow: none;
  background-color: transparent;
  
  @media screen and (min-width: 1000px) {
    width: 75vw;
  }
  margin: 0;
`

const homeCards = [
  {direction: "left", title: "Personalized", text: "Don't settle for templates and cookie-cutter designs. You deserve a website as unique as your business.", image: artImage2, alt: "Paint"},
  {direction: "right", title: "Optimized Everywhere", text: "Provide users with seamless experience, whether on mobile, desktop, or tablet.", image: optimizeImage, alt: "Person holding phone"},
  {direction: "left", title: "Secure", text: "Backed by Amazon Web Services, your users' data is protected by tested technology.", image: secureImage, alt: "Locked electronics"},
  {direction: "right", title: "Business Driven", text: "How can we grow your business? Need better customer outreach? Help tracking inventory? We'll find the solution for you.", image: businessImage, alt: "Business meeting"},
]

const demoPages = [
  {link: "https://medical.twinsilverdesign.com", image: medical},
  {link: "https://pizza.twinsilverdesign.com", image: pizza},
  {link: "https://shop.twinsilverdesign.com", image: shop},
  {link: "https://law.twinsilverdesign.com", image: law}
]

export default function Home() {
  const [newSiteModal, setNewSiteModal] = useState(false)
  const [refineModal, setRefineModal] = useState(false)
  const [changeModal, setChangeModal] = useState(false)

  return (
    <>
      <Head>
        <meta/>
      </Head>
      <HeroWrapper>
        <BackgroundImage>
          <Image priority objectFit='cover' placeholder="blur" layout="fill" src={heroImage} alt="Happy man at laptop"/>
        </BackgroundImage>
        <HeroBlack/>

        <HeroText>
          <LogoWrapper>
            <Image src={logoImage} alt="Twin Silver Logo"/>
          </LogoWrapper>
          <h1 className="font-serif text-4xl md:text-5xl m-0">Go Beyond the Basic</h1>
          <h2 className="font-serif text-3xl md:text-4xl">Helping to Grow Local Businesses in the NC Raleigh/Durham Area</h2>
          <Link layout="fixed" href='getstarted' passHref><ButtonLink>Get Started for Free</ButtonLink></Link>

        </HeroText>
      </HeroWrapper>

      <HomeOptions style={{justifyContent:'center'}}>
        <Flex>
          <H1 className="mb-4">Build from Scratch</H1>
          <p>No website? No problem. There&rsquo;s never been a better time.</p>
          <Button className="mt-4" onClick={() => setNewSiteModal(true)}>Learn More</Button>
        </Flex>
        <Flex>
          <H1 className="mb-4">Redesign or Refine</H1>
          <p>Give your customers a modern experience with a quick refresh or total overhaul.</p>
          <Button className="mt-4" onClick={() => setRefineModal(true)}>Learn More</Button>
        </Flex>
        <Flex>
          <H1 className="mb-4">Change Platforms</H1>
          <p>Not satisfied with the speed, price, or performance of your current web host? We&rsquo;ll find <i>your</i> best solution.</p>
          <Button className="mt-4" onClick={() => setChangeModal(true)}>Learn More</Button>
        </Flex>
      </HomeOptions>

      <HomePageDivider>
        <Divider>Four Reasons to Build With Us</Divider>
      </HomePageDivider>

      { homeCards.map(card =>
        <Fade key={card.title} direction={card.direction} triggerOnce="true">
          <HomeCard>
            <div className="flex flex-col m-4 mb-8 justify-center items-center" >
              <h1 className="mb-4 header-largest">{card.title}</h1>
              <h2 className="text-center font-light header-large font-light">{card.text}</h2>
            </div>
            <Flex flexDirection='row' justifyContent='center' style={{flex: 1}}>
              <ImageStyled src={card.image} placeholder="blur" alt={card.alt}/>
            </Flex>
          </HomeCard>
        </Fade>
      )}

      <HomePageDivider>
        <Divider>Quality Your Business Can Depend On</Divider>
      </HomePageDivider>

      <div className="flex justify-center mt-4 [&>*]:mx-4">
        <a href="http://upcity.com/web-design/raleigh?spotlight=profiles%2Ftwin-silver-web-design%2Fdurham">
          <img src="https://upcity-marketplace.s3.amazonaws.com/badge/159/full_color/04f57ddb4230a7fe40b649702bad1893.png" width="250px" height="250px" alt="TOP WEB DESIGNER" />
        </a>
        <a href="http://upcity.com/ecommerce-development/shopify/raleigh?spotlight=profiles%2Ftwin-silver-web-design%2Fdurham">
          <img src="https://upcity-marketplace.s3.amazonaws.com/badge/225/full_color/889798d7b0e8fb92e303da7efb5bfa26.png" width="250px" height="250px" alt="TOP SHOPIFY DEVELOPER" />
        </a>
        <a href="http://upcity.com/digital-marketing/raleigh?spotlight=profiles%2Ftwin-silver-web-design%2Fdurham"><img src="https://upcity-marketplace.s3.amazonaws.com/badge/167/full_color/45daf4bdf38c88b7ce8ee2b1e3346411.png" width="250px" height="250px" alt="TOP DIGITAL AGENCY" /></a>
      </div>

      <HomePageDivider>
        <Divider>Explore Our Demo Websites</Divider>
      </HomePageDivider>

      <Flex className="justify-center">
        { demoPages.map(page =>
          <Fade key={page.link} className="w-full">
            <a href={page.link}>
              <ImageWrapper className="my-4 mx-auto">
                <ImageStyled placeholder="blur" layout="responsive" src={page.image}/>
              </ImageWrapper>
            </a>
          </Fade>
        )}
      </Flex>

      { newSiteModal &&
        <Modal style={{maxWidth:'800px'}} animate={true} onClose={() => setNewSiteModal(false)} title={"Build from Scratch"}>
          <PopupContent>
            <div style={{flex: 1, marginBottom: '1em'}}>
              <p>Delving into web development without the proper tools is overwhelming. Let us take care of everything: registering a domain name, finding a hosting platform, and crafting your unique storefront.</p>
              <p style={{overflowWrap: 'break-word'}}>Not sure your business needs a website? A digital presence can attract customers, spread awareness, and
                build community. Take advantage of the rapid growth of online sales: the percentage of retail sales
                coming from e-commerce has tripled over the past ten years, reaching over 200 billion dollars in the US in 2021<sup>*</sup>.</p>
            </div>
            <ImageWrapper style={{flex:'1'}}>
              <Image style={{margin: '0 auto'}} src={newSiteImg} alt='Building being constructed'/>
            </ImageWrapper>
          </PopupContent>
          <small>*<a href='https://www.census.gov/retail/mrts/www/data/pdf/ec_current.pdf'>https://www.census.gov/retail/mrts/www/data/pdf/ec_current.pdf</a></small>
          <GroupContainer>
            <Link href='/getstarted' passHref><ButtonLink>Get Started</ButtonLink></Link>
          </GroupContainer>
        </Modal>
      }
      { refineModal &&
        <Modal style={{maxWidth:'800px'}} animate={true} onClose={() => setRefineModal(false)} title="Redesign or Refine">
          <PopupContent>
            <div style={{flex: 1}}>
              <p>A new look can revitalize your business, wowing new and old customers. Web design is rapidly changing,
                so let us take care of bringing your site up to date.</p>
              <p>But don&rsquo;t stop with a simple redesign. Consider the features that your site is missing that users want:
                comments, user accounts, and social interaction.</p>
            </div>
            <ImageWrapper style={{flex:'1'}}>
              <Image style={{margin: '0 auto'}} src={refineSiteImg} alt='People painting wall'/>
            </ImageWrapper>
          </PopupContent>
          <GroupContainer>
            <Link href='/getstarted' passHref><ButtonLink>Get Started</ButtonLink></Link>
          </GroupContainer>
        </Modal>
      }
      { changeModal &&
        <Modal style={{maxWidth:'800px'}} animate={true} onClose={() => setChangeModal(false)} title="Change Platforms">
          <PopupContent>
            <div style={{flex: 1}}>
              <p>
                As a business grows, the infrastructure it depends on has to grow with it. If you aren&rsquo;t completely
                satisfied with your current web solution, we can compile a comprehensive comparison of alternatives.
                Once you&rsquo;re ready, let us take care of your move.
              </p>
            </div>
            <ImageWrapper style={{flex:'1'}}>
              <Image style={{margin: '0 auto'}} src={changePlatformImg} alt='Woman at crossroads'/>
            </ImageWrapper>
          </PopupContent>
          <GroupContainer>
            <Link href='/getstarted' passHref><ButtonLink>Get Started</ButtonLink></Link>
          </GroupContainer>
        </Modal>
      }
      </>
  )
}
