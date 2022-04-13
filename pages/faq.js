import Flex from '../components/atoms/Flex';
import {H1} from '../components/atoms/ui/Typography';
import Head from 'next/head';

const Faq = () => {
  return (
    <>
      <Head>
        <title>About Us | Twin Silver</title>
      </Head>
      <Flex flexDirection='column' alignItems='center'>
        <H1>FAQ</H1>
      </Flex>
    </>
  )
}

export default Faq