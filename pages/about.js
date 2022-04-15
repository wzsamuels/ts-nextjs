import {H1, H2} from '../components/atoms/Typography';
import FlexColumn from '../components/atoms/FlexColumn';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Twin Silver</title>
      </Head>
      <FlexColumn className='center'>
        <H1>About Us</H1>
        <H2>A Local Triangle Business with World Wide</H2>
        <p></p>
      </FlexColumn>
    </>
  )
}

export default About