import {H1, H2} from '../components/atoms/Typography';
import FlexColumn from '../components/atoms/FlexColumn';
import Head from 'next/head';
import headShot from '../public/assets/images/face.png'
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Twin Silver</title>
      </Head>
      <div className='flex flex-col mx-4 w-full max-w-textbox items-center'>
        <h1 className="header-largest text-center my-8 font-light">A Local Triangle Business with World Wide Reach</h1>
        <p className="my-8">At Twin Silver</p>
        <Image  src={headShot}/>
        <p className="text-center my-4">Zach Samuels - Owner and Lead Web Designer</p>
      </div>
    </>
  )
}

export default About