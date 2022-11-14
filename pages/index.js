import Image from "next/legacy/image";
import Head from "next/head";
import Link from 'next/link'
import React, {useState} from 'react';
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
import Modal from '../components/Modal';
import {Fade} from "react-awesome-reveal";

const homeCards = [
  {
    direction: "left",
    title: "Personalized",
    text: "Don't settle for templates and cookie-cutter designs. You deserve a website as unique as your business.",
    image: artImage2,
    alt: "Paint"
  },
  {
    direction: "right", title: "Optimized Everywhere", text: "Provide users with seamless experience, whether on mobile, desktop, or tablet.", image: optimizeImage, alt: "Person holding phone"},
  {
    direction: "left", title: "Secure", text: "Backed by Amazon Web Services, your users' data is protected by tested technology.", image: secureImage, alt: "Locked electronics"},
  {
    direction: "right", title: "Business Driven", text: "How can we grow your business? Need better customer outreach? Help tracking inventory? We'll find the solution for you.", image: businessImage, alt: "Business meeting"},
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
      <div className="relative h-[50vh] min-[500px]:h-[50vh] min-[1000px]:h-[70vh]">
        <div className="relative top-0 left-0 h-full w-full z-0">
          <Image priority objectFit='cover' placeholder="blur" layout="fill" src={heroImage} alt="Happy man at laptop"/>
        </div>
        <div className="absolute top-0 left-0 opacity-75 bg-black h-full w-full z-10"/>

        <header className="text-center absolute flex flex-col items-center top-0 justify-evenly w-full h-full text-xl p-1 z-20">
          <div className="w-[95%] max-w-[800px] lg:w-[75vw] m-0">
            <Image src={logoImage} alt="Twin Silver Logo"/>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl m-0">Go Beyond the Basic</h1>
          <h2 className="font-serif text-3xl md:text-4xl">Helping to Grow Local Businesses in the NC Raleigh/Durham Area</h2>
          <Link className="button" href='/getstarted'>Get Started for Free</Link>
        </header>
      </div>

      <div className="flex flex-col justify-center lg:flex-row">
        <div className="flex flex-col justify-between items-center text-center m-1 flex-1">
          <h1 className="mt-4 mb-4 header-largest font-light">Build from Scratch</h1>
          <p className="sm:text-xl md:text-2xl">No website? No problem. There&rsquo;s never been a better time.</p>
          <button className="button mt-4" onClick={() => setNewSiteModal(true)}>Learn More</button>
        </div>
        <div className="flex flex-col justify-between items-center text-center m-1 flex-1">
          <h1 className="mt-4 mb-4 header-largest font-light">Redesign or Refine</h1>
          <p className="sm:text-xl md:text-2xl">Give your customers a modern experience with a quick refresh or total overhaul.</p>
          <button className="button mt-4" onClick={() => setRefineModal(true)}>Learn More</button>
        </div>
        <div className="flex flex-col justify-between items-center text-center m-1 flex-1">
          <h1 className="mt-4 mb-4 header-largest font-light">Change Platforms</h1>
          <p className="sm:text-xl md:text-2xl">Not satisfied with the speed, price, or performance of your current web host? We&rsquo;ll find <i>your</i> best solution.</p>
          <button className="button mt-4" onClick={() => setChangeModal(true)}>Learn More</button>
        </div>
      </div>

      <h2 className="header-largest text-center my-8 ">Four Reasons to Build With Us</h2>

      { homeCards.map(card =>
        <Fade key={card.title} direction={card.direction} triggerOnce="true">
          <div className="flex flex-col w-[1080px] max-w-full mt-4 mb-8 mx-auto h-auto bg-darkerShade sm:flex-row p-2">
            <div className="flex flex-col m-4 mb-8 justify-center items-center flex-1" >
              <h1 className="mb-4 header-larger">{card.title}</h1>
              <h2 className="text-center font-light header-large font-light">{card.text}</h2>
            </div>
            <div className="flex justify-center" style={{flex: 1}}>
              <Image className="rounded-md" src={card.image} placeholder="blur" alt={card.alt}/>
            </div>
          </div>
        </Fade>
      )}

      <h2 className="header-larger">Quality Your Business Can Depend On</h2>

      <div className="flex justify-center mt-4 [&>*]:mx-4">
        <a href="http://upcity.com/web-design/raleigh?spotlight=profiles%2Ftwin-silver-web-design%2Fdurham">
          <img src="https://upcity-marketplace.s3.amazonaws.com/badge/159/full_color/04f57ddb4230a7fe40b649702bad1893.png" width="250px" height="250px" alt="TOP WEB DESIGNER" />
        </a>
        <a href="http://upcity.com/ecommerce-development/shopify/raleigh?spotlight=profiles%2Ftwin-silver-web-design%2Fdurham">
          <img src="https://upcity-marketplace.s3.amazonaws.com/badge/225/full_color/889798d7b0e8fb92e303da7efb5bfa26.png" width="250px" height="250px" alt="TOP SHOPIFY DEVELOPER" />
        </a>
        <a href="http://upcity.com/digital-marketing/raleigh?spotlight=profiles%2Ftwin-silver-web-design%2Fdurham"><img src="https://upcity-marketplace.s3.amazonaws.com/badge/167/full_color/45daf4bdf38c88b7ce8ee2b1e3346411.png" width="250px" height="250px" alt="TOP DIGITAL AGENCY" /></a>
      </div>

      <h2 className="header-larger self-center">Explore Our Demo Websites</h2>

      <div className="flex justify-center flex-wrap">
        { demoPages.map(page =>
          <Fade key={page.link} className="w-full">
            <a href={page.link}>
              <div className="my-4 mx-auto w-full max-w-[800px]">
                <Image className="rounded-md" placeholder="blur" layout="responsive" src={page.image}/>
              </div>
            </a>
          </Fade>
        )}
      </div>

      { newSiteModal &&
        <Modal style={{maxWidth:'800px'}} animate={true} onClose={() => setNewSiteModal(false)} title={"Build from Scratch"}>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="flex-1">
              <p>Delving into web development without the proper tools is overwhelming. Let us take care of everything: registering a domain name, finding a hosting platform, and crafting your unique storefront.</p>
              <p style={{overflowWrap: 'break-word'}}>Not sure your business needs a website? A digital presence can attract customers, spread awareness, and
                build community. Take advantage of the rapid growth of online sales: the percentage of retail sales
                coming from e-commerce has tripled over the past ten years, reaching over 200 billion dollars in the US in 2021<sup>*</sup>.</p>
            </div>
            <div className="flex-1 mt-4 sm:mt-0 sm:ml-4">
              <Image src={newSiteImg} alt='Building being constructed'/>
            </div>
          </div>
          <small>*<a href='https://www.census.gov/retail/mrts/www/data/pdf/ec_current.pdf'>https://www.census.gov/retail/mrts/www/data/pdf/ec_current.pdf</a></small>
          <div className="flex justify-center mt-8">
            <Link href='/getstarted' className="button">Get Started</Link>
          </div>
        </Modal>
      }
      { refineModal &&
        <Modal style={{maxWidth:'800px'}} animate={true} onClose={() => setRefineModal(false)} title="Redesign or Refine">
          <div className="flex flex-col justify-center sm:flex-row">
            <div className="flex-1">
              <p>A new look can revitalize your business, wowing new and old customers. Web design is rapidly changing,
                so let us take care of bringing your site up to date.</p>
              <p>But don&rsquo;t stop with a simple redesign. Consider the features that your site is missing that users want:
                comments, user accounts, and social interaction.</p>
            </div>
            <div className="flex-1 mt-4 sm:mt-0 sm:ml-4">
              <Image src={refineSiteImg} alt='People painting wall'/>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href='/getstarted' className="button">Get Started</Link>
          </div>
        </Modal>
      }
      { changeModal &&
        <Modal style={{maxWidth:'800px'}} animate={true} onClose={() => setChangeModal(false)} title="Change Platforms">
          <div className="flex flex-col justify-center sm:flex-row">
            <div className="flex-1">
              <p>
                As a business grows, the infrastructure it depends on has to grow with it. If you aren&rsquo;t completely
                satisfied with your current web solution, we can compile a comprehensive comparison of alternatives.
                Once you&rsquo;re ready, let us take care of your move.
              </p>
            </div>
            <div className="flex-1 mt-4 sm:mt-0 sm:ml-4">
              <Image src={changePlatformImg} alt='Woman at crossroads'/>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href='/getstarted' className="button">Get Started</Link>
          </div>
        </Modal>
      }
      </>
  )
}
