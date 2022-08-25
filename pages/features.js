import React from 'react';
import Flex from "../components/atoms/Flex";
import Card from '../components/atoms/Card';
import styled from 'styled-components';
import {H1, H2} from '../components/atoms/Typography';
import analysisImg from '../public/assets/images/features/analysis_icon.svg'
import copywriteImg from '../public/assets/images/features/content_icon.svg'
import navigationImg from '../public/assets/images/features/navigation_icon.svg'
import optimizationImg from '../public/assets/images/features/speed_icon.svg'
import newsletterImg from '../public/assets/images/features/newsletter_icon.svg'
import seoImg from '../public/assets/images/features/seo_icon.svg'
import dataImg from '../public/assets/images/features/data_icon2.svg'
import ecommerceImg from '../public/assets/images/features/ecommerce_icon.svg'
import engagementImg from '../public/assets/images/features/review_icon.svg'
import accountImg from '../public/assets/images/features/accounts_icon.svg'
import securityImg from '../public/assets/images/features/security_icon.svg'
import chatbotImg from '../public/assets/images/features/chatbot_icon.svg'
import ImageStyled from '../components/atoms/ImageStyled';
import Head from 'next/head';
import FlexColumn from "../components/atoms/FlexColumn";
import {Fade} from "react-awesome-reveal";

const Features = () => {
  return (
    <FlexColumn center>
      <Head>
        <title>Features | Twin Silver</title>
      </Head>
      <h1 className="header-largest my-8">
        What can we do for you?
      </h1>
      <Flex className="justify-center">
        { featureList.map((feature, index) =>
          <Fade key={feature.title} className={`flex`} direction={`${index % 2 === 0 ? "left" : "right"}`}>
            <FeatureCard>
              <Flex>
                <ImageStyled style={{flex: 1}} width={150} height={150} src={feature.img} alt={feature.title}/>
              </Flex>
              <div style={{flex: 1}}>
                <H2>{feature.title}</H2>
                <p>{feature.text}</p>
              </div>
            </FeatureCard>
          </Fade>
        )}
      </Flex>
    </FlexColumn>
  )
}

const FeatureCard = styled(Card)`
  display: flex;
  flex-direction: row;
  padding: 0 .5em;
  width: 500px;
  max-width: 100%;
  margin: 1em 0;
  height: auto;
  border-radius: 0;

  H2 {
    margin: 0;
    font-size: 1.5em;
  }
  
  & > * {
    padding: 1em;
  }
  
  div:last-child {
    flex: auto;
  }

  // Separate 
  @media screen and (min-width: 500px) {
    border-radius: 6px;
    margin: 1em;
  }
  
  @media screen and (min-width: 600px) {
    H2 {
      margin: 0;
      font-size: 2em;
    }
  }
`

const featureList = [
  {
    title: "Website Speed",
    text: "If your site doesn't load quickly, your visitors might leave before getting started. We'll optimize every component for the smoothest experience.",
    img: optimizationImg
  },
  {
    title: "Email Marketing",
    text: "Keep users up to date with promotions, newsletters, and order confirmations.",
    img: newsletterImg
  },
  {
    title: "Search Engine Optimization",
    text: "What's the point of a great looking website if no one can find it? We know the hidden metrics used by search engines and how to improve your site's ranking.",
    img: seoImg
  },
  {
    title: "Data Analysis",
    text: "Boost your business by digging into visitor retention rates and your site's most popular pages.",
    img: dataImg
  },
  {
    title: "Ecommerce",
    text: "Provide a professional experience with shopping carts, product recommendations, and wishlists. Accept payments with credit card, Paypal, Amazon, Google Pay, and Apple Pay.",
    img: ecommerceImg,
  },
  {
    title: "User Engagement",
    text: "Use product reviews, comment sections, and social media to keep users invested in your site.",
    img: engagementImg,
  },
  {
    title: "User Accounts",
    text: "Allow users to browse their order history, update personal information, and customize your site's experience. Users can sign up and login with an account unique to your website or use their existing Google, Amazon, or Apple accounts.",
    img: accountImg
  },
  {
    title: "Security",
    text: "All of our sites use HTTPS by default to protect user data and an encrypted payment system to keep credit card details private.",
    img: securityImg
  },
  {
    title: "Chat Bots",
    text: "Use AI to streamline purchases, schedule appointments, and answer common questions.",
    img: chatbotImg
  },
  {
    title: "Content Creation",
    text: "We can edit photos, source illustrations, and write product descriptions so that you can focus on running your business.",
    img: copywriteImg
  },
  {
    title: "Competitive Analysis",
    text: "Users will compare your business to competitors, so shouldn't you? We can ensure your site surpasses others in the industry.",
    img: analysisImg
  },
  {
    title: "Navigation",
    text: "Help customers find your locations by adding Google or Apple maps to your site.",
    img: navigationImg
  },
]

export default Features